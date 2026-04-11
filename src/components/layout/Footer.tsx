import Link from 'next/link';
import { navItems, siteConfig } from '@/lib/site-config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foret-dark text-creme mt-24">
      <div className="container mx-auto py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl text-white mb-3">Fort Apache</p>
          <p className="text-creme/80 max-w-sm leading-relaxed">
            Club équestre pour tous les niveaux. Cours, stages, randonnées et
            compétitions dans un cadre exceptionnel.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={siteConfig.socials.facebook}
              className="text-creme/70 hover:text-white transition"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <span className="text-creme/40" aria-hidden>
              ·
            </span>
            <a
              href={siteConfig.socials.instagram}
              className="text-creme/70 hover:text-white transition"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-white mb-4">Navigation</h4>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-creme/80 hover:text-white transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-sm text-creme/80 hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-white mb-4">Nous trouver</h4>
          <address className="not-italic text-sm text-creme/80 space-y-1">
            <p>{siteConfig.contact.address.street}</p>
            <p>
              {siteConfig.contact.address.postalCode}{' '}
              {siteConfig.contact.address.locality}
            </p>
            <p className="pt-2">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="hover:text-white transition"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white transition"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto py-6 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-creme/60">
          <p>
            © {year} Fort Apache — Club Équestre. Tous droits réservés.
          </p>
          <p>
            Site réalisé par{' '}
            <span className="font-medium">Mig&apos;s Communication</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
