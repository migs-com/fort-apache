import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { Card, CardBody, CardTitle } from '@/components/ui/Card';
import { ffeImages } from '@/lib/images';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Stages équestres enfants et ados | Fort Apache — Vence',
  description:
    "Stages de vacances au club équestre Fort Apache à Vence. À partir de 6 ans, à la journée ou à la demi-journée. Préparation au galop, immersion totale, perfectionnement.",
  alternates: {
    canonical: `${siteConfig.url}/stages`,
  },
};

const programme = [
  'Préparation au galop (passages Galop 1, 2, 3, 4…)',
  "Immersion totale dans la vie de l'écurie (soins, nourrissage, pansage, sellage)",
  'Perfectionnement technique (assiette, position, contrôle du cheval)',
  'Balades en extérieur selon niveau',
  'Travail à pied et relation au cheval',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stages équestres Fort Apache',
  serviceType: 'Stage équestre',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}#localbusiness`,
    name: siteConfig.fullName,
  },
  areaServed: {
    '@type': 'City',
    name: 'Vence',
  },
  audience: {
    '@type': 'PeopleAudience',
    suggestedMinAge: 6,
  },
  description:
    "Stages équestres toute l'année pendant les vacances scolaires, à la journée entière ou à la demi-journée. Préparation au galop, immersion à l'écurie, perfectionnement technique.",
  url: `${siteConfig.url}/stages`,
};

export default function StagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHeader overline="Stages" title="Stages équestres à Fort Apache">
        À Fort Apache, les stages sont proposés toute l&apos;année pendant les
        vacances scolaires, à la journée entière ou à la demi-journée. Chaque
        stagiaire progresse à son rythme, entre apprentissage technique,
        préparation au galop et immersion totale dans la vie de l&apos;écurie.
      </PageHeader>

      {/* Stages à la carte */}
      <section className="section bg-creme">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src={ffeImages.article1}
              alt="Stage équestre à Fort Apache"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
              À la carte
            </p>
            <h2 className="text-foret-dark mb-6">Stages à la carte</h2>
            <ul className="space-y-3 text-charbon/85">
              <li className="flex gap-3">
                <span className="text-foret font-bold" aria-hidden>
                  ✓
                </span>
                <span>
                  <strong>À partir de 6 ans</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-foret font-bold" aria-hidden>
                  ✓
                </span>
                <span>
                  Format <strong>journée entière ou demi-journée</strong>, au
                  choix
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-foret font-bold" aria-hidden>
                  ✓
                </span>
                <span>
                  Pendant les <strong>vacances scolaires</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-foret font-bold" aria-hidden>
                  ✓
                </span>
                <span>
                  <strong>Fréquence conseillée</strong> : Pénélope recommande
                  deux jours consécutifs, un jour de pause, puis deux nouveaux
                  jours (ex. lundi-mardi, jeudi-vendredi) pour les plus jeunes,
                  afin de préserver leur fatigue
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <LinkButton
                href="/contact?objet=Stage+vacances"
                variant="primary"
                size="md"
              >
                Inscrire mon enfant à un stage
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
              Au programme
            </p>
            <h2 className="text-foret-dark">Ce que les stagiaires y font</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {programme.map((p) => (
              <Card key={p} variant="bordered">
                <CardBody>
                  <div className="flex gap-3">
                    <span
                      className="text-foret font-bold text-xl shrink-0"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <p className="text-charbon/85">{p}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="section bg-foret text-creme">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-sans uppercase tracking-[0.25em] text-sable-light text-xs mb-3">
              Notre approche
            </p>
            <h2 className="text-white mb-6">
              Bien plus qu&apos;apprendre à monter
            </h2>
            <p className="text-creme/90 mb-4">
              Un stage à Fort Apache, ce n&apos;est pas seulement des heures en
              carrière. Les stagiaires partagent toute la vie du club :
              nourrir, panser, seller, sortir les chevaux au paddock, vérifier
              leur état de santé.
            </p>
            <p className="text-creme/90 mb-4">
              C&apos;est une <strong>école de la vie</strong> : amour de
              l&apos;animal, respect des autres cavaliers, autonomie,
              sociabilisation. Chaque stagiaire repart avec une progression
              technique visible et une relation plus juste au cheval.
            </p>
            <p className="font-serif italic text-sable-light pt-4 border-l-4 border-sable-light pl-4">
              « Le cheval c&apos;est pas juste l&apos;animal sur lequel on
              monte, c&apos;est plein d&apos;autres choses autour. »
              <br />— Pénélope
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={ffeImages.article2}
              alt="Vie d'écurie pendant un stage à Fort Apache"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA + maillage */}
      <section className="bg-charbon text-white">
        <div className="container mx-auto py-16 md:py-20 text-center">
          <h2 className="text-white mb-6">
            Prêt à réserver un stage ?
          </h2>
          <p className="text-creme/80 max-w-xl mx-auto mb-8">
            Places limitées, pensez à réserver tôt. Notre équipe vous aide à
            trouver la formule adaptée à l&apos;âge et au niveau de votre
            enfant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton
              href="/contact?objet=Stage+vacances"
              variant="primary"
              size="lg"
            >
              Inscrire mon enfant à un stage
            </LinkButton>
            <a
              href="tel:+33493589143"
              className="inline-flex items-center justify-center px-8 py-4 text-lg text-white border-2 border-white/40 hover:bg-white/10 rounded-md transition"
            >
              04 93 58 91 43
            </a>
          </div>
          <p className="mt-10 text-creme/80">
            <Link
              href="/cours"
              className="text-sable-light font-medium hover:text-white border-b border-sable-light/40 pb-1"
            >
              Découvrir les cours réguliers →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
