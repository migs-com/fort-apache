# 📋 Notion CMS — Spécifications des databases

> Ce document décrit les databases Notion nécessaires pour alimenter
> le site Fort Apache via les chaînes d'automatisation Mig's.
>
> **Principe** : chaque database = un type de contenu modifiable sans toucher
> au code. Le site lit ces databases via l'API Notion et se met à jour
> automatiquement (ISR — rafraîchissement toutes les heures).

---

## 🗂️ Vue d'ensemble des databases

| # | Database | Usage | Priorité |
|---|---|---|---|
| 1 | **Blog** | Articles, actualités, récits | 🔴 P0 — indispensable |
| 2 | **Social Wall** | Posts Instagram / Facebook affichés sur la home | 🟠 P1 — important |
| 3 | **Galerie** | Photos du club (page Galerie) | 🟠 P1 — important |
| 4 | **Cavalerie** | Fiches des chevaux et poneys (page Le Club) | 🟡 P2 — nice to have |
| 5 | **Textes éditables** | Contenus des pages modifiables par la cliente | 🟡 P2 — nice to have |
| 6 | **Tarifs** | Grille tarifaire (page Tarifs) | 🟡 P2 — nice to have |
| 7 | **Disciplines** | Liste des activités proposées | 🟢 P3 — optionnel |
| 8 | **Témoignages** | Avis et citations (homepage) | 🟢 P3 — optionnel |

---

## 1. 📝 Database : Blog

> Alimente `/actualites` (renommé "Blog" dans la nav)

### Propriétés

| Nom de la propriété | Type Notion | Obligatoire | Description | Exemple |
|---|---|---|---|---|
| **Title** | Title | ✅ | Titre de l'article | `Stage de Pâques 2026 : retour en images` |
| **Slug** | Rich text | Recommandé | URL de l'article (auto-généré si vide) | `stage-paques-2026` |
| **Excerpt** | Rich text | Non | Résumé court affiché dans la liste | `Retour sur une semaine d'aventures...` |
| **Date** | Date | Recommandé | Date de publication | `2026-04-15` |
| **Published** | Checkbox | Recommandé | ✅ = visible, ☐ = brouillon | ✅ |
| **Catégorie** | Select | Non | Pour filtrage futur | `Stage`, `Vie du club`, `Portrait` |
| **Auteur** | Rich text | Non | Nom de l'auteur | `Pénélope` |

### Couverture
Utiliser la **couverture de page Notion** (image en haut de la page) comme image de l'article.

### Contenu
Le corps de l'article est le **contenu de la page Notion** : titres, paragraphes, images, listes, citations — tout est supporté via `notion-to-md`.

### Remplissage par les chaînes
```
Champ "Title"     ← Chaîne : titre de l'article
Champ "Slug"      ← Chaîne : slugify(title)
Champ "Excerpt"   ← Chaîne : résumé généré par IA (ou extrait des 2 premières phrases)
Champ "Date"      ← Chaîne : date du jour
Champ "Published" ← Chaîne : true (ou false pour revue avant publication)
Couverture        ← Chaîne : URL Cloudinary de l'image principale
Contenu page      ← Chaîne : texte + images via l'API Notion blocks
```

---

## 2. 📱 Database : Social Wall

> Alimente la section "Suivez la vie du club" sur la homepage

### Propriétés

| Nom de la propriété | Type Notion | Obligatoire | Description | Exemple |
|---|---|---|---|---|
| **Title** | Title | ✅ | Caption du post (tronqué sur le site) | `Belle journée au club ! 🐴☀️` |
| **Image** | URL | ✅ | URL de l'image (Cloudinary, Insta, etc.) | `https://res.cloudinary.com/...` |
| **Source** | Select | ✅ | Réseau social d'origine | `instagram` ou `facebook` |
| **Link** | URL | Non | Lien vers le post original | `https://instagram.com/p/xxx` |
| **Date** | Date | Recommandé | Date du post | `2026-04-13` |
| **Visible** | Checkbox | Recommandé | ✅ = affiché, ☐ = masqué | ✅ |
| **Ordre** | Number | Non | Ordre d'affichage (1 = premier) | `1` |

### Remplissage par les chaînes
```
Déclencheur : nouveau post Instagram ou Facebook (via webhook / Make)
    → Champ "Title"  ← caption du post
    → Champ "Image"  ← URL de l'image du post (ou upload Cloudinary)
    → Champ "Source" ← "instagram" ou "facebook"
    → Champ "Link"   ← URL du post original
    → Champ "Date"   ← date du post
    → Champ "Visible" ← true
```

### Affichage
Le site affiche les 6 posts les plus récents avec `Visible = ✅`, triés par `Date` descendante.

---

## 3. 🖼️ Database : Galerie

> Alimente la page `/galerie`

### Propriétés

| Nom de la propriété | Type Notion | Obligatoire | Description | Exemple |
|---|---|---|---|---|
| **Title** | Title | ✅ | Description alt de l'image (SEO) | `Balade à poney au Col de Vence` |
| **Image** | URL | ✅ | URL de l'image (Cloudinary) | `https://res.cloudinary.com/...` |
| **Catégorie** | Select | Recommandé | Filtre sur la galerie | `Chevaux`, `Cours`, `Randonnées`, `Stages` |
| **Visible** | Checkbox | Recommandé | ✅ = affiché | ✅ |
| **Ordre** | Number | Non | Position dans la grille | `1` |

### Remplissage par les chaînes
```
Déclencheur : nouvelle image dans le dossier Drive "Galerie Fort Apache"
    → Upload vers Cloudinary (redimensionnement auto)
    → Créer entrée Notion : Title = nom du fichier, Image = URL Cloudinary
    → Catégorie = nom du sous-dossier Drive (ou "Album" par défaut)
    → Visible = true
```

---

## 4. 🐴 Database : Cavalerie

> Alimente la section "Nos compagnons" sur `/le-club`

### Propriétés

| Nom de la propriété | Type Notion | Obligatoire | Description | Exemple |
|---|---|---|---|---|
| **Title** | Title | ✅ | Nom du cheval/poney | `Criquet` |
| **Tag** | Rich text | ✅ | Trait de caractère ou spécialité | `Le poney le plus gentil du monde` |
| **Photo** | URL | ✅ | URL de la photo (Cloudinary) | `https://res.cloudinary.com/...` |
| **Ordre** | Number | Non | Position dans la grille | `1` |
| **Visible** | Checkbox | Recommandé | ✅ = affiché | ✅ |

### Pré-rempli avec la cavalerie actuelle
| Nom | Tag |
|---|---|
| Criquet | Le poney le plus gentil du monde |
| Flamenco | Tendre et patient |
| Lounka | Adoré des enfants |
| Rasta | Spécialiste de l'obstacle |
| Polux | Maître de l'attelage |
| Paquerette | Pour les petites filles |
| Calypso | Gentille avec du caractère |
| Lolita | Gentille avec du caractère |
| Mouche | Gentille avec du caractère |
| Coccinelle | Apprentie « M.P.M » |
| Grillon | Apprenti « M.P.M » |
| Ulysse | Champion de la sieste |

---

## 5. ✏️ Database : Textes éditables

> Permet de modifier certains textes du site sans toucher au code

### Propriétés

| Nom de la propriété | Type Notion | Obligatoire | Description | Exemple |
|---|---|---|---|---|
| **Title** | Title | ✅ | Identifiant du bloc de texte | `home.welcome` |
| **Page** | Select | ✅ | Page concernée | `Accueil`, `Le Club`, `Contact` |
| **Section** | Rich text | ✅ | Nom de la section | `Présentation` |
| **Contenu** | Rich text | ✅ | Le texte à afficher | `Vous allez vivre des moments...` |
| **Actif** | Checkbox | ✅ | ✅ = utilisé par le site | ✅ |

### Blocs pré-définis

| Identifiant (Title) | Page | Section | Usage |
|---|---|---|---|
| `home.welcome` | Accueil | Présentation | Texte d'intro sous le hero |
| `home.cta` | Accueil | Bandeau CTA | Titre + sous-titre du bandeau contact |
| `club.bio` | Le Club | Pénélope | Biographie de la fondatrice |
| `club.histoire` | Le Club | Notre histoire | Paragraphe d'histoire du club |
| `club.environnement` | Le Club | Environnement | Description du cadre naturel |
| `contact.intro` | Contact | En-tête | Texte d'introduction du formulaire |

---

## 6. 💰 Database : Tarifs

> Alimente la page `/tarifs`

### Propriétés

| Nom de la propriété | Type Notion | Obligatoire | Description | Exemple |
|---|---|---|---|---|
| **Title** | Title | ✅ | Nom de la formule | `École poney (2-6 ans)` |
| **Fréquence** | Rich text | ✅ | Rythme | `1 séance / semaine` |
| **Tarif mensuel** | Rich text | ✅ | Prix mensuel | `80 €` |
| **Tarif annuel** | Rich text | ✅ | Prix annuel | `720 €` |
| **Ordre** | Number | Recommandé | Position dans le tableau | `1` |
| **Visible** | Checkbox | Recommandé | ✅ = affiché | ✅ |

---

## 7. 🎯 Database : Disciplines

> Alimente la page `/disciplines`

### Propriétés

| Nom de la propriété | Type Notion | Obligatoire | Description | Exemple |
|---|---|---|---|---|
| **Title** | Title | ✅ | Nom de la discipline | `Balades à poney` |
| **Slug** | Rich text | ✅ | Ancre URL | `balades-poney` |
| **Description** | Rich text | ✅ | Texte de la carte | `L'incontournable de Fort Apache...` |
| **Image** | URL | ✅ | Photo (Cloudinary) | `https://res.cloudinary.com/...` |
| **Featured** | Checkbox | Non | ✅ = carte XL en haut | ✅ |
| **Ordre** | Number | Recommandé | Position | `1` |
| **Visible** | Checkbox | Recommandé | ✅ = affiché | ✅ |

---

## 8. 💬 Database : Témoignages

> Alimente la section "Témoignages" sur la homepage

### Propriétés

| Nom de la propriété | Type Notion | Obligatoire | Description | Exemple |
|---|---|---|---|---|
| **Title** | Title | ✅ | Nom ou pseudo | `Une élève` |
| **Citation** | Rich text | ✅ | Le témoignage | `On apprend vraiment à tout gérer...` |
| **Niveau** | Rich text | Non | Contexte | `Cavalière Galop 3` |
| **Visible** | Checkbox | Recommandé | ✅ = affiché | ✅ |
| **Ordre** | Number | Non | Position | `1` |

---

## 🔗 IDs des databases à configurer dans Vercel

Une fois les databases créées dans Notion, ajouter ces variables
d'environnement dans Vercel (Settings → Environment Variables) :

```
NOTION_DATABASE_ID           = <ID database Blog>
NOTION_SOCIAL_WALL_DB_ID     = <ID database Social Wall>
NOTION_GALERIE_DB_ID         = <ID database Galerie>
NOTION_CAVALERIE_DB_ID       = <ID database Cavalerie>
NOTION_TEXTES_DB_ID          = <ID database Textes éditables>
NOTION_TARIFS_DB_ID          = <ID database Tarifs>
NOTION_DISCIPLINES_DB_ID     = <ID database Disciplines>
NOTION_TEMOIGNAGES_DB_ID     = <ID database Témoignages>
```

Toutes les databases doivent être partagées avec l'intégration Notion
(secret `NOTION_API_KEY`).

---

## 🔄 Flux d'automatisation suggéré (Make / Zapier / n8n)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  📸 GOOGLE DRIVE (dossier partagé avec Pénélope)           │
│                                                             │
│  Sous-dossiers :                                            │
│  ├── /Blog           ← photos pour les articles             │
│  ├── /Galerie        ← photos pour la galerie du site       │
│  ├── /Cavalerie      ← portraits des chevaux/poneys         │
│  └── /Réseaux        ← visuels pour Insta/FB                │
│                                                             │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        │ Chaîne Make/Zapier/n8n
                        │ "Quand un nouveau fichier apparaît"
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ☁️ CLOUDINARY (CDN images gratuit jusqu'à 25 Go)          │
│                                                             │
│  Optimisation automatique (WebP, redimensionnement)         │
│  URL pérenne pour chaque image                              │
│                                                             │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        │ La chaîne récupère l'URL Cloudinary
                        │ et crée/met à jour l'entrée Notion
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  📋 NOTION (databases ci-dessus)                           │
│                                                             │
│  La chaîne écrit dans :                                     │
│  • Social Wall  (nouveau post Insta/FB détecté)            │
│  • Galerie      (nouvelle photo dans Drive/Galerie)        │
│  • Cavalerie    (nouveau portrait dans Drive/Cavalerie)    │
│  • Blog         (article + images)                          │
│                                                             │
│  Pénélope écrit directement dans :                          │
│  • Blog          (rédaction d'articles)                     │
│  • Textes        (modification des textes du site)          │
│  • Tarifs        (mise à jour des prix)                     │
│                                                             │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        │ Le site Next.js lit les databases
                        │ via l'API Notion (ISR, rafraîchi toutes
                        │ les heures automatiquement)
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  🌐 SITE FORT APACHE (Vercel)                              │
│                                                             │
│  Le contenu apparaît sur le site dans l'heure.              │
│  Pas de dev nécessaire pour les mises à jour courantes.     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```
