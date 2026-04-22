'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navItems, siteConfig } from '@/lib/site-config';
import { LinkButton } from '@/components/ui/Button';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-creme/90 backdrop-blur-md shadow-sm'
          : 'bg-creme/70 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-serif text-2xl md:text-3xl font-semibold text-foret-dark tracking-tight"
          aria-label={siteConfig.fullName}
        >
          Fort Apache
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden lg:flex items-center gap-7"
        >
          {navItems.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
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
          <LinkButton href="/contact" variant="primary" size="sm">
            Nous contacter
          </LinkButton>
        </nav>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-foret-dark"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
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

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-creme transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <nav
          aria-label="Menu mobile"
          className="flex flex-col px-6 pt-24 pb-10 gap-1 h-full overflow-y-auto"
        >
          {navItems.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
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
          <div className="mt-8">
            <LinkButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Nous contacter
            </LinkButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
