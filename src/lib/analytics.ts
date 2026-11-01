/**
 * Mesure d'audience Google Analytics 4.
 *
 * Le traceur n'est chargé qu'après accord du visiteur (bandeau de
 * consentement). Sans accord, aucune requête ne part vers Google.
 */

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || 'G-LFNHHWRYKR';

export const CONSENT_STORAGE_KEY = 'fa-consent-v1';
export const CONSENT_OPEN_EVENT = 'fa:open-consent';
export const CONSENT_CHANGE_EVENT = 'fa:consent-change';

/** Durée de validité du choix du visiteur : 6 mois, recommandation CNIL. */
const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182;

export type ConsentValue = 'granted' | 'denied';

type StoredConsent = { value: ConsentValue; date: number };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function readConsent(): ConsentValue | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.value !== 'granted' && parsed.value !== 'denied') return null;
    if (Date.now() - parsed.date > CONSENT_MAX_AGE_MS) return null;
    return parsed.value;
  } catch {
    return null;
  }
}

export function writeConsent(value: ConsentValue) {
  try {
    const stored: StoredConsent = { value, date: Date.now() };
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Stockage indisponible (navigation privée) : le choix vaut pour la visite.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: value }));
}

/** Supprime les cookies Google Analytics déjà posés (retrait du consentement). */
export function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`];
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim();
    if (!name || !(name === '_ga' || name.startsWith('_ga_') || name === '_gid')) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${
        domain ? `; domain=${domain}` : ''
      }`;
    });
  });
}

/** Envoie un événement à GA4, uniquement si le traceur est chargé. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  if (readConsent() !== 'granted') return;
  window.gtag('event', name, params);
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
