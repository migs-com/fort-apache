type Reason = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const iconCls = 'w-12 h-12 text-bordeaux';

const reasons: Reason[] = [
  {
    title: '30 ans d\'expérience',
    description:
      "Plus de trente ans à louer des poneys et accueillir des familles, dans un esprit de transmission et d'amélioration constante.",
    icon: (
      <svg className={iconCls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="24" cy="24" r="20" />
        <path d="M24 12v12l8 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'L\'école Zingaro',
    description:
      "Pénélope, fondatrice, a travaillé plusieurs années avec Bartabas et son célèbre théâtre équestre Zingaro.",
    icon: (
      <svg className={iconCls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M24 4l4 12h12l-10 8 4 14-10-8-10 8 4-14-10-8h12z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Parc Naturel des Préalpes',
    description:
      "Un cadre exceptionnel au Col de Vence, à 40 minutes de la mer, dans un parc naturel régional préservé.",
    icon: (
      <svg className={iconCls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 40l12-20 8 12 6-8 14 16H4z" strokeLinejoin="round" />
        <circle cx="32" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: 'Ouvert 7j/7',
    description:
      "Le club vous accueille tous les jours de l'année, de 10h à 18h. Cours, balades, stages : à vous de choisir.",
    icon: (
      <svg className={iconCls} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="6" y="10" width="36" height="32" rx="2" />
        <path d="M6 18h36M16 4v8M32 4v8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section className="section bg-creme">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            Ce qui nous distingue
          </p>
          <h2 className="text-foret-dark mb-4">
            Pourquoi choisir Fort Apache
          </h2>
          <p className="max-w-2xl mx-auto text-charbon/75">
            Un club d&apos;équitation pas comme les autres — par son
            histoire, son équipe, et son cadre.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="text-center bg-white rounded-lg p-6 md:p-8 border border-sable/40 hover:border-bordeaux/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-bordeaux/5 mb-5">
                {r.icon}
              </div>
              <h3 className="font-serif text-xl text-foret-dark mb-3">
                {r.title}
              </h3>
              <p className="text-sm text-charbon/75 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
