import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Tarifs — Cours, stages et forfaits annuels',
  description:
    "Découvrez les tarifs de Fort Apache : cours hebdomadaires, forfaits annuels, stages et cours particuliers. Transparence totale.",
};

type Tarif = {
  formule: string;
  frequence: string;
  mensuel: string;
  annuel: string;
};

const tarifs: Tarif[] = [
  {
    formule: 'École poney (4-8 ans)',
    frequence: '1 séance / semaine',
    mensuel: '80 €',
    annuel: '720 €',
  },
  {
    formule: 'Cours enfant / ado',
    frequence: '1 séance / semaine',
    mensuel: '95 €',
    annuel: '855 €',
  },
  {
    formule: 'Cours adulte',
    frequence: '1 séance / semaine',
    mensuel: '110 €',
    annuel: '990 €',
  },
  {
    formule: 'Forfait compétition',
    frequence: '2 séances / semaine',
    mensuel: '180 €',
    annuel: '1 620 €',
  },
  {
    formule: 'Cours particulier',
    frequence: '1 séance de 45 min',
    mensuel: '55 € / séance',
    annuel: '—',
  },
  {
    formule: 'Carte 10 séances',
    frequence: '10 cours collectifs',
    mensuel: '—',
    annuel: '280 €',
  },
];

export default function TarifsPage() {
  return (
    <>
      <PageHeader overline="Tarifs" title="Des formules claires et transparentes">
        Retrouvez ici l&apos;ensemble de nos tarifs. Nos équipes restent à
        votre disposition pour tout renseignement complémentaire.
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto max-w-5xl">
          <div className="overflow-x-auto rounded-lg border border-sable/50 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">Tarifs Fort Apache</caption>
              <thead className="bg-foret-dark text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-serif text-lg font-medium"
                  >
                    Formule
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-serif text-lg font-medium"
                  >
                    Fréquence
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-serif text-lg font-medium text-right"
                  >
                    Tarif mensuel
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-serif text-lg font-medium text-right"
                  >
                    Tarif annuel
                  </th>
                </tr>
              </thead>
              <tbody>
                {tarifs.map((t, i) => (
                  <tr
                    key={t.formule}
                    className={
                      i % 2 === 0
                        ? 'bg-white'
                        : 'bg-creme/60 border-t border-sable/30'
                    }
                  >
                    <td className="px-6 py-4 font-medium text-foret-dark">
                      {t.formule}
                    </td>
                    <td className="px-6 py-4 text-charbon/80 text-sm">
                      {t.frequence}
                    </td>
                    <td className="px-6 py-4 text-right font-medium">
                      {t.mensuel}
                    </td>
                    <td className="px-6 py-4 text-right font-medium">
                      {t.annuel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-md bg-sable/20 border border-sable/40 p-5 text-sm text-charbon/85">
            <p className="font-medium text-foret-dark mb-1">À noter</p>
            <p>
              Les tarifs indiqués incluent l&apos;adhésion au club. La licence
              FFE (25 € / 36 €) est à régler en supplément lors de
              l&apos;inscription. Facilités de paiement possibles en 3 ou 10
              fois sans frais. Renseignements au{' '}
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="text-bordeaux font-medium underline"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
              .
            </p>
          </div>

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
