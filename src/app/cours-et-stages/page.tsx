import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { Card, CardBody, CardTitle } from '@/components/ui/Card';
import { ffeImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Cours & Stages — Tous niveaux, toutes saisons',
  description:
    "Cours d'équitation par niveau, école poney, stages pendant les vacances scolaires. Inscriptions ouvertes toute l'année à Fort Apache.",
};

const niveaux = [
  {
    titre: 'Débutant',
    public: 'À partir de 8 ans',
    objectifs: [
      'Découvrir le cheval et ses soins',
      'Acquérir les bases du pas et du trot',
      'Passer son Galop 1',
    ],
    frequence: '1h / semaine',
  },
  {
    titre: 'Intermédiaire',
    public: 'Galops 2 à 4',
    objectifs: [
      "Maîtriser les trois allures en équilibre",
      "Aborder le saut d'obstacles jusqu'à 60 cm",
      'Progresser en dressage sur figures simples',
    ],
    frequence: '1h à 1h30 / semaine',
  },
  {
    titre: 'Confirmé',
    public: 'Galops 5 à 7',
    objectifs: [
      'Travail technique en dressage et CSO',
      'Gestion de parcours',
      'Préparation à la compétition club',
    ],
    frequence: '1h30 / semaine',
  },
  {
    titre: 'Compétition',
    public: 'Cavaliers engagés',
    objectifs: [
      'Entraînement spécifique CSO / dressage',
      'Préparation physique du couple',
      'Accompagnement en concours',
    ],
    frequence: '2 séances / semaine',
  },
];

const stages = [
  {
    periode: 'Vacances d\'été',
    description:
      'Stages de 5 jours, du lundi au vendredi. Matinées en selle, après-midis jeux et soins.',
    prix: 'À partir de 240 €',
  },
  {
    periode: 'Toussaint',
    description:
      'Stages découverte et perfectionnement, 3 à 5 jours selon la formule.',
    prix: 'À partir de 150 €',
  },
  {
    periode: 'Noël & Nouvel An',
    description:
      "Stage d'hiver au chaud dans notre manège couvert, 3 jours.",
    prix: 'À partir de 150 €',
  },
  {
    periode: 'Pâques',
    description:
      'Stages de 5 jours avec sortie extérieure en randonnée le dernier jour.',
    prix: 'À partir de 240 €',
  },
];

export default function CoursEtStagesPage() {
  return (
    <>
      <PageHeader overline="Cours & Stages" title="Progressez à votre rythme">
        Des cours hebdomadaires par niveau, une école poney pour les plus
        jeunes et des stages pendant chaque période de vacances.
      </PageHeader>

      {/* Niveaux */}
      <section className="section bg-creme">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
              Cours hebdomadaires
            </p>
            <h2 className="text-foret-dark">Des cours par niveau</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {niveaux.map((n) => (
              <Card key={n.titre} variant="elevated">
                <CardBody>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle>{n.titre}</CardTitle>
                      <p className="text-xs uppercase tracking-wide text-charbon/60">
                        {n.public}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-bordeaux whitespace-nowrap">
                      {n.frequence}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {n.objectifs.map((obj) => (
                      <li
                        key={obj}
                        className="flex gap-2 text-sm text-charbon/80"
                      >
                        <span className="text-foret" aria-hidden>
                          ✓
                        </span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                  <LinkButton
                    href="/contact?objet=Inscription+cours"
                    variant="outline"
                    size="sm"
                  >
                    Je m&apos;inscris
                  </LinkButton>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* École poney */}
      <section className="section bg-foret text-creme">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-sans uppercase tracking-[0.25em] text-sable-light text-xs mb-3">
              Pour les plus jeunes
            </p>
            <h2 className="text-white mb-6">École poney (4 – 8 ans)</h2>
            <p className="text-creme/90 mb-4">
              Une découverte tout en douceur du poney et de l&apos;équitation.
              Les enfants apprennent à panser, seller, mener et monter leur
              poney dans un cadre ludique et sécurisé.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex gap-2">
                <span className="text-sable-light">✓</span> Séances d&apos;1h le
                mercredi et samedi
              </li>
              <li className="flex gap-2">
                <span className="text-sable-light">✓</span> Groupes de 4 à 6
                enfants maximum
              </li>
              <li className="flex gap-2">
                <span className="text-sable-light">✓</span> Encadrement par une
                monitrice spécialisée
              </li>
              <li className="flex gap-2">
                <span className="text-sable-light">✓</span> Préparation aux
                Galops Poussin &amp; Galops 1 – 3
              </li>
            </ul>
            <LinkButton
              href="/contact?objet=Inscription+cours"
              variant="primary"
              size="md"
            >
              Inscrire mon enfant
            </LinkButton>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ffeImages.album[10]}
              alt="École poney — enfants et poneys"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stages vacances */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
              Stages vacances
            </p>
            <h2 className="text-foret-dark">Tout au long de l&apos;année</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {stages.map((s) => (
              <Card key={s.periode} variant="bordered">
                <CardBody>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <CardTitle>{s.periode}</CardTitle>
                    <span className="font-serif text-xl text-bordeaux whitespace-nowrap">
                      {s.prix}
                    </span>
                  </div>
                  <p className="text-charbon/80 text-sm mb-5">{s.description}</p>
                  <LinkButton
                    href="/contact?objet=Stage+vacances"
                    variant="outline"
                    size="sm"
                  >
                    Réserver
                  </LinkButton>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
