'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { navItems, siteConfig } from '@/lib/site-config';
import { LinkButton } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const tHeader = useTranslations('Header');
  const isEn = locale === 'en';

  const contactHref = isEn ? '/en/contact' : '/contact';
  const homeHref = isEn ? '/en' : '/';

  const enNavItems: ReadonlyArray<{ href: string; label: string }> = [
    { href: '/en', label: tHeader('home') },
    { href: '/le-club', label: tHeader('theClub') },
    { href: '/en/activities', label: tHeader('activities') },
    { href: '/cours', label: tHeader('lessons') },
    { href: '/stages', label: tHeader('camps') },
    { href: '/en/pricing', label: tHeader('pricing') },
    { href: '/galerie', label: tHeader('gallery') },
    { href: '/actualites', label: tHeader('blog') },
  ];

  const items: ReadonlyArray<{ href: string; label: string }> = isEn
    ? enNavItems
    : navItems.map((item) => ({ href: item.href, label: item.label }));

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
            ? 'bg-creme/90 backdrop-blur-md shadow-sm'
            : 'bg-creme/70 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link
            href={homeHref}
            className="font-serif text-2xl md:text-3xl font-semibold text-foret-dark tracking-tight"
            aria-label={siteConfig.fullName}
          >
            Fort Apache
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
                      ? 'text-bordeaux'
                      : 'text-charbon hover:text-bordeaux'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <LanguageSwitcher className="ml-1" />
            <LinkButton href={contactHref} variant="primary" size="sm">
              {isEn ? tHeader('contactCta') : 'Nous contacter'}
            </LinkButton>
          </nav>

          <button
            type="button"
            className="lg:hidden relative z-[70] p-2 -mr-2 text-foret-dark"
            aria-label={
              open
                ? isEn
                  ? tHeader('closeMenu')
                  : 'Fermer le menu'
                : isEn
                  ? tHeader('openMenu')
                  : 'Ouvrir le menu'
            }
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
        className={`lg:hidden fixed inset-0 z-[60] bg-creme transition-transform duration-300 ease-out ${
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
                className={`block py-4 text-xl font-serif border-b border-sable/30 ${
                  active ? 'text-bordeaux' : 'text-foret-dark'
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
              {isEn ? tHeader('contactCta') : 'Nous contacter'}
            </LinkButton>
          </div>
        </nav>
      </div>
    </>
  );
}
