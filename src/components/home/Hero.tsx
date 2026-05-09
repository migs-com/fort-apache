import Image from 'next/image';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { LinkButton } from '@/components/ui/Button';

const FR = {
  eyebrow: 'Club équestre — Vence · Col de Vence',
  h1Line1: 'Au royaume des chevaux,',
  h1Line2: 'au cœur des Préalpes d’Azur',
  subtitle:
    'Balades à poney en famille dès 2 ans, cours d’équitation, stages vacances et randonnées. Ouvert tous les jours de 10h à 17h.',
  primaryCta: 'Réserver une balade',
  secondaryCta: 'Découvrir le club →',
  alt: 'Fort Apache — Club équestre',
} as const;

const EN = {
  eyebrow: 'Equestrian club — Vence · Col de Vence',
  h1Line1: 'A home for horses,',
  h1Line2: 'in the heart of the Préalpes d’Azur',
  subtitle:
    'Family pony rides from age 2, riding lessons, school holiday camps and trail rides. Open every day.',
  primaryCta: 'Book a ride',
  secondaryCta: 'Discover the club →',
  alt: 'Fort Apache — Equestrian Club',
} as const;

export async function Hero() {
  const locale = await getLocale();
  const isEn = locale === 'en';
  const t = isEn ? EN : FR;
  const contactHref = isEn
    ? '/en/contact?objet=Renseignements'
    : '/contact?objet=Renseignements';
  const secondaryHref = isEn ? '/en/activities' : '/activites';

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/photos/hero-fort-apache.jpg"
          alt={t.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight/50" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/20 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto text-center px-4 py-24">
        <p className="font-display uppercase tracking-[0.3em] text-cream/80 text-xs md:text-sm mb-6 animate-fade-in">
          {t.eyebrow}
        </p>
        <h1 className="font-display font-bold text-cream text-5xl md:text-7xl leading-tight mb-6 animate-slide-up max-w-4xl mx-auto">
          {t.h1Line1} <br className="hidden md:block" />
          {t.h1Line2}
        </h1>
        <p className="text-cream/90 text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light animate-slide-up">
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <LinkButton href={contactHref} variant="primary" size="lg">
            {t.primaryCta}
          </LinkButton>
          <Link
            href={secondaryHref}
            className="text-cream underline underline-offset-4 decoration-cream/50 hover:decoration-cream transition"
          >
            {t.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
