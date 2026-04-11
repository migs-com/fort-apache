type Testimonial = {
  quote: string;
  name: string;
  niveau: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Ma fille a découvert l'équitation à Fort Apache il y a deux ans. L'accompagnement de Pénélope et de l'équipe est remarquable, elle progresse avec plaisir et sécurité.",
    name: 'Claire M.',
    niveau: 'Parent — École poney',
  },
  {
    quote:
      "Un cadre magnifique, une cavalerie très bien entretenue et des cours adaptés. Je recommande sans hésiter, que ce soit pour débuter ou progresser.",
    name: 'Thomas L.',
    niveau: 'Cavalier Galop 5',
  },
  {
    quote:
      "Les stages d'été sont le moment que mes enfants attendent le plus dans l'année. L'ambiance est familiale, bienveillante, et ils reviennent avec des étoiles plein les yeux.",
    name: 'Sophie D.',
    niveau: 'Parent — Stages',
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
