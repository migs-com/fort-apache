import Image from 'next/image';
import Link from 'next/link';
import { LinkButton } from '@/components/ui/Button';

// TODO V2: Remplacer hero graphique par photo officielle Fort Apache
export function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-sage">
      <div className="absolute inset-0 flex items-center justify-end opacity-10 pointer-events-none">
        <Image
          src="/decoratifs/tete-cheval-bleu-nuit.svg"
          alt=""
          width={900}
          height={900}
          priority
          className="h-[110%] w-auto -mr-24 md:-mr-12"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto text-center px-4 py-24">
        <p className="font-display uppercase tracking-[0.3em] text-midnight/70 text-xs md:text-sm mb-6 animate-fade-in">
          Club équestre — Vence · Col de Vence
        </p>
        <h1 className="font-display font-bold text-midnight text-5xl md:text-7xl leading-tight mb-6 animate-slide-up max-w-4xl mx-auto">
          Au royaume des chevaux, <br className="hidden md:block" />
          au cœur des Préalpes d&apos;Azur
        </h1>
        <Image
          src="/decoratifs/trait-pinceau-bleu-nuit.svg"
          alt=""
          width={240}
          height={20}
          className="mx-auto mb-8 h-4 w-auto opacity-80"
          aria-hidden="true"
        />
        <p className="text-midnight/80 text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light animate-slide-up">
          Balades à poney en famille dès 2 ans, cours d&apos;équitation,
          stages vacances et randonnées. Ouvert tous les jours de 10h à 17h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <LinkButton
            href="/contact?objet=Renseignements"
            variant="primary"
            size="lg"
          >
            Réserver une balade
          </LinkButton>
          <Link
            href="/activites"
            className="text-midnight underline underline-offset-4 decoration-midnight/40 hover:decoration-midnight transition"
          >
            Découvrir le club →
          </Link>
        </div>
      </div>
    </section>
  );
}
