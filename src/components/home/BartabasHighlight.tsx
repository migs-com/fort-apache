import Link from 'next/link';

export function BartabasHighlight() {
  return (
    <section className="relative bg-charbon text-creme overflow-hidden">
      {/* Subtle decorative pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 50%, rgba(201,185,154,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(123,45,62,0.3) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans uppercase tracking-[0.3em] text-sable-light text-xs mb-4">
            Une signature d&apos;exception
          </p>
          <h2 className="text-white mb-8 leading-tight">
            L&apos;héritage du Théâtre équestre Zingaro
          </h2>
          <p className="font-serif italic text-2xl md:text-3xl text-creme/95 leading-relaxed mb-8 max-w-3xl mx-auto">
            « Pénélope a passé plusieurs années aux côtés de{' '}
            <span className="text-sable-light">Bartabas</span>, à
            s&apos;occuper des chevaux du célèbre théâtre équestre{' '}
            <span className="text-sable-light">Zingaro</span>. »
          </p>
          <p className="text-creme/75 max-w-2xl mx-auto mb-10">
            De cette expérience unique, elle a tiré une exigence rare dans
            la sélection, l&apos;éducation et le soin de sa cavalerie. Une
            philosophie qu&apos;elle transmet aujourd&apos;hui à chacun de
            ses cavaliers, du baby poney au compétiteur confirmé.
          </p>
          <Link
            href="/le-club"
            className="inline-flex items-center gap-2 text-sable-light font-medium hover:text-white transition border-b border-sable-light/40 pb-1"
          >
            Découvrir l&apos;équipe et le club →
          </Link>
        </div>
      </div>
    </section>
  );
}
