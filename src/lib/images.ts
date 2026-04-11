/**
 * Registre centralisé des photos du site fortapache.ffe.com.
 *
 * Ces URLs sont servies via next/image : Vercel va télécharger les images
 * depuis fortapache.ffe.com au moment du build / à la première requête,
 * les optimiser (WebP/AVIF, tailles adaptatives) et les servir via son CDN.
 *
 * Pour remplacer une photo par une version définitive, il suffit de
 * modifier l'URL ici — elle sera mise à jour partout sur le site.
 */

const BASE = 'https://fortapache.ffe.com';

export const ffeImages = {
  // Photos "Top" — probablement les plus belles mises en avant du template
  top3: `${BASE}/Image/gabriel_baby/Top-3.jpg`,
  top7: `${BASE}/Image/gabriel_baby/Top-7.jpg`,

  // Photos d'article (actualités)
  article1: `${BASE}/img/article/39934.jpg`,
  article2: `${BASE}/img/article/39971.jpg`,

  // Photos de l'album club (galerie)
  album: [
    `${BASE}/albums/13494/0614005/12098/1325270775.jpg`,
    `${BASE}/albums/13494/0614005/12098/1325272198.jpg`,
    `${BASE}/albums/13494/0614005/12098/1325277157.jpg`,
    `${BASE}/albums/13494/0614005/12098/1325524386.jpg`,
    `${BASE}/albums/13494/0614005/12098/1325531748.jpg`,
    `${BASE}/albums/13494/0614005/12098/1325535038.jpg`,
    `${BASE}/albums/13494/0614005/12098/1325535489.jpg`,
    `${BASE}/albums/13494/0614005/12098/1325535603.jpg`,
    `${BASE}/albums/13494/0614005/12098/1325536841.jpg`,
    `${BASE}/albums/13494/0614005/12098/1325537041.jpg`,
    `${BASE}/albums/13494/0614005/12098/1325537236.jpg`,
    `${BASE}/albums/13494/0614005/12098/1326486158.jpg`,
    `${BASE}/albums/13494/0614005/12098/1330293967.jpg`,
  ],
} as const;
