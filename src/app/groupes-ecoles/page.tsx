import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Écoles et centres de loisirs au poney club',
  description:
    "Sortie scolaire ou centre de loisirs au poney club, au Col de Vence près de Nice : à partir de 7 € par enfant, demi-journée ou journée. Appelez Pénélope.",
  alternates: {
    canonical: `${siteConfig.url}/groupes-ecoles`,
  },
};

const faq: { q: string; a: string }[] = [
  {
    q: 'Le club accueille-t-il les écoles et les centres de loisirs ?',
    a: "Oui. Fort Apache accueille les classes, les centres de loisirs et les collectivités, à la demi-journée ou à la journée, à partir de 7 € par enfant. Le programme se cale avec Pénélope au 04 93 58 91 43.",
  },
  {
    q: 'Les enfants doivent-ils déjà savoir monter ?',
    a: "Non. Les balades à poney se font sans aucune expérience, et le club accueille les enfants dès 2 ans. Le casque aux normes CE est fourni.",
  },
  {
    q: 'Quel est le tarif pour un groupe ?',
    a: "À partir de 7 € par enfant. Le prix dépend du nombre d'enfants, de la durée, du programme et de la régularité des venues ; Pénélope l'établit pour chaque groupe.",
  },
  {
    q: 'Quand peut-on venir avec un groupe ?',
    a: "Le club est ouvert tous les jours de l'année, de 10h à 17h ; il ne ferme que le 25 décembre. Les dates se fixent avec Pénélope.",
  },
  {
    q: 'Comment préparer les enfants à la sortie ?',
    a: "Un pantalon long et souple, des chaussures fermées, et des vêtements chauds en hiver. Le casque est fourni. Le détail est plus haut sur cette page.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteConfig.url },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Écoles et centres de loisirs',
      item: `${siteConfig.url}/groupes-ecoles`,
    },
  ],
};

const h2 = 'text-foret-dark mt-12 mb-4';
const p = 'mb-4';
const lien = 'text-bordeaux underline';

export default function GroupesEcolesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader overline="Groupes" title="Écoles et centres de loisirs au poney club, au Col de Vence">
        Une sortie scolaire ou une journée de centre de loisirs au milieu des
        poneys, en pleine nature, à une quarantaine de minutes de la mer.
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto max-w-3xl text-charbon/85 text-lg leading-relaxed">
          <p className={p}>
            Vous préparez une sortie scolaire ou une journée de centre de
            loisirs avec des poneys dans les Alpes-Maritimes ? Fort Apache, le
            poney club du Col de Vence, accueille les classes et les groupes
            de centres de loisirs. Pour les enseignants et les animateurs de
            Nice, de Vence, de Grasse ou du littoral, c&apos;est une sortie
            nature complète : des poneys à approcher et à soigner, des chemins
            à parcourir, et un club qui accueille des cavaliers depuis 1975.
            Les sorties de groupe sont proposées à partir de 7 € par enfant.
          </p>

          <div className="relative aspect-[3/2] rounded-lg overflow-hidden my-8">
            <Image
              src="/photos/blog/fort-apache-20-balade-groupe-chevre.jpg"
              alt="Groupe en balade à poney au Col de Vence, une chèvre suit les cavaliers"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <h2 className={h2}>Pourquoi une sortie au poney club avec une classe ?</h2>
          <p className={p}>
            Parce que le poney apprend beaucoup de choses qui ne sont pas dans
            les manuels. Approcher un animal plus grand que soi, comprendre ce
            dont il a besoin, attendre son tour, faire attention aux autres :
            pour un groupe d&apos;enfants, c&apos;est une leçon de vie en
            collectif autant qu&apos;une découverte de l&apos;équitation.
          </p>
          <p className={p}>
            C&apos;est aussi la philosophie du club. Pour Pénélope, qui dirige
            Fort Apache, le cheval est une école de la vie : amour de
            l&apos;animal, respect des autres, autonomie, sociabilisation.
            Une sortie au poney club donne aux enfants un premier aperçu de
            tout cela, en une journée.
          </p>

          <h2 className={h2}>Qu&apos;est-ce que les enfants découvrent au club ?</h2>
          <p className={p}>
            La vie d&apos;un club équestre se voit de près : les poneys qu&apos;on
            nourrit, qu&apos;on brosse et qu&apos;on selle, les chevaux qui
            mangent leur foin sous l&apos;abri, le paddock, ce petit enclos où
            ils se détendent. La cavalerie va du shetland, le petit poney à la
            taille des plus jeunes, au double poney, un grand poney adapté aux
            plus grands.
          </p>
          <p className={p}>
            Autour du club, la nature fait partie de la sortie. Fort Apache se
            trouve au cœur du Parc naturel régional des Préalpes d&apos;Azur,
            avec des vues sur la mer et sur les montagnes, et il n&apos;est pas
            rare de croiser des biches ou des chevreuils. Une chèvre suit
            parfois les balades, des oies et un coq animent la cour. Le
            contenu exact de la sortie, temps à poney, soins, balade, se
            construit avec Pénélope selon l&apos;âge et la taille du groupe.
          </p>

          <h2 className={h2}>Quels formats pour un groupe ?</h2>
          <p className={p}>
            Il n&apos;y a pas de formule unique : le programme se construit
            selon le nombre d&apos;enfants, leur âge et le temps dont vous
            disposez, à la demi-journée ou à la journée. Quelques formats
            déjà pratiqués au club :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              des tours à poney en rotation sur toute la journée, pour un
              grand groupe qui arrive en plusieurs fois avec un seul minibus ;
            </li>
            <li>
              une animation d&apos;une demi-heure en carrière, l&apos;espace
              clos où l&apos;on travaille à poney ;
            </li>
            <li>
              une journée complète, avec pour chaque groupe d&apos;enfants un
              cours en carrière et une balade ;
            </li>
            <li>
              un projet pédagogique suivi avec une école maternelle, qui
              s&apos;est conclu par la venue des poneys à la fête de
              l&apos;école.
            </li>
          </ul>
          <p className={p}>
            Le tarif suit le même principe, à partir de 7 € par enfant : il
            dépend de l&apos;effectif, de la durée et de la régularité des
            venues. Une classe qui revient plusieurs fois ou un grand groupe
            n&apos;ont pas le même prix qu&apos;une sortie unique de quelques
            enfants.
          </p>

          <h2 className={h2}>Pour quel âge ?</h2>
          <p className={p}>
            Le club accueille les enfants dès 2 ans pour la balade, le poney
            tenu en main par un adulte, sans aucune expérience. Il propose
            aussi des{' '}
            <Link href="/cours" className={lien}>
              cours d&apos;éveil poney dès 4 ans
            </Link>{' '}
            et des{' '}
            <Link href="/stages" className={lien}>
              stages dès 6 ans
            </Link>
            . Quel que soit le groupe, l&apos;âge des enfants est la première
            chose à donner à Pénélope : c&apos;est ce qui décide du choix des poneys
            et du déroulé.
          </p>

          <div className="relative aspect-[3/2] rounded-lg overflow-hidden my-8">
            <Image
              src="/photos/blog/fort-apache-03-poneys-clairs-foin.jpg"
              alt="Deux poneys clairs près du râtelier à foin, à Fort Apache"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <h2 className={h2}>Quelle sécurité pour les enfants ?</h2>
          <p className={p}>
            Chaque enfant porte un casque aux normes CE, fourni par le club,
            avec une charlotte à usage unique pour l&apos;hygiène. Le club
            dispose d&apos;étriers de sécurité, conçus pour que le pied se
            dégage facilement. Les poneys sont choisis pour leur douceur, ce
            qui compte quand tout un groupe veut les approcher en même temps.
          </p>

          <h2 className={h2}>Comment préparer les enfants ?</h2>
          <p className={p}>
            Le mot aux familles peut tenir en deux lignes : un pantalon long et
            souple, qui protège les jambes du frottement de la selle, et des
            chaussures fermées, idéalement à petit talon pour que le pied ne
            glisse pas dans l&apos;étrier. Pas de sandales. En hiver, une
            veste chaude, une écharpe et des gants, en gardant des vêtements
            qui laissent les jambes libres. Le casque est fourni.
          </p>

          <h2 className={h2}>Que préparer avant d&apos;appeler le club ?</h2>
          <p className={p}>
            Pour qu&apos;une sortie de groupe se cale du premier coup, ayez ces
            éléments sous la main en appelant Pénélope :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>la ou les dates possibles, avec une date de repli ;</li>
            <li>le nombre d&apos;enfants, leur âge et leur classe ;</li>
            <li>le nombre d&apos;adultes accompagnateurs ;</li>
            <li>la durée souhaitée, demi-journée ou journée ;</li>
            <li>le repas : pique-nique sur place ou non ;</li>
            <li>l&apos;arrivée du groupe et le stationnement du car ;</li>
            <li>une sortie unique ou des venues régulières.</li>
          </ul>
          <p className={p}>
            Pénélope vous propose un programme adapté à l&apos;âge des
            enfants et à la taille du groupe, et vous donne le prix
            correspondant.
          </p>

          <h2 className={h2}>Quand venir ?</h2>
          <p className={p}>
            Le club est ouvert tous les jours, de 10h à 17h, toute
            l&apos;année. Il ne ferme qu&apos;un jour, le 25 décembre. Une
            sortie peut donc se caler pendant le temps scolaire comme pendant
            les vacances, pour un centre de loisirs. Les dates se fixent avec
            Pénélope ; plus vous appelez tôt, plus le choix est large.
          </p>
          <p className={p}>
            Pour les familles qui voudraient revenir après la sortie, le club
            propose la{' '}
            <Link href="/balade-poney" className={lien}>
              balade à poney dès 2 ans
            </Link>{' '}
            et accueille aussi les{' '}
            <Link href="/anniversaire-poney" className={lien}>
              anniversaires au poney club
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section bg-white">
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
                  <h3 className="font-serif text-lg text-foret-dark m-0">{item.q}</h3>
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
        </div>
      </section>

      <section className="section bg-creme">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-lg border border-sable/40 p-8">
            <h2 className="text-foret-dark mb-4">En pratique</h2>
            <ul className="space-y-2 text-charbon/85 leading-relaxed">
              <li>
                <strong>Pour qui :</strong> classes, centres de loisirs et
                groupes d&apos;enfants, sans expérience du poney.
              </li>
              <li>
                <strong>Programme :</strong> à la demi-journée ou à la
                journée ; tours à poney, animation en carrière, cours et
                balade, selon le groupe.
              </li>
              <li>
                <strong>Lieu :</strong> Fort Apache, quartier Col de Vence,
                75 route de Saint-Barnabé.
              </li>
              <li>
                <strong>Horaires :</strong> tous les jours, de 10h à 17h, sauf le 25 décembre.
              </li>
              <li>
                <strong>Équipement :</strong> casque aux normes CE et étriers de
                sécurité fournis.
              </li>
              <li>
                <strong>Tarif :</strong> à partir de 7 € par enfant, selon
                l&apos;effectif, la durée et la régularité des venues.
              </li>
            </ul>
            <p className="mt-6 text-charbon/85">
              Une sortie scolaire ou de centre de loisirs à préparer ? Appelez
              Pénélope au{' '}
              <a href={`tel:${siteConfig.contact.phone}`} className={lien}>
                {siteConfig.contact.phoneDisplay}
              </a>
              , ou écrivez au club.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <LinkButton href="/contact?objet=Renseignements" variant="primary" size="md">
                Préparer une sortie de groupe
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
