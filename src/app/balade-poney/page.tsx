import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Balade à poney dès 2 ans au Col de Vence',
  description:
    "Balade à poney en famille dès 2 ans au Col de Vence : le parent tient le poney, parcours balisés en pleine nature, ouvert tous les jours de 10h à 17h.",
  alternates: {
    canonical: `${siteConfig.url}/balade-poney`,
  },
};

const faq: { q: string; a: string }[] = [
  {
    q: 'Faut-il réserver la balade à poney ?',
    a: "La balade se réserve auprès du club. Le plus simple est d'appeler Pénélope au 04 93 58 91 43, ou de laisser un message depuis la page contact.",
  },
  {
    q: 'Le parent doit-il savoir monter à cheval ?',
    a: "Non. Le parent marche à côté du poney et le tient en main : il n'a pas besoin de savoir monter. Les consignes de base sont données à l'arrivée.",
  },
  {
    q: "Peut-on faire une balade à poney en hiver ?",
    a: "Oui, le club est ouvert tous les jours de 10h à 17h, hiver compris. Il ne ferme que le 25 décembre ; le 1er janvier, il est ouvert. En hiver, couvrez chaudement l'enfant en gardant des vêtements qui lui laissent les jambes libres.",
  },
  {
    q: 'Peut-on offrir une balade à poney ?',
    a: "Oui, le club propose des bons cadeaux. Pour la formule et ses conditions, renseignez-vous auprès de Pénélope au 04 93 58 91 43.",
  },
  {
    q: 'Et après la balade, si mon enfant veut continuer ?',
    a: "Dès 4 ans, l'éveil poney permet de découvrir le poney pas à pas, en séance encadrée. Les stages des vacances accueillent les enfants à partir de 6 ans.",
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
      name: 'Balade à poney dès 2 ans',
      item: `${siteConfig.url}/balade-poney`,
    },
  ],
};

const h2 = 'text-foret-dark mt-12 mb-4';
const p = 'mb-4';
const lien = 'text-bordeaux underline';

export default function BaladePoneyPage() {
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

      <PageHeader overline="Activité phare" title="Balade à poney dès 2 ans au Col de Vence">
        Le poney tenu en main par le parent, des chemins balisés en pleine
        nature, et un premier souvenir à cheval pour toute la famille.
      </PageHeader>

      <section className="section bg-creme">
        <div className="container mx-auto max-w-3xl text-charbon/85 text-lg leading-relaxed">
          <p className={p}>
            Une balade à poney dès 2 ans, c&apos;est possible au Col de Vence :
            chez Fort Apache, le tout-petit est assis sur le poney et c&apos;est
            le parent qui le tient en main, à côté de lui, sur des parcours
            balisés en pleine nature. Aucune expérience n&apos;est nécessaire,
            ni pour l&apos;enfant ni pour l&apos;adulte. C&apos;est
            l&apos;activité préférée des familles au club, qui accueille des
            cavaliers depuis 1975.
          </p>

          <div className="relative aspect-[3/2] rounded-lg overflow-hidden my-8">
            <Image
              src="/photos/blog/fort-apache-17-depart-balade-de-dos.jpg"
              alt="Départ de balade au Col de Vence : un adulte tient le poney en main, une chèvre suit"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <h2 className={h2}>Comment se passe une balade à poney avec un enfant de 2 ans ?</h2>
          <p className={p}>
            À l&apos;arrivée, le club vous donne les consignes de base : comment
            mener le poney, où marcher, que faire s&apos;il s&apos;arrête pour
            brouter une touffe d&apos;herbe un peu trop tentante. Votre enfant
            s&apos;installe en selle, casque sur la tête, et vous partez ensemble
            sur un parcours balisé, le poney tenu en main.
          </p>
          <p className={p}>
            Ce format a un grand avantage avec les tout-petits : le parent reste
            à côté de son enfant pendant toute la sortie. Il le rassure, adapte
            le rythme, fait une pause quand il faut. La balade devient un
            moment partagé plutôt qu&apos;une activité où l&apos;on regarde son
            enfant de loin. Pour ceux qui veulent d&apos;abord voir à quoi
            ressemble le club, la page{' '}
            <Link href="/activites" className={lien}>
              toutes les activités du club
            </Link>{' '}
            présente l&apos;ensemble de ce que propose Fort Apache.
          </p>

          <h2 className={h2}>À partir de quel âge, et sur quel poney ?</h2>
          <p className={p}>
            Les enfants sont accueillis dès 2 ans. La cavalerie va du shetland,
            le petit poney à la taille des tout-petits, au double poney, un
            grand poney adapté aux ados. Les frères et sœurs de tous les âges
            peuvent donc partir ensemble, chacun sur une monture à sa mesure.
            Les poneys sont choisis pour leur douceur, un critère qui compte
            quand le cavalier a encore la tétine dans la poche.
          </p>
          <p className={p}>
            Côté sécurité, le casque aux normes CE est fourni, avec une charlotte
            à usage unique pour l&apos;hygiène, et le club dispose
            d&apos;étriers de sécurité, prévus pour que le pied se dégage
            facilement.
          </p>

          <h2 className={h2}>Combien de temps dure une balade ?</h2>
          <p className={p}>
            Les balades vont de 10 minutes à plusieurs heures. Avec un enfant de
            2 ou 3 ans, une sortie courte suffit souvent pour un premier
            contact réussi : mieux vaut repartir avec l&apos;envie de revenir
            qu&apos;avec un enfant fatigué. Les plus grands peuvent partir plus
            longtemps. La durée la mieux adaptée à l&apos;âge de votre enfant se
            décide avec Pénélope au moment de réserver.
          </p>

          <h2 className={h2}>Qu&apos;y a-t-il à voir sur les chemins du Col de Vence ?</h2>
          <p className={p}>
            Fort Apache se trouve au cœur du Parc naturel régional des Préalpes
            d&apos;Azur, à environ 40 minutes de la mer. Les chemins offrent des
            vues sur la mer et sur les montagnes, et il est fréquent de croiser
            des biches ou des chevreuils au détour d&apos;un virage. Pour un
            enfant, c&apos;est autant une sortie nature qu&apos;une balade à
            poney : il y a toujours quelque chose à montrer du doigt.
          </p>
          <p className={p}>
            La vie du club fait aussi partie de la visite. Une chèvre suit
            parfois les balades, des oies et un coq animent la cour : de quoi
            occuper les petits pendant que les grands se préparent.
          </p>

          <div className="relative aspect-[3/2] rounded-lg overflow-hidden my-8">
            <Image
              src="/photos/blog/fort-apache-22-shetland-criniere-sombre.jpg"
              alt="Petit poney shetland à crinière sombre, au paddock de Fort Apache"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <h2 className={h2}>Comment habiller son enfant pour la balade ?</h2>
          <p className={p}>
            Prévoyez un pantalon long et souple, qui protège les jambes du
            frottement de la selle, et des chaussures fermées, idéalement à
            petit talon pour que le pied ne glisse pas dans l&apos;étrier. Le
            casque est fourni : inutile d&apos;en apporter un. En hiver, une
            veste chaude et des gants font la différence, à condition de
            laisser les jambes libres de bouger.
          </p>
          <p className={p}>
            Côté parent, de bonnes chaussures de marche suffisent : c&apos;est
            vous qui marchez à côté du poney.
          </p>

          <h2 className={h2}>Quand venir, et comment réserver ?</h2>
          <p className={p}>
            Le club est ouvert tous les jours, de 10h à 17h. Il ne ferme
            qu&apos;un jour par an, le 25 décembre ; le 1er janvier, il est
            ouvert. La balade se réserve auprès du club : un appel à Pénélope
            permet de caler le jour, l&apos;heure et la durée qui conviennent à
            votre enfant.
          </p>
          <p className={p}>
            Vous cherchez une idée cadeau ? La balade à poney s&apos;offre aussi
            en bon cadeau, comme le raconte notre article{' '}
            <Link href="/actualites/offrir-balade-poney-noel" className={lien}>
              idée cadeau de Noël : une balade à poney
            </Link>
            . Et si votre enfant ne veut plus descendre du poney, il pourra
            continuer avec les{' '}
            <Link href="/cours" className={lien}>
              cours d&apos;éveil poney dès 4 ans
            </Link>{' '}
            ou, plus tard, les{' '}
            <Link href="/stages" className={lien}>
              stages poney des vacances
            </Link>
            . Vous organisez une fête ? Voyez notre page{' '}
            <Link href="/anniversaire-poney" className={lien}>
              anniversaire au poney club
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
                <strong>Pour qui :</strong> les enfants dès 2 ans, sans
                expérience, le poney tenu en main par le parent.
              </li>
              <li>
                <strong>Durée :</strong> de 10 minutes à plusieurs heures, sur
                des parcours balisés ; la durée adaptée à l&apos;âge se voit
                avec Pénélope.
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
                <strong>Tarifs :</strong> voir la{' '}
                <Link href="/tarifs" className={lien}>
                  page des tarifs
                </Link>
                , ou renseignez-vous auprès de Pénélope.
              </li>
            </ul>
            <p className="mt-6 text-charbon/85">
              Envie d&apos;une première balade à poney en famille ? Appelez
              Pénélope au{' '}
              <a href={`tel:${siteConfig.contact.phone}`} className={lien}>
                {siteConfig.contact.phoneDisplay}
              </a>
              , ou écrivez au club.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <LinkButton href="/contact?objet=Renseignements" variant="primary" size="md">
                Réserver une balade
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
