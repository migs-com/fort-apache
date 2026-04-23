import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContactForm } from '@/components/ui/ContactForm';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact — Prendre rendez-vous',
  description:
    "Contactez Fort Apache pour une inscription, un stage, un cours particulier ou un simple renseignement. Notre équipe vous répond rapidement.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
    languages: {
      fr: `${siteConfig.url}/contact`,
      en: `${siteConfig.url}/en/contact`,
      'x-default': `${siteConfig.url}/contact`,
    },
  },
};

type SearchParams = {
  objet?: string;
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const rawObjet = searchParams.objet;
  const defaultObjet =
    typeof rawObjet === 'string' ? rawObjet.replace(/\+/g, ' ') : undefined;

  return (
    <>
      <PageHeader overline="Contact" title="Parlons de votre projet équestre">
        Une question, une envie d&apos;inscription, un stage à prévoir ? Nous
        vous répondrons dans les meilleurs délais.
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto grid lg:grid-cols-3 gap-10 lg:gap-16">
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-foret-dark mb-4">
                Nous joindre
              </h2>
              <div className="space-y-4 text-charbon/85">
                <div>
                  <p className="text-xs uppercase tracking-wide text-bordeaux mb-1">
                    Téléphone
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                    className="font-serif text-xl text-foret-dark hover:text-bordeaux"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-bordeaux mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-charbon hover:text-bordeaux"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-bordeaux mb-1">
                    Adresse
                  </p>
                  <address className="not-italic text-sm leading-relaxed">
                    {siteConfig.contact.address.street}
                    <br />
                    {siteConfig.contact.address.postalCode}{' '}
                    {siteConfig.contact.address.locality}
                  </address>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-foret-dark mb-3">
                Horaires
              </h3>
              <ul className="space-y-1 text-sm text-charbon/85">
                {siteConfig.openingHours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="font-medium">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-sable/30 p-6 md:p-10">
            <ContactForm defaultObjet={defaultObjet} />
          </div>
        </div>
      </section>
    </>
  );
}
