import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { ffeImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Activités équestres — Balades à poney, cours et stages',
  description:
    "Toutes nos activités à Fort Apache (Coursegoules, 06140) : balades à poney en famille, cours collectifs et particuliers, école poney, randonnées, stages vacances et compétitions.",
};

type Activite = {
  slug: string;
  name: string;
  excerpt: string;
  image: string;
  featured?: boolean;
};

const activites: Activite[] = [
  {
    slug: 'balades-poney',
    name: 'Balades à poney',
    excerpt:
      "L'incontournable de Fort Apache : partez en balade accompagnée à dos de poney au cœur du Col de Vence. Idéal en famille, même sans aucune expérience.",
    image: ffeImages.top3,
    featured: true,
  },
  {
    slug: 'cours-collectifs',
    name: 'Cours collectifs',
    excerpt:
      "Apprenez et progressez en groupe, dans une ambiance conviviale. Séances d'une heure par niveau.",
    image: ffeImages.album[6],
  },
  {
    slug: 'cours-particuliers',
    name: 'Cours particuliers',
    excerpt:
      "Un moniteur rien que pour vous. Idéal pour un perfectionnement ciblé ou un retour en selle.",
    image: ffeImages.album[7],
  },
  {
    slug: 'ecole-poney',
    name: 'École poney',
    excerpt:
      "Pour les enfants de 4 à 8 ans : premier contact avec le poney, jeux, soins et petits parcours.",
    image: ffeImages.album[8],
  },
  {
    slug: 'randonnees',
    name: 'Randonnées équestres',
    excerpt:
      "Pour les cavaliers expérimentés : sorties de plusieurs heures à la demi-journée à travers les sentiers du Col de Vence.",
    image: ffeImages.album[9],
  },
  {
    slug: 'stages-vacances',
    name: 'Stages vacances',
    excerpt:
      "Toussaint, Noël, hiver, Pâques, été : des stages thématiques de 3 à 5 jours pour tous niveaux.",
    image: ffeImages.article1,
  },
  {
    slug: 'pension-chevaux',
    name: 'Pension de chevaux',
    excerpt:
      "Vous souhaitez avoir votre cheval ou votre poney ? Pénélope vous conseille sur le choix de la monture, son entretien, son travail et ses soins, et en assure un suivi personnalisé.",
    image: ffeImages.album[11],
  },
  {
    slug: 'competitions',
    name: 'Compétitions & disciplines variées',
    excerpt:
      "Obstacle, dressage, cross, équitation américaine, monte en amazone, attelage, voltige, skijoring, horse-ball : à Fort Apache, vous pratiquez la discipline qui vous plaît.",
    image: ffeImages.article2,
  },
];

export default function ActivitesPage() {
  const featured = activites.find((d) => d.featured)!;
  const others = activites.filter((d) => !d.featured);

  return (
    <>
      <PageHeader overline="Activités" title="Trouvez votre passion équestre">
        Sept activités, du baptême à poney en famille au perfectionnement en
        compétition.
      </PageHeader>

      {/* Featured : Balades à poney */}
      <section className="section bg-creme">
        <div className="container mx-auto">
          <article
            id={featured.slug}
            className="group grid md:grid-cols-2 bg-white rounded-lg overflow-hidden shadow-lg scroll-mt-24"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 inline-block bg-bordeaux text-white text-xs uppercase tracking-wide px-3 py-1.5 rounded-full">
                ★ Activité phare
              </span>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
                À ne pas manquer
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foret-dark mb-4">
                {featured.name}
              </h2>
              <p className="text-charbon/85 mb-6 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <LinkButton
                  href="/contact?objet=Renseignements"
                  variant="primary"
                  size="md"
                >
                  Réserver une balade
                </LinkButton>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Autres activités */}
      <section className="bg-creme pb-16 md:pb-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {others.map((d) => (
              <article
                key={d.slug}
                id={d.slug}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow scroll-mt-24"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-2xl text-foret-dark mb-2">
                    {d.name}
                  </h2>
                  <p className="text-charbon/80 text-sm leading-relaxed mb-4">
                    {d.excerpt}
                  </p>
                  <Link
                    href={`/contact?objet=${encodeURIComponent('Renseignements')}`}
                    className="inline-flex items-center gap-1 text-bordeaux text-sm font-medium hover:gap-2 transition-all"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charbon text-white">
        <div className="container mx-auto py-16 text-center">
          <h2 className="text-white mb-4">
            Une activité vous intéresse ?
          </h2>
          <p className="text-creme/80 mb-8 max-w-xl mx-auto">
            Contactez-nous pour en discuter et trouver la formule adaptée.
          </p>
          <LinkButton href="/contact" variant="primary" size="lg">
            Nous contacter
          </LinkButton>
        </div>
      </section>
    </>
  );
}
