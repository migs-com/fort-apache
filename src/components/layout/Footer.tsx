import Image from 'next/image';
import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { navItems, siteConfig } from '@/lib/site-config';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

const enNavItems = [
  { href: '/en', label: 'Home' },
  { href: '/en/activities', label: 'Activities' },
  { href: '/en/pricing', label: 'Pricing' },
  { href: '/en/contact', label: 'Contact' },
] as const;

export async function Footer() {
  const year = new Date().getFullYear();
  const locale = await getLocale();
  const isEn = locale === 'en';
  const tFooter = isEn ? await getTranslations('Footer') : null;

  const navLinks: ReadonlyArray<{ href: string; label: string }> = isEn
    ? enNavItems
    : [
        ...navItems.map((item) => ({ href: item.href, label: item.label })),
        { href: '/contact', label: 'Contact' },
      ];

  return (
    <footer className="bg-midnight text-cream mt-24 border-t border-cream/10">
      <div className="container mx-auto py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/logos/logo-vertical-blanc.svg"
            alt="Fort Apache — Club Équestre"
            width={91}
            height={100}
            className="h-24 w-auto mb-4"
          />
          <p className="text-cream/80 max-w-sm leading-relaxed">
            {isEn
              ? tFooter!('presentation')
              : 'Club équestre pour tous les niveaux. Cours, stages, balades à poney et randonnées au cœur des Alpes-Maritimes, à Vence.'}
          </p>
          <p className="mt-6 text-sm text-cream/70">
            {isEn
              ? tFooter!('hours')
              : 'Ouvert tous les jours — de 10h à 17h'}
          </p>
          {(siteConfig.socials.facebook || siteConfig.socials.instagram) && (
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wide text-cream/60">
                {isEn ? tFooter!('followUs') : 'Suivez-nous'}
              </span>
              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 transition"
                  aria-label="Facebook Fort Apache"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4 text-cream"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              )}
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 transition"
                  aria-label="Instagram Fort Apache"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4 text-cream"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}
            </div>
          )}

          <div className="mt-8">
            <LanguageSwitcher tone="dark" />
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg text-cream mb-4">
            {isEn ? tFooter!('navTitle') : 'Navigation'}
          </h4>
          <ul className="space-y-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-cream hover:text-sage transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg text-cream mb-4">
            {isEn ? tFooter!('findUsTitle') : 'Nous trouver'}
          </h4>
          <address className="not-italic text-sm text-cream/80 space-y-1">
            <p>
              {isEn
                ? tFooter!('street')
                : siteConfig.contact.address.street}
            </p>
            <p>
              {isEn
                ? tFooter!('city')
                : `${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.locality}`}
            </p>
            <p className="pt-2">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="hover:text-sage transition"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-sage transition"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container mx-auto py-6 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-cream/60">
          <p>
            {isEn
              ? tFooter!('copyright', { year })
              : `© ${year} Fort Apache — Club Équestre. Tous droits réservés.`}
          </p>
          <p>
            {isEn ? (
              tFooter!('credits')
            ) : (
              <>
                Site réalisé par{' '}
                <span className="font-medium">Mig&apos;s Communication</span>
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
