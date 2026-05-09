'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navItems as frNavItems, siteConfig } from '@/lib/site-config';
import { LinkButton } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

// Source de vérité unique côté client : l'URL. On évite useLocale() /
// useTranslations() car le provider next-intl peut rester périmé après
// une navigation client-side dans l'App Router (le root layout n'est pas
// systématiquement re-rendu). L'URL, elle, est toujours à jour.
function isEnPath(pathname: string): boolean {
  return pathname === '/en' || pathname.startsWith('/en/');
}

const enItems: ReadonlyArray<{ href: string; label: string }> = [
  { href: '/en', label: 'Home' },
  { href: '/le-club', label: 'The Club' },
  { href: '/en/activities', label: 'Activities' },
  { href: '/cours', label: 'Lessons' },
  { href: '/stages', label: 'Camps' },
  { href: '/en/pricing', label: 'Pricing' },
  { href: '/galerie', label: 'Gallery' },
  { href: '/actualites', label: 'Blog' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isEn = isEnPath(pathname);

  const contactHref = isEn ? '/en/contact' : '/contact';
  const homeHref = isEn ? '/en' : '/';
  const contactCta = isEn ? 'Contact us' : 'Nous contacter';
  const openMenuLabel = isEn ? 'Open menu' : 'Ouvrir le menu';
  const closeMenuLabel = isEn ? 'Close menu' : 'Fermer le menu';

  const items: ReadonlyArray<{ href: string; label: string }> = isEn
    ? enItems
    : frNavItems.map((item) => ({ href: item.href, label: item.label }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === '/' || href === '/en') return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-sm'
            : 'bg-cream/70 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link
            href={homeHref}
            className="flex items-center"
            aria-label={siteConfig.fullName}
          >
            <Image
              src="/logos/logo-horizontal-b.svg"
              alt="Fort Apache — Équitation Vence"
              width={137}
              height={56}
              priority
              className="hidden lg:block h-14 w-auto"
            />
            <Image
              src="/logos/logo-original.svg"
              alt="Fort Apache — Équitation Vence"
              width={63}
              height={44}
              priority
              className="lg:hidden h-11 w-auto"
            />
          </Link>

          <nav
            aria-label={isEn ? 'Main navigation' : 'Navigation principale'}
            className="hidden lg:flex items-center gap-7"
          >
            {items.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? 'text-terracotta'
                      : 'text-midnight hover:text-terracotta'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <LanguageSwitcher className="ml-1" />
            <LinkButton href={contactHref} variant="primary" size="sm">
              {contactCta}
            </LinkButton>
          </nav>

          <button
            type="button"
            className="lg:hidden relative z-[70] p-2 -mr-2 text-midnight"
            aria-label={open ? closeMenuLabel : openMenuLabel}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Panneau mobile rendu en dehors du <header> pour échapper au containing
          block créé par backdrop-filter (sinon inset-0 se calcule par rapport
          au header ~72px et non au viewport). */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-[60] bg-cream transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <nav
          aria-label={isEn ? 'Mobile menu' : 'Menu mobile'}
          className="flex flex-col px-6 pt-24 pb-10 gap-1 h-full overflow-y-auto"
        >
          {items.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-4 text-xl font-display border-b border-sage/30 ${
                  active ? 'text-terracotta' : 'text-midnight'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-8 flex justify-center">
            <LanguageSwitcher
              tone="light"
              onNavigate={() => setOpen(false)}
              className="text-base"
            />
          </div>
          <div className="mt-6">
            <LinkButton
              href={contactHref}
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {contactCta}
            </LinkButton>
          </div>
        </nav>
      </div>
    </>
  );
}
