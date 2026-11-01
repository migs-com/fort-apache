import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Anniversaire au poney club au Col de Vence',
  description:
    "Fêtez l'anniversaire de votre enfant au poney club, au Col de Vence près de Nice : poneys doux, pleine nature, ouvert tous les jours. Appelez Pénélope.",
  alternates: {
    canonical: `${siteConfig.url}/anniversaire-poney`,
  },
};

const faq: { q: string; a: string }[] = [
  {
    q: 'Comment réserver un anniversaire au poney club ?',
    a: "Appelez Pénélope au 04 93 58 91 43, ou laissez un message depuis la page contact en précisant la date souhaitée, le nombre d'enfants et leur âge.",
  },
  {
    q: "Quel est le tarif d'un anniversaire au poney club ?",
    a: "Le tarif dépend de la formule retenue avec le club. Pénélope vous le donne au moment de réserver ; les tarifs des autres activités sont sur la page des tarifs.",
  },
  {
    q: 'Les invités doivent-ils savoir monter à poney ?',
    a: "Non. Les balades à poney se font sans aucune expérience, et le club accueille les enfants dès 2 ans. Le casque est fourni.",
  },
  {
    q: 'Peut-on fêter un anniversaire au poney club en hiver ?',
    a: "Oui. Le club est ouvert tous les jours de l'année, de 10h à 17h ; il ne ferme que le 25 décembre. Pensez simplement à bien couvrir les enfants.",
  },
  {
    q: "Peut-on offrir une balade à poney à l'enfant qui fête son anniversaire ?",
    a: "Oui, le club propose des bons cadeaux. Pour la formule et ses conditions, renseignez-vous auprès de Pénélope au 04 93 58 91 43.",
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
      name: 'Anniversaire au poney club',
      item: `${siteConfig.url}/anniversaire-poney`,
    },
  ],
};

const h2 = 'text-foret-dark mt-12 mb-4';
const p = 'mb-4';
const lien = 'text-bordeaux underline';

export default function AnniversairePoneyPage() {
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

      <PageHeader overline="Fêtes d'enfants" title="Anniversaire au poney club au Col de Vence">
        Des poneys, des copains et un grand bol d&apos;air : un anniversaire
        dont votre enfant parlera longtemps.
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto max-w-3xl text-charbon/85 text-lg leading-relaxed">
          <p className={p}>
            Fêter un anniversaire au poney club, c&apos;est possible au Col de
            Vence, à une quarantaine de minutes de la mer : Fort Apache accueille
            les anniversaires d&apos;enfants au club, au milieu des poneys et
            des chemins de nature. Pour les parents qui cherchent une idée
            d&apos;anniversaire près de Nice, de Vence ou de Grasse qui sorte de
            l&apos;ordinaire, c&apos;est une fête en plein air, avec de vrais
            animaux et un vrai décor. Le club accueille des cavaliers depuis
            1975 et les plus jeunes dès 2 ans.
          </p>

          <div className="relative aspect-[3/2] rounded-lg overflow-hidden my-8">
            <Image
              src="/photos/blog/fort-apache-12-poneys-selles-tapis-rouge.jpg"
              alt="Poneys sellés alignés sur un tapis rouge, à Fort Apache au Col de Vence"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <h2 className={h2}>Pourquoi fêter un anniversaire au poney club ?</h2>
          <p className={p}>
            Parce que le poney fait tout le travail. Dans une salle de jeux, il
            faut occuper les enfants ; au poney club, ils sont occupés dès
            qu&apos;ils posent un pied dans la cour. Il y a les poneys à
            approcher, à regarder de près, à caresser, puis le moment où
            chacun se retrouve en selle, un peu fier et un peu impressionné.
            C&apos;est une première fois pour beaucoup d&apos;invités, et
            c&apos;est souvent ce dont ils se souviennent en rentrant.
          </p>
          <p className={p}>
            Le cadre fait le reste. Fort Apache se trouve au cœur du Parc
            naturel régional des Préalpes d&apos;Azur, avec des vues sur la mer
            et sur les montagnes. Il n&apos;est pas rare de croiser des biches
            ou des chevreuils sur les chemins. Pour une bande d&apos;enfants
            habitués à la ville, c&apos;est une vraie sortie nature, le temps
            d&apos;un après-midi.
          </p>

          <h2 className={h2}>À partir de quel âge ?</h2>
          <p className={p}>
            Le club accueille les enfants dès 2 ans. Pour les tout-petits, la
            balade se fait le poney tenu en main par un adulte, qui marche à
            côté : c&apos;est le format décrit sur notre page{' '}
            <Link href="/balade-poney" className={lien}>
              balade à poney dès 2 ans
            </Link>
            . Les invités n&apos;ont besoin d&apos;aucune expérience. Si les
            âges sont mélangés, frères et sœurs compris, la cavalerie permet à
            chacun de monter un poney à sa taille.
          </p>
          <p className={p}>
            L&apos;âge des invités et leur nombre sont justement les deux
            premières choses à donner à Pénélope quand vous l&apos;appelez :
            c&apos;est ce qui permet de prévoir le bon nombre de poneys et
            l&apos;encadrement adapté.
          </p>

          <h2 className={h2}>Quels poneys, et quelle sécurité pour les enfants ?</h2>
          <p className={p}>
            La cavalerie va du shetland, le petit poney à la taille des
            tout-petits, au double poney, un grand poney adapté aux plus
            grands. Les poneys sont choisis pour leur douceur, un critère qui
            compte quand toute une bande d&apos;enfants veut les caresser en
            même temps.
          </p>
          <p className={p}>
            Chaque enfant porte un casque aux normes CE, fourni par le club,
            avec une charlotte à usage unique pour l&apos;hygiène. Le club
            dispose aussi d&apos;étriers de sécurité, conçus pour que le pied
            se dégage facilement. Vous n&apos;avez donc rien à acheter pour
            équiper les invités.
          </p>

          <div className="relative aspect-[3/2] rounded-lg overflow-hidden my-8">
            <Image
              src="/photos/blog/fort-apache-21-balade-chemin-chevre.jpg"
              alt="Balade à poney sur un chemin du Col de Vence, une chèvre suit le groupe"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <h2 className={h2}>Qu&apos;y a-t-il à découvrir au club ?</h2>
          <p className={p}>
            Au-delà des poneys, la vie du club amuse beaucoup les enfants. Une
            chèvre suit parfois les balades, des oies et un coq animent la
            cour, et l&apos;on voit les chevaux manger leur foin sous
            l&apos;abri. De quoi occuper les plus petits pendant que les
            grands se préparent, et alimenter les conversations du retour en
            voiture.
          </p>

          <h2 className={h2}>Comment préparer les invités ?</h2>
          <p className={p}>
            Le plus utile est de le préciser sur le carton d&apos;invitation :
            un pantalon long et souple, qui protège les jambes du frottement
            de la selle, et des chaussures fermées, idéalement à petit talon
            pour que le pied ne glisse pas dans l&apos;étrier. Les sandales et
            les jupes sont à éviter. Le casque est fourni : personne n&apos;a
            besoin d&apos;en apporter un.
          </p>
          <p className={p}>
            En hiver, une veste chaude, une écharpe et des gants rendent l&apos;après-midi bien plus agréable, à condition
            de laisser les jambes libres de bouger. Les parents qui
            accompagnent ont intérêt à prévoir de bonnes chaussures de marche.
          </p>

          <h2 className={h2}>Que demander au moment de réserver ?</h2>
          <p className={p}>
            Chaque fête est différente : un anniversaire de 4 ans ne
            s&apos;organise pas comme celui de 9 ans. Pour que tout soit calé du premier coup, préparez ces
            questions avant d&apos;appeler le club :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>la date et l&apos;heure qui vous conviennent, avec une date de repli ;</li>
            <li>le nombre d&apos;enfants et leur âge ;</li>
            <li>la durée et le déroulé de la fête, et le temps passé à poney ;</li>
            <li>le goûter : où le prendre et ce qu&apos;il faut apporter ;</li>
            <li>le nombre d&apos;adultes à prévoir pour accompagner ;</li>
            <li>le tarif de la formule.</li>
          </ul>
          <p className={p}>
            Pénélope répond à tout cela au téléphone et vous propose ce qui
            convient à l&apos;âge de votre enfant et à la taille du groupe.
          </p>

          <h2 className={h2}>Quand venir, et comment réserver ?</h2>
          <p className={p}>
            Le club est ouvert tous les jours, de 10h à 17h, toute
            l&apos;année. Il ne ferme qu&apos;un jour, le 25 décembre ; le 1er
            janvier, il est ouvert. Un anniversaire d&apos;hiver au poney club
            est donc tout à fait possible. Comme pour toute fête, le plus tôt
            vous appelez, plus vous avez de chances d&apos;obtenir le jour
            voulu.
          </p>
          <p className={p}>
            Et si votre enfant ne veut plus quitter les poneys après sa fête,
            il pourra continuer avec les{' '}
            <Link href="/cours" className={lien}>
              cours d&apos;éveil poney dès 4 ans
            </Link>{' '}
            ou les{' '}
            <Link href="/stages" className={lien}>
              stages poney des vacances
            </Link>
            . Vous cherchez plutôt un cadeau ? La balade à poney s&apos;offre
            aussi en bon cadeau, comme le raconte notre article{' '}
            <Link href="/actualites/offrir-balade-poney-noel" className={lien}>
              idée cadeau : une balade à poney
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
                <strong>Pour qui :</strong> les anniversaires d&apos;enfants,
                dès 2 ans, sans aucune expérience du poney.
              </li>
              <li>
                <strong>Formule :</strong> nombre d&apos;enfants, durée et
                déroulé à voir avec Pénélope au moment de réserver.
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
                <strong>Tarifs :</strong> sur demande ; voir aussi la{' '}
                <Link href="/tarifs" className={lien}>
                  page des tarifs
                </Link>
                .
              </li>
            </ul>
            <p className="mt-6 text-charbon/85">
              Envie d&apos;un anniversaire au poney club pour votre enfant ?
              Appelez Pénélope au{' '}
              <a href={`tel:${siteConfig.contact.phone}`} className={lien}>
                {siteConfig.contact.phoneDisplay}
              </a>
              , ou écrivez au club.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <LinkButton href="/contact?objet=Renseignements" variant="primary" size="md">
                Réserver un anniversaire
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
