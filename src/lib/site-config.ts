export const siteConfig = {
  name: 'Fort Apache',
  fullName: 'Fort Apache — Club Équestre',
  description:
    "Club équestre Fort Apache à Vence (06140), quartier Col de Vence : balades à poney, cours d'équitation, stages, randonnées et compétitions. Ouvert tous les jours de 10h à 17h.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fort-apache-equitation-vence.fr',
  ogImage: '/images/og-default.jpg',
  contact: {
    email: 'contact@fort-apache-equitation-vence.fr',
    phone: '+33493589143',
    phoneDisplay: '04 93 58 91 43',
    address: {
      street: '75 route de Saint-Barnabé, quartier Col de Vence',
      locality: 'Vence',
      region: 'Alpes-Maritimes',
      postalCode: '06140',
      country: 'FR',
    },
    geo: {
      latitude: '43.7939',
      longitude: '7.0547',
    },
  },
  socials: {
    facebook: 'https://www.facebook.com/fortapache06' as string | null,
    instagram: 'https://www.instagram.com/fortapache06' as string | null,
  },
  openingHours: [
    { day: 'Tous les jours', hours: '10h — 17h' },
  ],
} as const;

export const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/le-club', label: 'Le Club' },
  { href: '/activites', label: 'Activités' },
  { href: '/cours', label: 'Cours' },
  { href: '/stages', label: 'Stages' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/actualites', label: 'Blog' },
] as const;
