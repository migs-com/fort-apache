export const siteConfig = {
  name: 'Fort Apache',
  fullName: 'Fort Apache — Club Équestre',
  description:
    "Club équestre Fort Apache à Coursegoules (06140), au Col de Vence : balades à poney, cours d'équitation, stages, randonnées et compétitions. Ouvert 7j/7 de 10h à 18h.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fort-apache-equitation-vence.fr',
  ogImage: '/images/og-default.jpg',
  contact: {
    email: 'contact@fort-apache-equitation-vence.fr',
    phone: '+33493589143',
    phoneDisplay: '04 93 58 91 43',
    address: {
      street: 'Carrefour Saint-Barnabé, Quartier Col de Vence',
      locality: 'Coursegoules',
      region: "Alpes-Maritimes",
      postalCode: '06140',
      country: 'FR',
    },
    geo: {
      // Coursegoules, Col de Vence (approximatif — à affiner)
      latitude: '43.7939',
      longitude: '7.0547',
    },
  },
  socials: {
    // À remplir une fois les comptes créés.
    // Mettre `null` pour masquer un lien dans le footer.
    facebook: 'https://www.facebook.com/fortapache06' as string | null,
    instagram: 'https://www.instagram.com/fortapache06' as string | null,
  },
  openingHours: [
    { day: '7 jours / 7', hours: '10h — 18h' },
  ],
} as const;

export const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/le-club', label: 'Le Club' },
  { href: '/disciplines', label: 'Disciplines' },
  { href: '/cours-et-stages', label: 'Cours & Stages' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/actualites', label: 'Blog' },
] as const;
