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

function useScrolled(threshold: number): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > threshold);
        rafId = null;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [threshold]);

  return isScrolled;
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
  const pathname = usePathname();
  const isEn = isEnPath(pathname);
  const scrolled = useScrolled(20);
  const isScrolledLogo = useScrolled(50);

  const contactHref = isEn ? '/en/contact' : '/contact';
  const homeHref = isEn ? '/en' : '/';
  const contactCta = isEn ? 'Contact us' : 'Nous contacter';
  const openMenuLabel = isEn ? 'Open menu' : 'Ouvrir le menu';
  const closeMenuLabel = isEn ? 'Close menu' : 'Fermer le menu';
  const callLabel = isEn ? 'Call the club' : 'Appeler le club';
  const telHref = `tel:${siteConfig.contact.phone}`;

  const items: ReadonlyArray<{ href: string; label: string }> = isEn
    ? enItems
    : frNavItems.map((item) => ({ href: item.href, label: item.label }));

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
        <div
          className={`container mx-auto flex items-center justify-between py-4 transition-all duration-300 ease-out motion-reduce:transition-none ${
            isScrolledLogo ? '' : 'lg:py-6'
          }`}
        >
          <Link
            href={homeHref}
            className="flex items-center"
            aria-label={siteConfig.fullName}
          >
            <Image
              src="/logos/logo-horizontal-b.svg"
              alt="Fort Apache — Équitation Vence"
              width={200}
              height={82}
              priority
              className={`hidden lg:block w-auto transition-all duration-300 ease-out motion-reduce:transition-none ${
                isScrolledLogo ? 'h-14' : 'h-20'
              }`}
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
            <a
              href={telHref}
              className="flex items-center gap-2 text-sm font-medium text-midnight hover:text-terracotta transition-colors whitespace-nowrap"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="sr-only">{callLabel} : </span>
              <span className="hidden xl:inline">{siteConfig.contact.phoneDisplay}</span>
            </a>
            <LinkButton href={contactHref} variant="primary" size="sm">
              {contactCta}
            </LinkButton>
          </nav>

          <div className="lg:hidden flex items-center gap-3">
            <a
              href={telHref}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-terracotta text-white shadow-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="sr-only">{callLabel}</span>
            </a>
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
            <a
              href={telHref}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-terracotta text-terracotta font-medium mb-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {callLabel} : {siteConfig.contact.phoneDisplay}
            </a>
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
