'use client';

import { useCallback, useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_OPEN_EVENT,
  GA_MEASUREMENT_ID,
  clearAnalyticsCookies,
  readConsent,
  trackEvent,
  writeConsent,
  type ConsentValue,
} from '@/lib/analytics';

const texts = {
  fr: {
    title: 'Mesure d’audience',
    body: 'Avec votre accord, nous utilisons Google Analytics pour compter les visites et savoir quelles pages vous sont utiles. Aucune publicité, aucune revente. Vous pouvez changer d’avis à tout moment depuis le lien « Gérer les cookies » en bas de page.',
    more: 'En savoir plus',
    accept: 'Accepter',
    refuse: 'Refuser',
    policy: '/confidentialite',
  },
  en: {
    title: 'Audience measurement',
    body: 'With your consent, we use Google Analytics to count visits and see which pages are useful to you. No advertising, no data resale. You can change your mind at any time from the “Manage cookies” link at the bottom of the page.',
    more: 'Learn more',
    accept: 'Accept',
    refuse: 'Refuse',
    policy: '/confidentialite',
  },
};

/**
 * Bandeau de consentement, chargement de GA4 après accord, et suivi des
 * actions qui comptent pour le club : appels, e-mails, accès au contact.
 */
export function Analytics() {
  const pathname = usePathname() || '/';
  const lang = pathname.startsWith('/en') ? 'en' : 'fr';
  const t = texts[lang];

  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setBannerOpen(stored === null);

    const onOpen = () => setBannerOpen(true);
    const onChange = (e: Event) => setConsent((e as CustomEvent<ConsentValue>).detail);
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
      window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    };
  }, []);

  // Suivi des clics utiles, par délégation sur toute la page.
  useEffect(() => {
    if (consent !== 'granted') return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const label = (link.textContent || '').trim().slice(0, 80);
      const page = window.location.pathname;
      if (href.startsWith('tel:')) {
        trackEvent('clic_telephone', { link_text: label, page_path: page });
      } else if (href.startsWith('mailto:')) {
        trackEvent('clic_email', { link_text: label, page_path: page });
      } else if (/^\/(en\/)?contact(\?|$|#)/.test(href)) {
        trackEvent('clic_contact', { link_text: label, page_path: page });
      }
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, [consent]);

  const choose = useCallback(
    (value: ConsentValue) => {
      const previous = consent;
      writeConsent(value);
      setBannerOpen(false);
      if (value === 'denied' && previous === 'granted') {
        if (typeof window.gtag === 'function') {
          window.gtag('consent', 'update', { analytics_storage: 'denied' });
        }
        clearAnalyticsCookies();
        window.location.reload();
      }
    },
    [consent],
  );

  return (
    <>
      {consent === 'granted' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'granted'
});
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { allow_google_signals: false, allow_ad_personalization_signals: false });`}
          </Script>
        </>
      )}

      {bannerOpen && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={t.title}
          className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-2xl bg-midnight text-cream shadow-2xl border border-cream/10 p-5 sm:p-6">
            <p className="font-serif text-lg mb-2">{t.title}</p>
            <p className="text-sm text-cream/85 leading-relaxed">
              {t.body}{' '}
              <a href={t.policy} className="underline hover:text-cream">
                {t.more}
              </a>
            </p>
            <div className="mt-4 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
              <button
                type="button"
                onClick={() => choose('denied')}
                className="rounded-full border border-cream/40 px-6 py-2.5 text-sm font-medium hover:bg-cream/10 transition"
              >
                {t.refuse}
              </button>
              <button
                type="button"
                onClick={() => choose('granted')}
                className="rounded-full border border-cream/40 px-6 py-2.5 text-sm font-medium hover:bg-cream/10 transition"
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
