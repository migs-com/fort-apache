type Testimonial = {
  quote: string;
  name: string;
  niveau: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "On apprend vraiment à tout gérer par rapport au cheval, pas seulement à monter. Quoi qu'il se passe — pour le donner à manger, s'il est malade — on sait quoi faire.",
    name: 'Une élève',
    niveau: 'Cavalière de Fort Apache',
  },
  {
    quote:
      "C'est un club où on a plaisir à venir parce qu'il y a du sens. On apprend à connaître son cheval, à connaître l'équitation. Le cheval a beaucoup d'importance.",
    name: 'Un parent',
    niveau: "France 3 — Reportage",
  },
  {
    quote:
      "Quand j'ai des petits problèmes, soit au collège ou avec des copains, je vais voir les chevaux. Il m'aide un peu, il m'apaise.",
    name: 'Une jeune cavalière',
    niveau: 'France 3 — Reportage',
  },
];

export function Testimonials() {
  return (
    <section className="section bg-foret-dark text-creme">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans uppercase tracking-[0.25em] text-sable-light text-xs mb-3">
            Ils nous font confiance
          </p>
          <h2 className="text-white">Témoignages de nos cavaliers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-foret rounded-lg p-6 md:p-8 border border-white/10"
            >
              <svg
                className="w-8 h-8 text-sable mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M10 8c-4 0-8 3-8 10v6h8v-8H6c0-3 2-5 4-5V8zm14 0c-4 0-8 3-8 10v6h8v-8h-4c0-3 2-5 4-5V8z" />
              </svg>
              <blockquote className="font-serif text-lg md:text-xl leading-relaxed text-white/95 mb-6">
                « {t.quote} »
              </blockquote>
              <figcaption className="pt-4 border-t border-white/10">
                <p className="font-medium text-white">{t.name}</p>
                <p className="text-sm text-sable-light">{t.niveau}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
