'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const frToEn: Record<string, string> = {
  '/': '/en',
  '/activites': '/en/activities',
  '/tarifs': '/en/pricing',
  '/contact': '/en/contact',
};

const enToFr: Record<string, string> = {
  '/en': '/',
  '/en/activities': '/activites',
  '/en/pricing': '/tarifs',
  '/en/contact': '/contact',
};

function getCurrentLocale(pathname: string): 'fr' | 'en' {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  return 'fr';
}

function getFrHref(pathname: string, locale: 'fr' | 'en'): string {
  if (locale === 'fr') return pathname;
  return enToFr[pathname] ?? '/';
}

function getEnHref(pathname: string, locale: 'fr' | 'en'): string {
  if (locale === 'en') return pathname;
  return frToEn[pathname] ?? '/en';
}

type Props = {
  className?: string;
  tone?: 'light' | 'dark';
  onNavigate?: () => void;
};

export function LanguageSwitcher({
  className = '',
  tone = 'light',
  onNavigate,
}: Props) {
  const pathname = usePathname();
  const locale = getCurrentLocale(pathname);
  const frHref = getFrHref(pathname, locale);
  const enHref = getEnHref(pathname, locale);

  const activeColor =
    tone === 'dark' ? 'text-white font-semibold' : 'text-bordeaux font-semibold';
  const inactiveColor =
    tone === 'dark'
      ? 'text-creme/70 hover:text-white'
      : 'text-charbon/70 hover:text-bordeaux';
  const separatorColor = tone === 'dark' ? 'text-creme/40' : 'text-charbon/40';

  return (
    <div
      className={`inline-flex items-center gap-1.5 text-sm ${className}`}
      aria-label="Language"
    >
      <Link
        href={frHref}
        onClick={onNavigate}
        lang="fr"
        hrefLang="fr"
        aria-current={locale === 'fr' ? 'true' : undefined}
        className={`transition ${
          locale === 'fr' ? activeColor : inactiveColor
        }`}
      >
        FR
      </Link>
      <span className={separatorColor} aria-hidden="true">
        |
      </span>
      <Link
        href={enHref}
        onClick={onNavigate}
        lang="en"
        hrefLang="en"
        aria-current={locale === 'en' ? 'true' : undefined}
        className={`transition ${
          locale === 'en' ? activeColor : inactiveColor
        }`}
      >
        EN
      </Link>
    </div>
  );
}
