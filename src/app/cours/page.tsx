import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { Card, CardBody, CardTitle } from '@/components/ui/Card';
import { ffeImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Cours d\'équitation — De l\'éveil poney aux adultes',
  description:
    "À Fort Apache (Vence 06140) : éveil poney dès 4 ans, demi-journées et journées complètes pour les enfants, cours adultes à la séance. Cours collectifs ou particuliers, tous niveaux.",
};

const formules = [
  {
    titre: 'Éveil à poney',
    public: 'À partir de 4 ans',
    duree: '2h, le mercredi ou le samedi',
    objectifs: [
      'Aller chercher son poney à son rythme',
      'Le panser et l\'équiper avec du matériel adapté',
      'Petit cours en carrière, jeux, et apprentissage de l\'autonomie',
      'Parents bienvenus pour assister à la séance',
    ],
  },
  {
    titre: 'Enfant — demi-journée',
    public: 'À partir de 6 ans',
    duree: 'Mercredi et samedi',
    objectifs: [
      '1 cours par demi-journée',
      "Participation à la vie de l'écurie : soins, alimentation, nettoyage",
      'Préparation aux Galops fédéraux',
      'Progression à son rythme',
    ],
  },
  {
    titre: 'Enfant — journée complète',
    public: 'À partir de 6 ans',
    duree: '10h à 17h, mercredi et samedi',
    objectifs: [
      '2 cours dans la journée',
      'Pique-nique et goûter à apporter',
      "Participation à toute la vie de l'écurie",
      "Apprentissage technique et « école de la vie »",
    ],
  },
  {
    titre: 'Adulte à la séance',
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

const faq: { q: string; a: string }[] = [
  {
    q: "À partir de quel âge mon enfant peut-il commencer ?",
    a: "Dès 4 ans pour l'éveil à poney du mercredi ou samedi. À partir de 6 ans pour les demi-journées et journées complètes le mercredi et samedi.",
  },
  {
    q: "Faut-il avoir déjà fait de l'équitation ?",
    a: "Non, aucune expérience n'est requise. Nous accueillons les vrais débutants, enfants comme adultes. Pour les balades à poney en famille, nous vous donnons les consignes de base à l'arrivée et vous partez accompagnés.",
  },
  {
    q: "Que faut-il apporter ?",
    a: "Une tenue souple, des chaussures fermées (idéalement à petit talon), et un pantalon long et souple. Pour les stages à la journée : pique-nique et goûter. Le casque est fourni par le club, désinfecté et aux normes CE.",
  },
  {
    q: "Le casque est-il fourni ?",
    a: "Oui, le club fournit des casques (avec charlottes à usage unique pour l'hygiène de chaque cavalier) pour toutes les activités. Ils sont conformes aux normes CE. Nous avons également des étriers de sécurité.",
  },
  {
    q: "Peut-on faire une ou plusieurs séances d'essai ?",
    a: "Oui, bien sûr. Pénélope conseille même deux à trois séances d'essai avant de prendre une licence, pour que le cavalier trouve le bon rythme et le bon groupe. Contactez-nous au 04 93 58 91 43 pour convenir d'un premier créneau.",
  },
  {
    q: "Le club est-il accessible toute l'année ?",
    a: "Oui, Fort Apache est ouvert tous les jours, de 10h à 17h, toute l'année.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function CoursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader overline="Cours" title="Cours">
        De l&apos;éveil à poney dès 4 ans aux cours adultes à la séance, en
        passant par les demi-journées et les journées complètes du mercredi et
        du samedi, Fort Apache propose une formule pour chacun.
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

          <p className="text-center mt-10 text-charbon/75">
            Vous cherchez plutôt un stage de vacances ?{' '}
            <Link
              href="/stages"
              className="text-bordeaux font-medium hover:underline"
            >
              Découvrir nos stages vacances →
            </Link>
          </p>
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
