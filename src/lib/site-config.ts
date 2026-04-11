export const siteConfig = {
  name: 'Fort Apache',
  fullName: 'Fort Apache — Club Équestre',
  description:
    "Club équestre Fort Apache : cours d'équitation, stages, randonnées et compétitions pour tous niveaux dans un cadre exceptionnel.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fortapache.fr',
  ogImage: '/images/og-default.jpg',
  contact: {
    email: 'contact@fortapache.fr',
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
    facebook: 'https://facebook.com/fortapache',
    instagram: 'https://instagram.com/fortapache',
  },
  openingHours: [
    { day: 'Lundi', hours: 'Fermé' },
    { day: 'Mardi — Vendredi', hours: '9h — 19h' },
    { day: 'Samedi', hours: '9h — 18h' },
    { day: 'Dimanche', hours: '10h — 17h' },
  ],
} as const;

export const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/le-club', label: 'Le Club' },
  { href: '/disciplines', label: 'Disciplines' },
  { href: '/cours-et-stages', label: 'Cours & Stages' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/actualites', label: 'Actualités' },
] as const;
