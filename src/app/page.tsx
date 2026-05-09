import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { WhyUs } from '@/components/home/WhyUs';
import { Activites } from '@/components/home/Activites';
import { BaladePoney } from '@/components/home/BaladePoney';
import { Testimonials } from '@/components/home/Testimonials';
import { SocialWall } from '@/components/home/SocialWall';
import { MapEmbed } from '@/components/home/MapEmbed';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `${siteConfig.fullName} — Balades à poney & équitation à Vence`,
  description:
    "Club équestre à Vence (06140), quartier Col de Vence. Balades à poney dès 2 ans, cours d'équitation, stages vacances et randonnées. Ouvert tous les jours de 10h à 17h.",
  alternates: {
    canonical: siteConfig.url,
    languages: {
      fr: `${siteConfig.url}/`,
      en: `${siteConfig.url}/en`,
      'x-default': `${siteConfig.url}/`,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Présentation — formation Pénélope (intègre l'héritage Zingaro) */}
      <section className="section bg-white">
        <div className="container-narrow text-center">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            Bienvenue à Fort Apache
          </p>
          <h2 className="text-foret-dark mb-6">
            Une formation exceptionnelle, une passion transmise
          </h2>
          <div className="space-y-5 text-charbon/85 text-lg leading-relaxed">
            <p>
              Pénélope monte à cheval depuis ses cinq ans. Au fil de sa
              carrière, elle a eu la chance de travailler pour et avec de
              grands noms de l&apos;équitation, dont le célèbre{' '}
              <strong className="text-foret-dark">Bartabas</strong> du{' '}
              <strong className="text-foret-dark">théâtre Zingaro</strong>.
              De ces rencontres, elle a tiré une exigence rare dans la
              sélection, l&apos;éducation et le soin des chevaux.
            </p>
            <p>
              Sa philosophie aujourd&apos;hui : transmettre ce qu&apos;elle a
              reçu — l&apos;apprentissage total du cheval. Des bi-poney aux
              compétiteurs confirmés, chaque cavalier trouve sa place à Fort
              Apache.
            </p>
          </div>
        </div>
      </section>

      <WhyUs />

      <BaladePoney />

      <Activites />

      <SocialWall locale="fr" />

      <Testimonials />

      {/* Bandeau CTA */}
      <section className="bg-charbon text-white">
        <div className="container mx-auto py-16 md:py-20 text-center">
          <h2 className="text-white mb-6">
            Prêt à monter en selle ? Contactez-nous
          </h2>
          <p className="text-creme/80 max-w-xl mx-auto mb-8">
            Notre équipe vous accompagne pour trouver la formule qui vous
            correspond — du baby poney au cavalier confirmé. Ouvert tous les
            jours de 10h à 17h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/contact" variant="primary" size="lg">
              Nous contacter
            </LinkButton>
            <a
              href="tel:+33493589143"
              className="inline-flex items-center justify-center px-8 py-4 text-lg text-white border-2 border-white/40 hover:bg-white/10 rounded-md transition"
            >
              04 93 58 91 43
            </a>
          </div>
        </div>
      </section>

      <MapEmbed />
    </>
  );
}
