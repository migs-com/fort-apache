export const siteConfig = {
  name: 'Fort Apache',
  fullName: 'Fort Apache — Club Équestre',
  description:
    "Club équestre Fort Apache : cours d'équitation, stages, randonnées et compétitions pour tous niveaux dans un cadre exceptionnel.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fortapache.fr',
  ogImage: '/images/og-default.jpg',
  contact: {
    email: 'contact@fortapache.fr',
    phone: '+33 X XX XX XX XX',
    phoneDisplay: '0X XX XX XX XX',
    address: {
      street: 'Route des Écuries',
      locality: 'Saint-Exemple',
      region: 'Normandie',
      postalCode: '14000',
      country: 'FR',
    },
    geo: {
      latitude: '49.1829',
      longitude: '-0.3707',
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
