import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { WhyUs } from '@/components/home/WhyUs';
import { Disciplines } from '@/components/home/Disciplines';
import { BaladePoney } from '@/components/home/BaladePoney';
import { BartabasHighlight } from '@/components/home/BartabasHighlight';
import { Testimonials } from '@/components/home/Testimonials';
import { SocialWall } from '@/components/home/SocialWall';
import { MapEmbed } from '@/components/home/MapEmbed';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `${siteConfig.fullName} — Balades à poney & équitation à Coursegoules`,
  description:
    "Club équestre à Coursegoules (06140), au Col de Vence. Balades à poney dès 2 ans, cours d'équitation, stages vacances et randonnées. Ouvert 7j/7 de 10h à 18h.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Présentation */}
      <section className="section bg-white">
        <div className="container-narrow text-center">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            Bienvenue à Fort Apache
          </p>
          <p className="font-serif italic text-2xl md:text-3xl text-foret-dark leading-relaxed">
            Vous allez vivre des moments de détente en famille, entre amis ou
            seul. Notre équipe disponible et compétente vous guide pas à pas
            vers votre objectif — promenade à poney, balade à cheval,
            initiation, perfectionnement — en toute sécurité.
          </p>
        </div>
      </section>

      <WhyUs />

      <BaladePoney />

      <BartabasHighlight />

      <Disciplines />

      <SocialWall />

      <Testimonials />

      {/* Bandeau CTA */}
      <section className="bg-charbon text-white">
        <div className="container mx-auto py-16 md:py-20 text-center">
          <h2 className="text-white mb-6">
            Prêt à monter en selle ? Contactez-nous
          </h2>
          <p className="text-creme/80 max-w-xl mx-auto mb-8">
            Notre équipe vous accompagne pour trouver la formule qui vous
            correspond — du baby poney au cavalier confirmé. Ouvert 7 jours
            sur 7 de 10h à 18h.
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
