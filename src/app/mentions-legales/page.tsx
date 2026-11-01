import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    "Mentions légales du site du club équestre Fort Apache au Col de Vence : éditeur, directrice de la publication, hébergement, propriété des contenus.",
  alternates: {
    canonical: `${siteConfig.url}/mentions-legales`,
  },
};

const sectionTitle = 'font-serif text-2xl text-foret-dark mt-10 mb-3';

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader overline="Informations légales" title="Mentions légales" />
      <section className="section bg-creme">
        <div className="container mx-auto max-w-3xl text-charbon/85 leading-relaxed">
          <h2 className={sectionTitle}>Éditeur du site</h2>
          <p>
            Fort Apache, établissement équestre
            <br />
            Dirigeante : Pénélope Purtell
            <br />
            75 route de Saint-Barnabé, quartier Col de Vence, 06140 Coursegoules
            <br />
            SIRET : 403 688 062 00021
            <br />
            Téléphone :{' '}
            <a href={`tel:${siteConfig.contact.phone}`} className="text-bordeaux underline">
              {siteConfig.contact.phoneDisplay}
            </a>
            <br />
            E-mail :{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-bordeaux underline">
              {siteConfig.contact.email}
            </a>
          </p>

          <h2 className={sectionTitle}>Directrice de la publication</h2>
          <p>Pénélope Purtell, dirigeante de Fort Apache.</p>

          <h2 className={sectionTitle}>Conception et réalisation</h2>
          <p>
            Mig&apos;s Communication, 15 avenue de Grasse, bâtiment A, 06800
            Cagnes-sur-Mer.
          </p>

          <h2 className={sectionTitle}>Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133,
            Covina, CA 91723, États-Unis (vercel.com).
            <br />
            Le nom de domaine et la messagerie sont gérés par o2switch, 222-224
            boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France.
          </p>

          <h2 className={sectionTitle}>Propriété des contenus</h2>
          <p>
            Les textes et les photographies de ce site appartiennent à Fort
            Apache, sauf mention contraire. Toute reproduction, même partielle,
            demande une autorisation écrite préalable du club.
          </p>

          <h2 className={sectionTitle}>Données personnelles</h2>
          <p>
            L&apos;utilisation des informations que vous nous transmettez est
            décrite dans la{' '}
            <a href="/confidentialite" className="text-bordeaux underline">
              politique de confidentialité
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
