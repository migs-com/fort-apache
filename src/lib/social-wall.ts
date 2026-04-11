import { ffeImages } from '@/lib/images';

/**
 * Social Wall — posts à afficher sur la home dans la section <SocialWall>.
 *
 * Sources possibles, du plus simple au plus automatisé :
 *
 * 1) MANUEL (état actuel) — éditer ce tableau à la main quand vous publiez
 *    sur Instagram ou Facebook. Simple, gratuit, vous gardez le contrôle.
 *
 * 2) NOTION — créer une database "Social Wall" sur Notion (fields: image,
 *    caption, source, date, link) et lire via @notionhq/client (cf.
 *    src/lib/notion.ts). Ainsi Pénélope publie depuis Notion, le site se
 *    met à jour seul.
 *
 * 3) WIDGET TIERS — Elfsight, SnapWidget, Curator.io, Juicer.io etc.
 *    Solution plug-and-play (souvent payante au-delà d'un quota), à
 *    embedder via iframe / script. Avantage : sync automatique avec
 *    Instagram & Facebook.
 *
 * 4) API OFFICIELLE — Instagram Graph API + Meta Graph API. Demande un
 *    Business Account, une app Meta, un token long-lived. Le plus
 *    technique mais aussi le plus contrôlé.
 *
 * Pour passer à 2/3/4, il suffit de remplacer le contenu de ce fichier
 * (et éventuellement de transformer SocialWall en composant async).
 */

export type SocialPost = {
  id: string;
  source: 'instagram' | 'facebook';
  image: string;
  caption: string;
  link?: string;
  date?: string;
};

export const socialWallPosts: SocialPost[] = [
  {
    id: 'placeholder-1',
    source: 'instagram',
    image: ffeImages.album[0],
    caption:
      'Belle journée au club avec nos cavaliers ! Le soleil est de la partie 🌞🐴 #FortApache #ColDeVence',
    link: 'https://www.instagram.com/fortapache06',
  },
  {
    id: 'placeholder-2',
    source: 'instagram',
    image: ffeImages.album[1],
    caption:
      "Criquet, le poney le plus gentil du monde, en pleine séance. Il a la patience de tous les enfants 💛",
    link: 'https://www.instagram.com/fortapache06',
  },
  {
    id: 'placeholder-3',
    source: 'facebook',
    image: ffeImages.album[2],
    caption:
      "Stage de Pâques : retour en images sur une semaine d'aventures équestres avec nos petits cavaliers !",
    link: 'https://www.facebook.com/fortapache06',
  },
  {
    id: 'placeholder-4',
    source: 'instagram',
    image: ffeImages.album[3],
    caption:
      'Vue imprenable depuis le Col de Vence, à 40 minutes de la mer. Au royaume des poneys ! 🏔️',
    link: 'https://www.instagram.com/fortapache06',
  },
  {
    id: 'placeholder-5',
    source: 'instagram',
    image: ffeImages.album[4],
    caption:
      'Préparation des poneys avant les balades. Le pansage, c\'est aussi un moment privilégié 🐎',
    link: 'https://www.instagram.com/fortapache06',
  },
  {
    id: 'placeholder-6',
    source: 'facebook',
    image: ffeImages.album[5],
    caption:
      "Promenade nocturne pour le brame du cerf : un moment magique au cœur du Parc Naturel.",
    link: 'https://www.facebook.com/fortapache06',
  },
];
