import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { Disciplines } from '@/components/home/Disciplines';
import { BaladePoney } from '@/components/home/BaladePoney';
import { Testimonials } from '@/components/home/Testimonials';
import { MapEmbed } from '@/components/home/MapEmbed';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `${siteConfig.fullName} — Balades à poney & équitation à Coursegoules`,
  description:
    "Club équestre à Coursegoules (06140), au Col de Vence. Balades à poney, cours d'équitation, stages vacances et randonnées. Ouvert 7j/7 de 10h à 18h.",
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
            Depuis plus de vingt ans, nous partageons notre passion du cheval
            avec des cavaliers de tous âges, dans le respect de l&apos;animal
            et le plaisir de progresser.
          </p>
        </div>
      </section>

      <Disciplines />

      <BaladePoney />

      <Testimonials />

      {/* Bandeau CTA */}
      <section className="bg-charbon text-white">
        <div className="container mx-auto py-16 md:py-20 text-center">
          <h2 className="text-white mb-6">
            Prêt à commencer ? Contactez-nous aujourd&apos;hui
          </h2>
          <p className="text-creme/80 max-w-xl mx-auto mb-8">
            Notre équipe vous accompagne pour trouver la formule qui vous
            correspond, quel que soit votre niveau.
          </p>
          <LinkButton href="/contact" variant="primary" size="lg">
            Nous contacter
          </LinkButton>
        </div>
      </section>

      <MapEmbed />
    </>
  );
}
