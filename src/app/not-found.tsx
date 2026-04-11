import Link from 'next/link';
import { LinkButton } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-creme">
      <div className="text-center px-4">
        <p className="font-serif text-8xl text-bordeaux/50 mb-2">404</p>
        <h1 className="text-foret-dark mb-4">Page introuvable</h1>
        <p className="text-charbon/75 mb-8 max-w-md mx-auto">
          La page que vous cherchez semble avoir pris le galop… Revenez à
          l&apos;accueil pour retrouver votre chemin.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <LinkButton href="/" variant="primary" size="md">
            Retour à l&apos;accueil
          </LinkButton>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-foret-dark hover:text-bordeaux underline underline-offset-4"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
