import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    "Comment le club équestre Fort Apache utilise et protège les informations envoyées par le formulaire de contact, et comment exercer vos droits.",
  alternates: {
    canonical: `${siteConfig.url}/confidentialite`,
  },
};

const sectionTitle = 'font-serif text-2xl text-foret-dark mt-10 mb-3';

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader overline="Vos données" title="Politique de confidentialité" />
      <section className="section bg-creme">
        <div className="container mx-auto max-w-3xl text-charbon/85 leading-relaxed">
          <h2 className={sectionTitle}>Qui est responsable de vos données ?</h2>
          <p>
            Fort Apache, établissement équestre dirigé par Pénélope Purtell,
            Carrefour Saint-Barnabé, quartier Col de Vence, 06140 Coursegoules.
          </p>

          <h2 className={sectionTitle}>Quelles informations recueillons-nous ?</h2>
          <p>
            Uniquement celles que vous saisissez dans le formulaire de contact :
            nom, prénom, adresse e-mail, téléphone, et, si vous les indiquez,
            l&apos;âge du cavalier, son niveau, l&apos;objet de votre demande et
            votre message.
          </p>

          <h2 className={sectionTitle}>À quoi servent-elles ?</h2>
          <p>
            À répondre à votre demande : renseignements, réservation d&apos;une
            balade, inscription à un cours ou à un stage. Elles ne servent à
            aucune prospection commerciale et ne sont ni vendues ni cédées. La
            base légale de ce traitement est votre consentement, donné en
            envoyant le formulaire.
          </p>

          <h2 className={sectionTitle}>Qui y a accès ?</h2>
          <p>
            Le club, qui reçoit votre message dans sa messagerie. Le message
            transite par les services techniques du site : son hébergeur, Vercel,
            et la messagerie du domaine, o2switch.
          </p>

          <h2 className={sectionTitle}>Combien de temps sont-elles conservées ?</h2>
          <p>
            Le temps de traiter votre demande, puis au plus trois ans après
            notre dernier échange, sauf si vous devenez cavalier du club.
          </p>

          <h2 className={sectionTitle}>Cookies et mesure d&apos;audience</h2>
          <p>
            Le site ne dépose aucun cookie publicitaire. Si une mesure
            d&apos;audience est mise en place, elle sera décrite ici avant son
            activation.
          </p>

          <h2 className={sectionTitle}>Vos droits</h2>
          <p>
            Vous pouvez demander à consulter, corriger ou supprimer vos
            informations, ou vous opposer à leur utilisation, en écrivant à{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-bordeaux underline">
              {siteConfig.contact.email}
            </a>{' '}
            ou en appelant le{' '}
            <a href={`tel:${siteConfig.contact.phone}`} className="text-bordeaux underline">
              {siteConfig.contact.phoneDisplay}
            </a>
            . Si vous estimez que vos droits ne sont pas respectés, vous pouvez
            saisir la CNIL (cnil.fr).
          </p>
        </div>
      </section>
    </>
  );
}
