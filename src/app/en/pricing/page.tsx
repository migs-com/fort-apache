import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Pricing.Metadata');
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${siteConfig.url}/en/pricing`,
      languages: {
        fr: `${siteConfig.url}/tarifs`,
        en: `${siteConfig.url}/en/pricing`,
        'x-default': `${siteConfig.url}/tarifs`,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${siteConfig.url}/en/pricing`,
      siteName: siteConfig.fullName,
      title: t('title'),
      description: t('description'),
    },
  };
}

type Row = {
  formule: string;
  detail?: string;
  prix: string;
};

function TarifsTable({
  rows,
  showDetail = false,
  headers,
}: {
  rows: Row[];
  showDetail?: boolean;
  headers: { programme: string; age: string; price: string };
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-sable/50 bg-white shadow-sm">
      <table className="w-full text-left">
        <thead className="bg-foret-dark text-white">
          <tr>
            <th scope="col" className="px-6 py-4 font-serif text-lg font-medium">
              {headers.programme}
            </th>
            {showDetail && (
              <th
                scope="col"
                className="px-6 py-4 font-serif text-lg font-medium"
              >
                {headers.age}
              </th>
            )}
            <th
              scope="col"
              className="px-6 py-4 font-serif text-lg font-medium text-right"
            >
              {headers.price}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.formule}
              className={
                i % 2 === 0
                  ? 'bg-white'
                  : 'bg-creme/60 border-t border-sable/30'
              }
            >
              <td className="px-6 py-4 font-medium text-foret-dark">
                {r.formule}
              </td>
              {showDetail && (
                <td className="px-6 py-4 text-charbon/80 text-sm">
                  {r.detail}
                </td>
              )}
              <td className="px-6 py-4 text-right font-medium whitespace-nowrap">
                {r.prix}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Block({
  overline,
  title,
  intro,
  children,
}: {
  overline: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12 md:mb-16">
      <div className="mb-6">
        <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-2">
          {overline}
        </p>
        <h2 className="text-foret-dark">{title}</h2>
        {intro && <p className="mt-3 text-charbon/80 max-w-2xl">{intro}</p>}
      </div>
      {children}
    </section>
  );
}

export default async function PricingENPage() {
  const tHeader = await getTranslations('Pricing.Header');
  const tTables = await getTranslations('Pricing.Tables');
  const tB1 = await getTranslations('Pricing.Block1');
  const tB2 = await getTranslations('Pricing.Block2');
  const tB3 = await getTranslations('Pricing.Block3');
  const tB4 = await getTranslations('Pricing.Block4');
  const tB5 = await getTranslations('Pricing.Block5');
  const tB6 = await getTranslations('Pricing.Block6');
  const tFinal = await getTranslations('Pricing');

  const tableHeaders = {
    programme: tTables('programme'),
    age: tTables('age'),
    price: tTables('price'),
  };

  const seances: Row[] = [
    { formule: tB1('row1Label'), detail: tB1('row1Age'), prix: tB1('row1Price') },
    { formule: tB1('row2Label'), detail: tB1('row2Age'), prix: tB1('row2Price') },
    { formule: tB1('row3Label'), detail: tB1('row3Age'), prix: tB1('row3Price') },
    { formule: tB1('row4Label'), detail: tB1('row4Age'), prix: tB1('row4Price') },
    { formule: tB1('row5Label'), detail: tB1('row5Age'), prix: tB1('row5Price') },
  ];

  const mensuels: Row[] = [
    { formule: tB2('row1Label'), prix: tB2('row1Price') },
    { formule: tB2('row2Label'), prix: tB2('row2Price') },
    { formule: tB2('row3Label'), prix: tB2('row3Price') },
  ];

  const trimestriels: Row[] = [
    { formule: tB3('row1Label'), prix: tB3('row1Price') },
    { formule: tB3('row2Label'), prix: tB3('row2Price') },
    { formule: tB3('row3Label'), prix: tB3('row3Price') },
  ];

  const annuels: Row[] = [
    { formule: tB4('row1Label'), prix: tB4('row1Price') },
    { formule: tB4('row2Label'), prix: tB4('row2Price') },
    { formule: tB4('row3Label'), prix: tB4('row3Price') },
  ];

  const priceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fort Apache riding lessons and camps',
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}#localbusiness`,
      name: siteConfig.fullName,
    },
    url: `${siteConfig.url}/en/pricing`,
    offers: [
      { '@type': 'Offer', name: 'Pony school per session', price: '20', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Child half-day per session', price: '25', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Child full day per session', price: '38', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Adult per session', price: '20', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Private lesson', price: '50', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Monthly child half-day', price: '92', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Monthly child full day', price: '140', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Monthly adult', price: '92', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Quarter child half-day', price: '230', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Quarter child full day', price: '350', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Quarter adult', price: '180', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Year child half-day', price: '600', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Year child full day', price: '900', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Year adult', price: '600', priceCurrency: 'EUR' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />
      <PageHeader overline={tHeader('overline')} title={tHeader('title')}>
        {tHeader('subtitle')}
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto max-w-5xl">
          <Block overline="Block 1" title={tB1('header')}>
            <TarifsTable rows={seances} showDetail headers={tableHeaders} />
          </Block>

          <Block overline="Block 2" title={tB2('header')} intro={tB2('intro')}>
            <TarifsTable rows={mensuels} headers={tableHeaders} />
          </Block>

          <Block overline="Block 3" title={tB3('header')} intro={tB3('intro')}>
            <TarifsTable rows={trimestriels} headers={tableHeaders} />
          </Block>

          <Block overline="Block 4" title={tB4('header')}>
            <TarifsTable rows={annuels} headers={tableHeaders} />
          </Block>

          <section className="mb-12 md:mb-16">
            <div className="rounded-lg border border-sable/50 bg-white p-6 md:p-8 shadow-sm">
              <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-2">
                Block 5
              </p>
              <h2 className="text-foret-dark mb-4">{tB5('header')}</h2>
              <div className="space-y-4 text-charbon/85">
                <p>
                  <strong>{tB5('strong1')}</strong>
                  <br />
                  {tB5('intro')}
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-foret font-bold" aria-hidden>
                      ✓
                    </span>
                    {tB5('childLabel')}: <strong>{tB5('childValue')}</strong>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foret font-bold" aria-hidden>
                      ✓
                    </span>
                    {tB5('adultLabel')}: <strong>{tB5('adultValue')}</strong>
                  </li>
                </ul>
                <p>
                  <strong>{tB5('noFee')}</strong> {tB5('noFeeDesc')}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <div className="rounded-lg border border-sable/50 bg-foret-dark text-creme p-6 md:p-8 shadow-sm">
              <p className="font-sans uppercase tracking-[0.25em] text-sable-light text-xs mb-2">
                Block 6
              </p>
              <h2 className="text-white mb-4">{tB6('header')}</h2>
              <p className="text-creme/90">
                <strong>{tB6('strong')}</strong>
                <br />
                {tB6('text')}
              </p>
              <p className="mt-4 text-creme/80 text-sm">
                {tB6('contact')}{' '}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-sable-light font-medium underline"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </section>

          <div className="mt-10 text-center">
            <LinkButton
              href="/en/contact?objet=Inscription+cours"
              variant="primary"
              size="lg"
            >
              {tFinal('FinalCta')}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
