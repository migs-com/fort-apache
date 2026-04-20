# 🐴 Fort Apache — Fiche projet site web

> **Client** : Fort Apache — Club Équestre
> **Contact** : Pénélope · 04 93 58 91 43
> **Adresse** : Carrefour Saint-Barnabé, Quartier Col de Vence, 06140 Coursegoules
> **Agence** : Mig's Communication
> **Statut** : ✅ Site en ligne — en cours de finalisation

---

## 🌐 Liens utiles

| Élément | Lien |
|---|---|
| **Site en ligne** | `https://fort-apache.vercel.app` *(remplacer par fort-apache-equitation-vence.fr une fois le domaine configuré)* |
| **Code source (GitHub)** | `github.com/amignari-stack/fort-apache` · Branche : `claude/fort-apache-site-p08OD` |
| **Dashboard Vercel** | `vercel.com` → projet `fort-apache` |
| **Notion CMS (blog)** | *À configurer — voir section "Blog" ci-dessous* |
| **Ancien site FFE** | `fortapache.ffe.com` *(à supprimer/rediriger une fois le nouveau site validé)* |

---

## 🏗️ Architecture — Comment ça fonctionne

```
Le visiteur tape : www.fort-apache-equitation-vence.fr
        │
        ▼
   DNS (chez o2switch ou registrar)
   "fort-apache-equitation-vence.fr pointe vers Vercel"
        │
        ▼
   ☁️ VERCEL (hébergement cloud pro)
   CDN mondial · HTTPS automatique · Déploiement continu
        │
        ├── Le site Next.js (toutes les pages)
        │
        ├── Notion (articles de blog — Pénélope écrit ici)
        │
        ├── Resend (emails du formulaire de contact)
        │
        └── Plausible (analytics — optionnel)
```

### En résumé
- **Le domaine** `fort-apache-equitation-vence.fr` est acheté chez o2switch (ou autre registrar)
- **Le DNS** pointe vers Vercel (2 lignes à configurer une seule fois dans cPanel)
- **Le site** est hébergé sur Vercel (cloud professionnel, CDN mondial, ~18€/mois en Pro)
- **Le code** est stocké sur GitHub (coffre-fort du projet, accessible à tout développeur)
- **Le blog** est alimenté via Notion (interface simple, comme Word)
- **Le formulaire de contact** envoie les emails via Resend (gratuit jusqu'à 3000 emails/mois)

---

## 👥 Qui fait quoi

### 👩 Pénélope (la cliente) — Ce qu'elle peut faire seule

| Action | Comment | Difficulté |
|---|---|---|
| ✅ Écrire un article de blog | Créer une page dans la database Notion | Facile — comme écrire dans Word |
| ✅ Publier / dépublier un article | Cocher / décocher "Publié" dans Notion | 1 clic |
| ✅ Ajouter une photo à un article | Glisser-déposer l'image dans Notion | Facile |
| ✅ Poster sur Instagram / Facebook | Depuis l'appli mobile | Normal |

### 👨‍💼 L'agence (Mig's Communication) — Ton rôle

| Action | Comment |
|---|---|
| Gérer le compte Vercel | Dashboard `vercel.com` |
| Gérer le compte GitHub | Dashboard `github.com` |
| Coordonner les demandes de modifs | Transmettre au dev ou ouvrir une session Claude Code |
| Facturer l'hébergement | Forfait mensuel au client |
| Surveiller les analytics | Dashboard Plausible (si activé) |

### 👩‍💻 Le développeur (prestataire) — Modifications techniques

| Action | Temps estimé |
|---|---|
| Modifier un texte existant | ~5 minutes |
| Changer une photo | ~5 minutes |
| Modifier les tarifs | ~10 minutes |
| Ajouter une nouvelle page | ~30 minutes |
| Ajouter une discipline | ~15 minutes |
| Intervention urgente (bug) | ~15-30 minutes |

**Processus de modification :**
1. Le dev clone le repo depuis GitHub
2. Il fait les modifications
3. Il "push" (= envoie) sur GitHub
4. Vercel reconstruit le site automatiquement en 1-2 minutes
5. C'est en ligne. Pas de FTP, pas de cPanel, pas de manipulation serveur.

**N'importe quel développeur Next.js / React peut reprendre le projet.** Le code est propre, documenté, et le README explique tout.

---

## 💰 Coûts mensuels

| Service | Coût réel | Qui paie | Notes |
|---|---|---|---|
| **Vercel Pro** | ~18 €/mois | Agence | Hébergement cloud + CDN + HTTPS |
| **Domaine fort-apache-equitation-vence.fr** | ~12 €/an (~1 €/mois) | Client ou agence | Chez o2switch, OVH, Gandi, etc. |
| **Notion** | Gratuit | — | Plan gratuit suffisant pour le blog |
| **Resend** | Gratuit | — | 3 000 emails/mois (largement suffisant) |
| **GitHub** | Gratuit | — | Repo privé gratuit |
| **Plausible** | Gratuit ou 9 €/mois | Optionnel | Analytics sans cookies |
| **TOTAL coût réel** | **~19 €/mois** | | |
| **Facturation client suggérée** | **40 – 60 €/mois** | Client | Hébergement + maintenance légère |

---

## 📝 Guide : Comment publier un article de blog

### 1. Créer la database Notion (une seule fois)

1. Ouvrir Notion → créer une nouvelle page "Fort Apache — Blog"
2. Ajouter une **Database** (type "Table")
3. Créer ces colonnes :

| Colonne | Type | Obligatoire |
|---|---|---|
| **Title** | Title (par défaut) | Oui |
| **Slug** | Text | Recommandé (ex: `stage-ete-2026`) |
| **Excerpt** | Text | Non (extrait affiché sur la liste) |
| **Date** | Date | Non (date de publication) |
| **Published** | Checkbox | Non (décoché = brouillon) |

4. Ajouter une **couverture** (image en haut de la page Notion) = image de l'article

### 2. Connecter Notion au site (une seule fois)

1. Aller sur `notion.so/my-integrations` → créer une intégration "Fort Apache Blog"
2. Copier le **secret** (commence par `secret_...`)
3. Dans Notion, partager la database avec l'intégration (bouton "Share" → "Invite")
4. Copier l'**ID de la database** (dans l'URL Notion, entre le dernier `/` et le `?`)
5. Ajouter ces 2 variables dans Vercel :
   - `NOTION_API_KEY` = le secret
   - `NOTION_DATABASE_ID` = l'ID de la database
6. Redéployer le site (Vercel → Deployments → Redeploy)

### 3. Publier un article (au quotidien)

1. Ouvrir la database Notion
2. Cliquer "+ New"
3. Remplir le titre, l'extrait, la date
4. Écrire le contenu (comme dans Word : titres, paragraphes, images, listes…)
5. Ajouter une image de couverture
6. Cocher ✅ **Published**
7. **C'est tout.** L'article apparaît sur le site dans l'heure qui suit (rafraîchissement automatique)

---

## 📱 Réseaux sociaux

| Réseau | État | Lien sur le site |
|---|---|---|
| **Instagram** | À créer → `@fortapache06` (suggestion) | Footer + Social Wall |
| **Facebook** | À créer → `Fort Apache - Club Équestre` | Footer + Social Wall |

### Social Wall (section "Suivez la vie du club" sur la homepage)

Le Social Wall affiche actuellement des posts placeholder. Pour le mettre à jour :

**Option simple (maintenant)** : le dev met à jour manuellement le fichier `src/lib/social-wall.ts` avec les derniers posts Insta/FB.

**Option automatique (plus tard)** : installer un widget type **Smash Balloon** ou **Elfsight** qui se synchronise automatiquement avec les comptes sociaux.

---

## 🔧 Informations techniques (pour le dev)

### Stack

| Technologie | Usage |
|---|---|
| Next.js 14 (App Router) | Framework principal |
| TypeScript | Langage |
| Tailwind CSS v3 | Styles |
| React Hook Form + Zod | Formulaires + validation |
| Notion API + notion-to-md | Blog / CMS |
| Resend | Envoi d'emails |
| yet-another-react-lightbox | Galerie |
| next/font/google | Fonts (Cormorant Garamond + DM Sans) |

### Structure du code

```
src/
├── app/                    # Pages du site
│   ├── page.tsx            # Accueil
│   ├── le-club/            # Le Club
│   ├── disciplines/        # Disciplines
│   ├── cours-et-stages/    # Cours & Stages
│   ├── tarifs/             # Tarifs
│   ├── galerie/            # Galerie
│   ├── actualites/         # Blog (liste + article)
│   ├── contact/            # Contact
│   └── api/contact/        # API envoi email
├── components/             # Composants réutilisables
│   ├── home/               # Sections de la homepage
│   ├── layout/             # Header + Footer
│   ├── ui/                 # Boutons, cartes, formulaire
│   └── seo/                # Schema.org JSON-LD
├── lib/                    # Logique métier
│   ├── site-config.ts      # Config globale (adresse, tel, horaires)
│   ├── images.ts           # Registre des photos
│   ├── notion.ts           # Client Notion (blog)
│   ├── resend.ts           # Envoi email
│   ├── contact-schema.ts   # Validation formulaire
│   └── social-wall.ts      # Posts du Social Wall
└── styles/
    └── globals.css          # Styles Tailwind
```

### Variables d'environnement (Vercel → Settings → Environment Variables)

| Variable | Valeur | Requis |
|---|---|---|
| `NOTION_API_KEY` | Secret d'intégration Notion | Pour le blog |
| `NOTION_DATABASE_ID` | ID de la database Notion | Pour le blog |
| `RESEND_API_KEY` | Clé API Resend | Pour le formulaire contact |
| `CONTACT_EMAIL` | Email qui reçoit les demandes | Pour le formulaire contact |
| `NEXT_PUBLIC_SITE_URL` | `https://fort-apache-equitation-vence.fr` | SEO |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | `fort-apache-equitation-vence.fr` | Analytics (optionnel) |

### Commandes utiles (pour le dev)

```bash
git clone <repo-url>
cd fort-apache
npm install
npm run dev          # Lancer en local → localhost:3000
npm run build        # Vérifier le build
git push             # Déployer (Vercel redéploie automatiquement)
```

---

## 🚀 Checklist avant mise en production finale

- [ ] Acheter le domaine `fort-apache-equitation-vence.fr`
- [ ] Configurer le DNS pour pointer vers Vercel
- [ ] Passer Vercel en plan Pro (20$/mois)
- [ ] Créer les comptes Instagram et Facebook
- [ ] Remplacer les URLs socials dans `src/lib/site-config.ts`
- [ ] Configurer la database Notion pour le blog
- [ ] Configurer Resend pour les emails de contact
- [ ] Valider tous les contenus avec Pénélope
- [ ] Remplacer les photos placeholder par les photos définitives
- [ ] Demander à la FFE de rediriger/supprimer l'ancien site
- [ ] Mettre à jour Google My Business avec la nouvelle URL
- [ ] Tester le formulaire de contact de bout en bout

---

## 🔄 Garantie de pérennité

**Si l'agence change de prestataire dev :**
→ Le code est sur GitHub, documenté, en Next.js standard. N'importe quel dev React/Next.js peut reprendre.

**Si l'agence veut quitter Vercel :**
→ Le code est portable. Migration possible en 30 min vers Netlify, Cloudflare Pages, ou export statique vers o2switch.

**Si l'agence veut passer à WordPress :**
→ Le site Next.js actuel sert de maquette pixel-perfect. Refonte WordPress/Divi = 2-3 jours.

**Si Vercel ferme demain :**
→ Le code est sur GitHub. Redéploiement sur un autre hébergeur en quelques heures.

**Aucun vendor lock-in. Le code appartient à l'agence.**
