import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { ffeImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Disciplines équestres — Cours, stages et randonnées',
  description:
    "Toutes nos disciplines à Fort Apache : cours collectifs et particuliers, école poney, randonnées, stages vacances et compétitions.",
};

type Discipline = {
  slug: string;
  name: string;
  excerpt: string;
  image: string;
};

const disciplines: Discipline[] = [
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
    name: 'Randonnées',
    excerpt:
      "Partez à la découverte de nos sentiers boisés lors de balades d'1 heure à la journée complète.",
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
    slug: 'competitions',
    name: 'Compétitions',
    excerpt:
      "Préparation et accompagnement sur les circuits FFE : CSO, dressage, TREC et concours club.",
    image: ffeImages.article2,
  },
];

export default function DisciplinesPage() {
  return (
    <>
      <PageHeader overline="Disciplines" title="Trouvez votre passion équestre">
        Six disciplines principales, toutes accessibles du débutant au
        cavalier confirmé.
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {disciplines.map((d) => (
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
            Une discipline vous intéresse ?
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
