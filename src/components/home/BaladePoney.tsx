import Image from 'next/image';
import { LinkButton } from '@/components/ui/Button';
import { ffeImages } from '@/lib/images';

export function BaladePoney() {
  return (
    <section className="section bg-white" id="balades-poney">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
          <Image
            src={ffeImages.album[10]}
            alt="Balade à poney au Col de Vence"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-bordeaux text-white text-xs uppercase tracking-wide px-3 py-1.5 rounded-full">
            ★ Activité phare
          </span>
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            Plus de 30 ans d&apos;expérience
          </p>
          <h2 className="text-foret-dark mb-6">
            Partez en balade à poney
          </h2>
          <p className="text-charbon/85 text-lg leading-relaxed mb-4">
            C&apos;est <strong>l&apos;activité préférée des familles</strong>{' '}
            à Fort Apache. Nous accueillons les enfants{' '}
            <strong>dès 2 ans</strong> pour partir en balade dans une nature
            sauvage, sur des parcours balisés au cœur du Col de Vence.
          </p>
          <p className="text-charbon/75 mb-8">
            De 10 minutes à plusieurs heures : vous écoutez les consignes de
            base, puis vous partez avec vos enfants sur le dos d&apos;un
            poney que vous tenez à la main. Du shetland pour les plus
            jeunes au double poney pour les ados.
          </p>
          <ul className="space-y-2 mb-8 text-charbon/85">
            <li className="flex gap-2">
              <span className="text-foret font-bold" aria-hidden>
                ✓
              </span>
              Accueil des enfants à partir de 2 ans
            </li>
            <li className="flex gap-2">
              <span className="text-foret font-bold" aria-hidden>
                ✓
              </span>
              Casques aux normes CE et étriers de sécurité fournis
            </li>
            <li className="flex gap-2">
              <span className="text-foret font-bold" aria-hidden>
                ✓
              </span>
              Cavalerie sélectionnée pour sa douceur, depuis 30 ans
            </li>
            <li className="flex gap-2">
              <span className="text-foret font-bold" aria-hidden>
                ✓
              </span>
              Au cœur du Parc Naturel Régional des Préalpes d&apos;Azur
            </li>
            <li className="flex gap-2">
              <span className="text-foret font-bold" aria-hidden>
                ✓
              </span>
              Ouvert tous les jours, de 10h à 18h
            </li>
          </ul>
          <LinkButton
            href="/contact?objet=Renseignements"
            variant="primary"
            size="lg"
          >
            Réserver une balade
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
