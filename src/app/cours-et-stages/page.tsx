import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { Card, CardBody, CardTitle } from '@/components/ui/Card';
import { ffeImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Cours & Stages — De 2 ans aux adultes, tous niveaux',
  description:
    "À Fort Apache (Coursegoules 06140) : éveil poney dès 2 ans, demi-journées et journées complètes pour les enfants, cours adultes personnalisés et stages vacances avec hébergement.",
};

const formules = [
  {
    titre: 'Éveil poney',
    public: 'À partir de 2 ans',
    duree: '2h le mercredi matin',
    objectifs: [
      'Aller chercher son poney à son rythme',
      'Le panser et l\'équiper avec du matériel adapté',
      'Petit cours en carrière, jeux, et apprentissage de l\'autonomie',
      'Parents bienvenus pour assister à la séance',
    ],
  },
  {
    titre: 'Enfants — demi-journée',
    public: 'À partir de 6 ans',
    duree: '4h, mercredi & samedi',
    objectifs: [
      'Matin 9h-13h ou après-midi 13h30-18h',
      '1 cours par demi-journée',
      "Participation à la vie de l'écurie : soins, alimentation, nettoyage",
      'Préparation aux Galops fédéraux',
    ],
  },
  {
    titre: 'Enfants — journée complète',
    public: 'À partir de 6 ans',
    duree: '9h-18h, vacances scolaires',
    objectifs: [
      '2 cours dans la journée',
      'Pique-nique et goûter à apporter',
      "Participation à toute la vie de l'écurie",
      "Apprentissage technique et « école de la vie »",
    ],
  },
  {
    titre: 'Adultes',
    public: 'Tous niveaux',
    duree: 'À la séance, en semaine',
    objectifs: [
      'Programme personnalisé selon votre niveau',
      'Adapté à vos disponibilités',
      'Du retour en selle au perfectionnement',
      'Préparation à la compétition pour les ambitieux',
    ],
  },
];

const stages = [
  {
    periode: "Vacances d'été",
    description:
      'Vacances équestres avec hébergement, du dimanche soir au vendredi soir. Une immersion totale, places limitées.',
    prix: '400 € / semaine',
  },
  {
    periode: 'Toussaint',
    description:
      'Stages « à la carte » de 3 à 5 jours, quel que soit votre niveau ou votre âge. Sur réservation.',
    prix: 'Sur réservation',
  },
  {
    periode: 'Noël & Nouvel An',
    description:
      'Stages de fin d\'année, parfaits pour passer un Galop ou se perfectionner dans sa discipline préférée.',
    prix: 'Sur réservation',
  },
  {
    periode: 'Pâques',
    description:
      "Le grand stage du printemps, avec sortie en randonnée extérieure le dernier jour.",
    prix: 'Sur réservation',
  },
];

const faq = [
  {
    q: "À partir de quel âge mon enfant peut-il commencer ?",
    a: "Dès 2 ans pour l'éveil poney du mercredi matin. À partir de 6 ans pour les demi-journées et journées complètes le mercredi, samedi et pendant les vacances.",
  },
  {
    q: "Faut-il avoir déjà fait de l'équitation ?",
    a: "Non, aucune expérience n'est requise. Nous accueillons les vrais débutants, enfants comme adultes. Pour les balades à poney en famille, nous vous donnons les consignes de base à l'arrivée et vous partez accompagnés.",
  },
  {
    q: "Que faut-il apporter ?",
    a: "Une tenue souple, des chaussures fermées (idéalement à petit talon), et un pantalon long. Pour les stages à la journée : pique-nique et goûter. Le casque est fourni par le club, désinfecté et aux normes CE.",
  },
  {
    q: "Le casque est-il fourni ?",
    a: "Oui, le club fournit des casques pour toutes les activités. Ils sont régulièrement désinfectés et conformes aux normes CE. Nous avons également des étriers de sécurité.",
  },
  {
    q: "Peut-on faire une séance d'essai ?",
    a: "Bien sûr ! Contactez-nous au 04 93 58 91 43 pour convenir d'un créneau. Nous vous proposerons une formule adaptée à votre niveau et à vos envies.",
  },
  {
    q: "Le club est-il accessible toute l'année ?",
    a: "Oui, Fort Apache est ouvert 7 jours / 7, de 10h à 18h, toute l'année.",
  },
];

export default function CoursEtStagesPage() {
  return (
    <>
      <PageHeader overline="Cours & Stages" title="Progressez à votre rythme">
        De l&apos;éveil poney dès 2 ans aux cours adultes personnalisés, en
        passant par les vacances équestres avec hébergement, Fort Apache
        propose une formule pour chacun.
      </PageHeader>

      {/* Formules par âge */}
      <section className="section bg-creme">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
              Nos formules
            </p>
            <h2 className="text-foret-dark">Une formule par âge et par envie</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {formules.map((f) => (
              <Card key={f.titre} variant="elevated">
                <CardBody>
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div>
                      <CardTitle>{f.titre}</CardTitle>
                      <p className="text-xs uppercase tracking-wide text-charbon/60">
                        {f.public}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-bordeaux whitespace-nowrap">
                      {f.duree}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {f.objectifs.map((obj) => (
                      <li
                        key={obj}
                        className="flex gap-2 text-sm text-charbon/80"
                      >
                        <span className="text-foret font-bold" aria-hidden>
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
              À Fort Apache, on n&apos;apprend pas qu&apos;à monter à
              cheval. Les enfants participent à toute la vie de
              l&apos;écurie : nourrir les chevaux, les sortir, les
              préparer, les panser, vérifier leur état de santé.
            </p>
            <p className="text-creme/90 mb-4">
              C&apos;est une <strong>école de la vie</strong> : amour de
              l&apos;animal, respect des autres cavaliers, autonomie,
              sociabilisation. Nos programmes sont personnalisés et
              chaque cavalier progresse à son rythme.
            </p>
            <p className="font-serif italic text-sable-light pt-4 border-l-4 border-sable-light pl-4">
              « Le cheval c&apos;est pas juste l&apos;animal sur lequel on
              monte, c&apos;est plein d&apos;autres choses autour. »
              <br />— Pénélope
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={ffeImages.album[10]}
              alt="Vie d'écurie à Fort Apache"
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
            <h2 className="text-foret-dark">Vacances équestres « à la carte »</h2>
            <p className="mt-3 text-charbon/75 max-w-2xl mx-auto">
              Pour chaque vacance scolaire, des stages adaptés à tous les
              niveaux et tous les âges. L&apos;été, la formule complète avec
              hébergement immerge vos enfants pendant une semaine.
            </p>
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

          <p className="text-center mt-8 text-sm text-charbon/70">
            Places limitées — pensez à réserver tôt au{' '}
            <a
              href="tel:+33493589143"
              className="text-bordeaux font-medium hover:underline"
            >
              04 93 58 91 43
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-creme">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
              Vous vous posez des questions ?
            </p>
            <h2 className="text-foret-dark">Questions fréquentes</h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-lg border border-sable/40 overflow-hidden"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 hover:bg-creme/40">
                  <h3 className="font-serif text-lg text-foret-dark m-0">
                    {item.q}
                  </h3>
                  <span
                    className="text-bordeaux text-2xl transition-transform group-open:rotate-45 shrink-0"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-charbon/80 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <LinkButton href="/contact" variant="primary" size="md">
              Une autre question ? Contactez-nous
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
