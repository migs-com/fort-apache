import Link from 'next/link';

type Discipline = {
  slug: string;
  name: string;
  icon: React.ReactNode;
};

const iconCls = 'w-10 h-10 text-foret group-hover:text-bordeaux transition';

const disciplines: Discipline[] = [
  {
    slug: 'cours-collectifs',
    name: 'Cours collectifs',
    icon: (
      <svg className={iconCls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="20" cy="24" r="4" />
        <circle cx="32" cy="20" r="4" />
        <circle cx="44" cy="24" r="4" />
        <path d="M14 52c0-6 4-12 10-12 3 0 5 2 8 2s5-2 8-2c6 0 10 6 10 12" />
      </svg>
    ),
  },
  {
    slug: 'dressage',
    name: 'Dressage',
    icon: (
      <svg className={iconCls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 44h40M16 44v-8M48 44v-8M20 36c0-8 5-14 12-14s12 6 12 14" />
        <circle cx="32" cy="16" r="2" />
      </svg>
    ),
  },
  {
    slug: 'saut-obstacles',
    name: 'Saut d\'obstacles',
    icon: (
      <svg className={iconCls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M8 48h48M16 48V28M48 48V28M16 28h32M16 36h32" />
        <path d="M6 48c4-12 12-20 22-20" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    slug: 'randonnees',
    name: 'Randonnées',
    icon: (
      <svg className={iconCls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M8 52l12-20 10 14 8-10 18 16" />
        <circle cx="44" cy="14" r="4" />
      </svg>
    ),
  },
];

export function Disciplines() {
  return (
    <section className="section bg-creme">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans uppercase tracking-[0.25em] text-bordeaux text-xs mb-3">
            Nos activités
          </p>
          <h2 className="text-foret-dark mb-4">Des disciplines pour tous</h2>
          <p className="max-w-2xl mx-auto text-charbon/75">
            Que vous soyez débutant ou cavalier confirmé, nous vous proposons
            une discipline adaptée à votre envie et votre niveau.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {disciplines.map((d) => (
            <Link
              key={d.slug}
              href={`/disciplines#${d.slug}`}
              className="group flex flex-col items-center text-center p-6 md:p-8 rounded-lg bg-white border border-sable/40 hover:border-foret hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{d.icon}</div>
              <h3 className="font-serif text-xl md:text-2xl text-foret-dark">
                {d.name}
              </h3>
              <span className="mt-3 text-xs uppercase tracking-wide text-bordeaux opacity-0 group-hover:opacity-100 transition">
                En savoir plus →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
