import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContactForm } from '@/components/ui/ContactForm';
import { siteConfig } from '@/lib/site-config';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Contact.Metadata');
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${siteConfig.url}/en/contact`,
      languages: {
        fr: `${siteConfig.url}/contact`,
        en: `${siteConfig.url}/en/contact`,
        'x-default': `${siteConfig.url}/contact`,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${siteConfig.url}/en/contact`,
      siteName: siteConfig.fullName,
      title: t('title'),
      description: t('description'),
    },
  };
}

type SearchParams = {
  objet?: string;
};

export default async function ContactENPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const tHeader = await getTranslations('Contact.PageHeader');
  const tLeft = await getTranslations('Contact.LeftColumn');

  const rawObjet = searchParams.objet;
  const defaultObjet =
    typeof rawObjet === 'string' ? rawObjet.replace(/\+/g, ' ') : undefined;

  return (
    <>
      <PageHeader overline={tHeader('overline')} title={tHeader('title')}>
        {tHeader('subtitle')}
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto grid lg:grid-cols-3 gap-10 lg:gap-16">
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-foret-dark mb-4">
                {tLeft('heading')}
              </h2>
              <div className="space-y-4 text-charbon/85">
                <div>
                  <p className="text-xs uppercase tracking-wide text-bordeaux mb-1">
                    {tLeft('phoneLabel')}
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
                    {tLeft('emailLabel')}
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
                    {tLeft('addressLabel')}
                  </p>
                  <address className="not-italic text-sm leading-relaxed">
                    {tLeft('addressLine1')}
                    <br />
                    {tLeft('addressLine2')}
                  </address>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-foret-dark mb-3">
                {tLeft('hoursHeading')}
              </h3>
              <p className="text-sm text-charbon/85">{tLeft('hoursLine')}</p>
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
