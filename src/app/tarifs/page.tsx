import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Tarifs équitation, stages et pensions | Fort Apache — Vence',
  description:
    "Tarifs complets du club Fort Apache à Vence : séances, forfaits mensuels, trimestriels et annuels. Baby poney, cours enfants, adultes, cours particuliers. Licence FFE incluse.",
  alternates: {
    canonical: `${siteConfig.url}/tarifs`,
  },
};

type Row = {
  formule: string;
  detail?: string;
  prix: string;
};

const seances: Row[] = [
  { formule: 'Éveil poney (baby poney)', detail: '4 à 6 ans', prix: '20 € la séance' },
  { formule: 'Enfant demi-journée', detail: 'À partir de 6 ans', prix: '25 €' },
  { formule: 'Enfant journée entière', detail: 'À partir de 6 ans', prix: '38 €' },
  { formule: 'Adulte à la séance', detail: '—', prix: '20 €' },
  { formule: 'Cours particulier', detail: 'Tous âges', prix: '50 € la séance' },
];

const mensuels: Row[] = [
  { formule: 'Demi-journée enfant', prix: '92 €' },
  { formule: 'Journée enfant', prix: '140 €' },
  { formule: 'Adulte', prix: '92 €' },
];

const trimestriels: Row[] = [
  { formule: 'Trimestre demi-journée enfant', prix: '230 €' },
  { formule: 'Trimestre journée enfant', prix: '350 €' },
  { formule: 'Trimestre adulte', prix: '180 €' },
];

const annuels: Row[] = [
  { formule: 'Année demi-journée enfant', prix: '600 €' },
  { formule: 'Année journée enfant', prix: '900 €' },
  { formule: 'Année adulte', prix: '600 €' },
];

const priceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Cours d'équitation et stages Fort Apache",
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}#localbusiness`,
    name: siteConfig.fullName,
  },
  url: `${siteConfig.url}/tarifs`,
  offers: [
    { '@type': 'Offer', name: 'Éveil poney à la séance', price: '20', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Enfant demi-journée à la séance', price: '25', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Enfant journée entière à la séance', price: '38', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Adulte à la séance', price: '20', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Cours particulier', price: '50', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Carte mensuelle demi-journée enfant', price: '92', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Carte mensuelle journée enfant', price: '140', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Carte mensuelle adulte', price: '92', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Trimestre demi-journée enfant', price: '230', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Trimestre journée enfant', price: '350', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Trimestre adulte', price: '180', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Année demi-journée enfant', price: '600', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Année journée enfant', price: '900', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Année adulte', price: '600', priceCurrency: 'EUR' },
  ],
};

function TarifsTable({
  rows,
  showDetail = false,
}: {
  rows: Row[];
  showDetail?: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-sable/50 bg-white shadow-sm">
      <table className="w-full text-left">
        <thead className="bg-foret-dark text-white">
          <tr>
            <th scope="col" className="px-6 py-4 font-serif text-lg font-medium">
              Formule
            </th>
            {showDetail && (
              <th
                scope="col"
                className="px-6 py-4 font-serif text-lg font-medium"
              >
                Public
              </th>
            )}
            <th
              scope="col"
              className="px-6 py-4 font-serif text-lg font-medium text-right"
            >
              Tarif
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
        {intro && (
          <p className="mt-3 text-charbon/80 max-w-2xl">{intro}</p>
        )}
      </div>
      {children}
    </section>
  );
}

export default function TarifsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />
      <PageHeader overline="Tarifs" title="Nos tarifs">
        Des formules adaptées à tous les âges, tous les niveaux, toutes les
        fréquences.
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto max-w-5xl">
          <Block overline="Bloc 1" title="Tarifs à la séance">
            <TarifsTable rows={seances} showDetail />
          </Block>

          <Block
            overline="Bloc 2"
            title="Carte mensuelle"
            intro="4 séances à consommer dans le mois."
          >
            <TarifsTable rows={mensuels} />
          </Block>

          <Block
            overline="Bloc 3"
            title="Forfait trimestriel"
            intro="10 séances + 1 séance offerte, à consommer sur le trimestre."
          >
            <TarifsTable rows={trimestriels} />
          </Block>

          <Block overline="Bloc 4" title="Forfait annuel">
            <TarifsTable rows={annuels} />
          </Block>

          <section className="mb-12 md:mb-16">
            <div className="rounded-lg border border-sable/50 bg-white p-6 md:p-8 shadow-sm">
              <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-2">
                Bloc 5
              </p>
              <h2 className="text-foret-dark mb-4">Licence FFE obligatoire</h2>
              <div className="space-y-4 text-charbon/85">
                <p>
                  La licence est obligatoire pour pratiquer l&apos;équitation
                  en club. Elle est reversée directement à la Fédération
                  Française d&apos;Équitation (elle n&apos;est pas encaissée
                  par Fort Apache).
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-foret font-bold" aria-hidden>
                      ✓
                    </span>
                    Licence enfant : <strong>29 €</strong>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foret font-bold" aria-hidden>
                      ✓
                    </span>
                    Licence adulte : <strong>40 €</strong>
                  </li>
                </ul>
                <p>
                  <strong>Aucune adhésion au club.</strong> Fort Apache ne
                  facture pas de frais d&apos;adhésion annuels.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <div className="rounded-lg border border-sable/50 bg-foret-dark text-creme p-6 md:p-8 shadow-sm">
              <p className="font-sans uppercase tracking-[0.25em] text-sable-light text-xs mb-2">
                Bloc 6
              </p>
              <h2 className="text-white mb-4">Facilités de paiement</h2>
              <p className="text-creme/90">
                Paiement possible <strong>jusqu&apos;à 6 fois sans frais</strong>.
                Chèques acceptés, encaissements mensuels.
              </p>
              <p className="mt-4 text-creme/80 text-sm">
                Pour toute question, contactez-nous au{' '}
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
              href="/contact?objet=Inscription+cours"
              variant="primary"
              size="lg"
            >
              Je m&apos;inscris
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
