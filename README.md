# Fort Apache — Site vitrine

Site Next.js 14 (App Router) pour le club équestre Fort Apache.
Réalisé par **Mig's Communication**.

## Stack

- **Framework** : Next.js 14 (App Router, TypeScript, React 18)
- **Styling** : Tailwind CSS v3 + tokens personnalisés
- **Fonts** : `next/font/google` — Cormorant Garamond + DM Sans
- **CMS** : Notion API (`@notionhq/client` + `notion-to-md`) pour les actualités
- **Formulaires** : React Hook Form + Zod (validation client & serveur)
- **Email** : Resend (endpoint `/api/contact`)
- **Analytics** : Plausible (injection conditionnelle)
- **Images** : `next/image` (WebP/AVIF automatique)
- **Lightbox** : `yet-another-react-lightbox` (chargé dynamiquement)
- **SEO** : Metadata API native Next.js + JSON-LD `LocalBusiness`
- **Déploiement** : Vercel

## Démarrage

### Prérequis

- Node.js 18.17+ (recommandé : 20+)
- npm 10+

### Installation

```bash
npm install
cp .env.local.example .env.local
# Éditer .env.local avec vos clés
npm run dev
```

Le site tourne sur [http://localhost:3000](http://localhost:3000).

> **Build dans un environnement sans accès à Google Fonts** (CI restreinte,
> sandbox) : définir `NEXT_FONT_GOOGLE_MOCKED_RESPONSES=./scripts/next-font-mocks.js`
> avant de lancer `next build`. Ce fichier fournit des réponses simulées pour
> le loader `next/font/google`. **À ne pas utiliser sur Vercel** : l'environnement
> de build Vercel peut atteindre Google Fonts directement.

### Scripts

| Commande        | Description                                   |
|-----------------|-----------------------------------------------|
| `npm run dev`   | Lance le serveur de développement             |
| `npm run build` | Build de production                           |
| `npm run start` | Sert le build de production                   |
| `npm run lint`  | Lint ESLint (`next/core-web-vitals`)          |

## Variables d'environnement

Toutes les variables sont listées dans `.env.local.example`. Copier ce fichier
vers `.env.local` pour le développement, et configurer ces mêmes variables
dans le dashboard Vercel pour la production.

```bash
# Notion CMS (actualités)
NOTION_API_KEY=           # Secret d'intégration Notion (https://www.notion.so/my-integrations)
NOTION_DATABASE_ID=       # ID de la database des articles

# Resend (formulaire de contact)
RESEND_API_KEY=           # Clé API Resend (https://resend.com)
CONTACT_EMAIL=            # Email qui reçoit les demandes (ex: contact@fortapache.fr)
CONTACT_FROM_EMAIL=       # From authentifié (ex: Fort Apache <noreply@fortapache.fr>)

# Plausible Analytics (optionnel)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=fortapache.fr

# URL canonique du site
NEXT_PUBLIC_SITE_URL=https://fortapache.fr
```

> **Mode dev sans Resend** : si `RESEND_API_KEY` n'est pas défini, le formulaire
> log les envois dans la console et répond `ok` — pratique pour tester le flow
> côté front sans compte Resend.

## Intégration Notion (actualités)

1. **Créer une intégration** sur https://www.notion.so/my-integrations
   et copier le secret dans `NOTION_API_KEY`.

2. **Créer une database** Notion avec ces propriétés (les noms entre
   parenthèses sont des alias acceptés par le code) :

   | Propriété         | Type         | Obligatoire |
   |-------------------|--------------|-------------|
   | `Title` / `Name`  | Title        | Oui         |
   | `Slug`            | Rich text    | Recommandé  |
   | `Excerpt`         | Rich text    | Non         |
   | `Date`            | Date         | Non         |
   | `Published`       | Checkbox     | Non         |
   | Cover (page)      | Image cover  | Non         |

   - Si `Slug` est vide, il est généré automatiquement depuis le titre.
   - Si `Published` est décoché, l'article est masqué sur le site.

3. **Partager la database** avec votre intégration (bouton `Share` →
   `Invite` → sélectionner l'intégration).

4. Copier l'ID de la database (dans l'URL Notion, entre le dernier `/`
   et le `?`) dans `NOTION_DATABASE_ID`.

Les articles sont rendus via `notion-to-md` puis passés dans un renderer
markdown minimal. La page liste utilise ISR avec `revalidate: 3600`
(rafraîchissement toutes les heures).

## Déploiement Vercel

1. Pousser le repo sur GitHub.
2. Importer le projet sur [vercel.com](https://vercel.com).
3. Renseigner les variables d'environnement (voir ci-dessus).
4. Vercel détecte automatiquement Next.js — aucune configuration requise.
5. Le fichier `vercel.json` ajoute les headers de sécurité.

## Structure

```
src/
├── app/                    # Routes App Router (layout, pages, API)
│   ├── api/contact/        # Endpoint Resend
│   ├── actualites/         # Liste + article [slug]
│   └── ...                 # Pages publiques
├── components/
│   ├── layout/             # Header (sticky + CTA permanent), Footer
│   ├── home/               # Sections de l'accueil
│   ├── ui/                 # Button, Card, ContactForm, PageHeader
│   ├── galerie/            # Gallery client (lightbox)
│   └── seo/                # JSON-LD LocalBusiness
├── lib/                    # notion, resend, contact-schema, markdown, site-config
└── styles/                 # globals.css
```

## SEO & performance

- `metadata` par page (title, description, OpenGraph)
- JSON-LD `LocalBusiness` dans le layout racine
- `sitemap.xml` et `robots.txt` générés automatiquement
- Images en `next/image` avec `sizes` adaptatif (WebP/AVIF)
- Fonts en `display: swap` + variables CSS
- Lightbox chargé en `next/dynamic` pour alléger le JS initial
- Objectif Lighthouse mobile > 90

## Points d'attention avant mise en production

- [ ] Remplacer tous les contenus placeholder (`siteConfig`, textes pages)
- [ ] Remplacer les images Unsplash par les vraies photos du club
- [ ] Fournir un fichier `/public/images/og-default.jpg` (1200×630)
- [ ] Renseigner l'adresse et les coordonnées GPS réelles dans `site-config.ts`
- [ ] Vérifier que le domaine `From` de Resend est validé (DNS)
- [ ] Connecter la database Notion des actualités
- [ ] Configurer le domaine `fortapache.fr` sur Vercel
