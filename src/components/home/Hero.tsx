import Image from 'next/image';
import Link from 'next/link';
import { LinkButton } from '@/components/ui/Button';
import { ffeImages } from '@/lib/images';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={ffeImages.top3}
          alt="Fort Apache — Club équestre"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charbon/50" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-charbon/70 via-charbon/20 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto text-center text-white px-4 py-24">
        <p className="font-sans uppercase tracking-[0.3em] text-sable-light text-xs md:text-sm mb-6 animate-fade-in">
          Club équestre
        </p>
        <h1 className="font-serif text-white mb-6 animate-slide-up max-w-4xl mx-auto">
          Découvrez l&apos;équitation <br className="hidden md:block" />
          dans un cadre exceptionnel
        </h1>
        <p className="text-lg md:text-xl text-creme/90 max-w-2xl mx-auto mb-10 font-light animate-slide-up">
          Cours pour tous les niveaux, stages vacances, randonnées et
          compétitions. Rejoignez une communauté passionnée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <LinkButton href="/contact" variant="primary" size="lg">
            Prendre rendez-vous
          </LinkButton>
          <Link
            href="/disciplines"
            className="text-white underline underline-offset-4 decoration-sable hover:decoration-white transition"
          >
            Voir nos disciplines →
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
