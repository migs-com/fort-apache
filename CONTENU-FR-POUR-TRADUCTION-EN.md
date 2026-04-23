# Contenu FR à traduire en EN — Fort Apache

Extraction automatique du 23 avril 2026 pour version EN allégée (Stratégie A).
Ne pas éditer manuellement. Régénérer en cas de modification des pages sources.

**Branche source** : `claude/fort-apache-site-p08OD` (branche par défaut du repo).
**Note importante** : sur cette branche, la page listée « Activités » dans le brief correspond en réalité à la route `/disciplines` (fichier `src/app/disciplines/page.tsx`). Le renommage Disciplines → Activités est en attente de merge via la PR #1. Le contenu extrait ci-dessous est donc celui de la page `/disciplines` actuellement en production, à réutiliser tel quel côté traduction puisque la page changera seulement de nom et non de fond.

---

## ÉLÉMENTS COMMUNS À TOUTES LES PAGES

### Header (navigation)
*(source : src/components/layout/Header.tsx + src/lib/site-config.ts)*

- Logo / aria-label lien accueil : `Fort Apache — Club Équestre`
- Texte visible logo : `Fort Apache`
- aria-label nav desktop : `Navigation principale`
- Onglets menu (ordre) :
  - `Accueil` → `/`
  - `Le Club` → `/le-club`
  - `Disciplines` → `/disciplines` *(sera renommé « Activités » après merge PR #1)*
  - `Cours & Stages` → `/cours-et-stages`
  - `Tarifs` → `/tarifs`
  - `Galerie` → `/galerie`
  - `Blog` → `/actualites`
- CTA header (bouton primaire) : `Nous contacter`
- aria-label bouton hamburger (fermé) : `Ouvrir le menu`
- aria-label bouton hamburger (ouvert) : `Fermer le menu`
- aria-label nav mobile : `Menu mobile`
- Sélecteur de langue : *(à créer — proposition : `FR | EN`)*

---

### Footer (pied de page)
*(source : src/components/layout/Footer.tsx + src/lib/site-config.ts)*

**Bloc « À propos »**
- Titre (logo) : `Fort Apache`
- Texte de présentation : `Club équestre pour tous les niveaux. Cours, stages, balades à poney et randonnées au cœur des Alpes-Maritimes, à Coursegoules.`
- Horaires : `Ouvert 7 jours / 7 — de 10h à 18h`
- Label réseaux : `Suivez-nous`
- aria-label Facebook : `Facebook Fort Apache`
- aria-label Instagram : `Instagram Fort Apache`

**Bloc « Navigation »**
- Titre colonne : `Navigation`
- Liens (reprend `navItems` du Header) : `Accueil`, `Le Club`, `Disciplines`, `Cours & Stages`, `Tarifs`, `Galerie`, `Blog`, + `Contact`

**Bloc « Nous trouver »**
- Titre colonne : `Nous trouver`
- Rue : `Carrefour Saint-Barnabé, Quartier Col de Vence`
- Code postal + ville : `06140 Coursegoules`
- Téléphone affiché : `04 93 58 91 43`
- Email : `contact@fort-apache-equitation-vence.fr`

**Barre copyright**
- Copyright : `© [année en cours] Fort Apache — Club Équestre. Tous droits réservés.`
- Crédits : `Site réalisé par Mig's Communication`

---

### Boutons récurrents / CTA globaux

- `Nous contacter`
- `Réserver une balade`
- `Découvrir le club →`
- `Découvrir l'équipe et le club →`
- `En savoir plus →`
- `Je m'inscris`
- `Prendre rendez-vous`
- `Envoyer ma demande`
- `Envoyer un autre message`

---

### Messages système (formulaire Contact)
*(source : src/components/ui/ContactForm.tsx + src/lib/contact-schema.ts)*

- État chargement (bouton submit) : `Envoi…`
- État succès (titre) : `Merci pour votre message`
- État succès (corps) : `Nous vous répondrons dans les plus brefs délais.`
- État succès (bouton reset) : `Envoyer un autre message`
- Erreur serveur générique (fallback) : `Envoi impossible`
- Erreur inconnue (fallback) : `Une erreur est survenue`
- Mention champs obligatoires : `Les champs marqués d'un * sont obligatoires.`

**Messages de validation Zod**
- Nom trop court : `Nom trop court`
- Prénom trop court : `Prénom trop court`
- Email invalide : `Email invalide`
- Téléphone trop court : `Numéro trop court`
- Téléphone invalide (regex) : `Numéro invalide`

---

## PAGE ACCUEIL — `/`

### Metadata
*(source : src/app/page.tsx)*

- **Title** : `Fort Apache — Club Équestre — Balades à poney & équitation à Coursegoules`
- **Description** : `Club équestre à Coursegoules (06140), au Col de Vence. Balades à poney dès 2 ans, cours d'équitation, stages vacances et randonnées. Ouvert 7j/7 de 10h à 18h.`
- **Keywords globaux (layout)** : `club équestre`, `équitation`, `cours d'équitation`, `stage équitation`, `randonnée équestre`, `école poney`, `Fort Apache`

---

### Section Hero
*(source : src/components/home/Hero.tsx)*

- Alt image de fond : `Fort Apache — Club équestre`
- Eyebrow : `Club équestre — Coursegoules · Col de Vence`
- H1 : `Au royaume des poneys, <br>au cœur des Préalpes d'Azur`
- Sous-titre : `Balades à poney en famille dès 2 ans, cours d'équitation, stages vacances et randonnées. Ouvert 7 jours sur 7.`
- CTA principal : `Réserver une balade`
- CTA secondaire (lien) : `Découvrir le club →`

---

### Section Présentation (bloc italique sous Hero)
*(source : src/app/page.tsx)*

- Eyebrow : `Bienvenue à Fort Apache`
- Texte : `Vous allez vivre des moments de détente en famille, entre amis ou seul. Notre équipe disponible et compétente vous guide pas à pas vers votre objectif — promenade à poney, balade à cheval, initiation, perfectionnement — en toute sécurité.`

---

### Section « Pourquoi choisir Fort Apache »
*(source : src/components/home/WhyUs.tsx)*

- Eyebrow : `Ce qui nous distingue`
- H2 : `Pourquoi choisir Fort Apache`
- Sous-titre : `Un club d'équitation pas comme les autres — par son histoire, son équipe, et son cadre.`
- Items (4 cartes) :
  1. Titre : `30 ans d'expérience`
     Description : `Plus de trente ans à louer des poneys et accueillir des familles, dans un esprit de transmission et d'amélioration constante.`
  2. Titre : `L'école Zingaro`
     Description : `Pénélope, fondatrice, a travaillé plusieurs années avec Bartabas et son célèbre théâtre équestre Zingaro.`
  3. Titre : `Parc Naturel des Préalpes`
     Description : `Un cadre exceptionnel au Col de Vence, à 40 minutes de la mer, dans un parc naturel régional préservé.`
  4. Titre : `Ouvert 7j/7`
     Description : `Le club vous accueille tous les jours de l'année, de 10h à 18h. Cours, balades, stages : à vous de choisir.`

---

### Section « Partez en balade à poney »
*(source : src/components/home/BaladePoney.tsx)*

- Alt image : `Balade à poney au Col de Vence`
- Badge sur image : `★ Activité phare`
- Eyebrow : `Plus de 30 ans d'expérience`
- H2 : `Partez en balade à poney`
- Paragraphe 1 : `C'est <strong>l'activité préférée des familles</strong> à Fort Apache. Nous accueillons les enfants <strong>dès 2 ans</strong> pour partir en balade dans une nature sauvage, sur des parcours balisés au cœur du Col de Vence.`
- Paragraphe 2 : `De 10 minutes à plusieurs heures : vous écoutez les consignes de base, puis vous partez avec vos enfants sur le dos d'un poney que vous tenez à la main. Du shetland pour les plus jeunes au double poney pour les ados.`
- Liste à puces ✓ :
  1. `Accueil des enfants à partir de 2 ans`
  2. `Casques aux normes CE et étriers de sécurité fournis`
  3. `Cavalerie sélectionnée pour sa douceur, depuis 30 ans`
  4. `Au cœur du Parc Naturel Régional des Préalpes d'Azur`
  5. `Ouvert tous les jours, de 10h à 18h`
- CTA : `Réserver une balade`

---

### Section « L'héritage du Théâtre équestre Zingaro »
*(source : src/components/home/BartabasHighlight.tsx)*

- Eyebrow : `Une signature d'exception`
- H2 : `L'héritage du Théâtre équestre Zingaro`
- Citation (italique) : `« Pénélope a passé plusieurs années aux côtés de Bartabas, à s'occuper des chevaux du célèbre théâtre équestre Zingaro. »`
- Paragraphe : `De cette expérience unique, elle a tiré une exigence rare dans la sélection, l'éducation et le soin de sa cavalerie. Une philosophie qu'elle transmet aujourd'hui à chacun de ses cavaliers, du baby poney au compétiteur confirmé.`
- Lien : `Découvrir l'équipe et le club →`

---

### Section « Des disciplines pour tous »
*(source : src/components/home/Disciplines.tsx)*

- Eyebrow : `Nos activités`
- H2 : `Des disciplines pour tous`
- Sous-titre : `Que vous soyez débutant ou cavalier confirmé, nous vous proposons une discipline adaptée à votre envie et votre niveau.`
- Cartes (4 items) :
  1. `Balades à poney`
  2. `École poney`
  3. `Cours collectifs`
  4. `Randonnées`
- Survol carte : `En savoir plus →`

---

### Section « Suivez la vie du club » (Social Wall)
*(source : src/components/home/SocialWall.tsx)*

- Eyebrow : `#FortApache · #ColDeVence`
- H2 : `Suivez la vie du club`
- Sous-titre : `Photos, instants partagés, coulisses et nouveautés — retrouvez-nous au quotidien sur nos réseaux.`
- Bouton Instagram : `@fortapache06`
- Bouton Facebook : `Fort Apache`
- Captions des posts : *(source : src/lib/social-wall.ts — contenus dynamiques, à récupérer côté data si traduction nécessaire)*

---

### Section « Témoignages »
*(source : src/components/home/Testimonials.tsx)*

- Eyebrow : `Ils nous font confiance`
- H2 : `Témoignages de nos cavaliers`
- Témoignage 1
  - Citation : `On apprend vraiment à tout gérer par rapport au cheval, pas seulement à monter. Quoi qu'il se passe — pour le donner à manger, s'il est malade — on sait quoi faire.`
  - Nom : `Une élève`
  - Niveau / rôle : `Cavalière de Fort Apache`
- Témoignage 2
  - Citation : `C'est un club où on a plaisir à venir parce qu'il y a du sens. On apprend à connaître son cheval, à connaître l'équitation. Le cheval a beaucoup d'importance.`
  - Nom : `Un parent`
  - Niveau / rôle : `France 3 — Reportage`
- Témoignage 3
  - Citation : `Quand j'ai des petits problèmes, soit au collège ou avec des copains, je vais voir les chevaux. Il m'aide un peu, il m'apaise.`
  - Nom : `Une jeune cavalière`
  - Niveau / rôle : `France 3 — Reportage`

---

### Section « Bandeau CTA » (avant carte)
*(source : src/app/page.tsx)*

- H2 : `Prêt à monter en selle ? Contactez-nous`
- Paragraphe : `Notre équipe vous accompagne pour trouver la formule qui vous correspond — du baby poney au cavalier confirmé. Ouvert 7 jours sur 7 de 10h à 18h.`
- CTA 1 (bouton) : `Nous contacter`
- CTA 2 (téléphone) : `04 93 58 91 43`

---

### Section « Où nous trouver » (MapEmbed)
*(source : src/components/home/MapEmbed.tsx)*

- aria-label section : `Carte et accès`
- Eyebrow : `Nous rejoindre`
- H2 : `Où nous trouver`
- Adresse affichée : `Carrefour Saint-Barnabé, Quartier Col de Vence, 06140 Coursegoules`
- Titre iframe (accessibilité) : `Carte — Fort Apache Club Équestre`

---

## PAGE ACTIVITÉS — `/activites`

> *Sur la branche extraite, cette page est en réalité `/disciplines`. Le contenu ci-dessous est celui de `src/app/disciplines/page.tsx`. Après merge de la PR #1, le libellé « Disciplines » devient « Activités » et le H1 utilise « Nos activités », mais les textes des cartes et du bandeau CTA ne changent pas.*

### Metadata
*(source : src/app/disciplines/page.tsx)*

- **Title** : `Disciplines équestres — Balades à poney, cours et stages`
- **Description** : `Toutes nos disciplines à Fort Apache (Coursegoules, 06140) : balades à poney en famille, cours collectifs et particuliers, école poney, randonnées, stages vacances et compétitions.`

### PageHeader
- Overline : `Disciplines`
- H1 : `Trouvez votre passion équestre`
- Sous-titre : `Sept activités, du baptême à poney en famille au perfectionnement en compétition.`

### Section « Activité phare » (Balades à poney)
- Alt image : `Balades à poney`
- Badge : `★ Activité phare`
- Eyebrow : `À ne pas manquer`
- H2 : `Balades à poney`
- Texte : `L'incontournable de Fort Apache : partez en balade accompagnée à dos de poney au cœur du Col de Vence. Idéal en famille, même sans aucune expérience.`
- CTA : `Réserver une balade`

### Section « Autres disciplines » (7 cartes)

Pour chacune : alt image = nom ; titre H2 = nom ; texte = excerpt ; lien = `En savoir plus →`.

1. **Cours collectifs**
   - Texte : `Apprenez et progressez en groupe, dans une ambiance conviviale. Séances d'une heure par niveau.`
2. **Cours particuliers**
   - Texte : `Un moniteur rien que pour vous. Idéal pour un perfectionnement ciblé ou un retour en selle.`
3. **École poney**
   - Texte : `Pour les enfants de 4 à 8 ans : premier contact avec le poney, jeux, soins et petits parcours.`
4. **Randonnées équestres**
   - Texte : `Pour les cavaliers expérimentés : sorties de plusieurs heures à la demi-journée à travers les sentiers du Col de Vence.`
5. **Stages vacances**
   - Texte : `Toussaint, Noël, hiver, Pâques, été : des stages thématiques de 3 à 5 jours pour tous niveaux.`
6. **Pension de chevaux**
   - Texte : `Vous souhaitez avoir votre cheval ou votre poney ? Pénélope vous conseille sur le choix de la monture, son entretien, son travail et ses soins, et en assure un suivi personnalisé.`
7. **Compétitions & disciplines variées**
   - Texte : `Obstacle, dressage, cross, équitation américaine, monte en amazone, attelage, voltige, skijoring, horse-ball : à Fort Apache, vous pratiquez la discipline qui vous plaît.`

### Section « Bandeau CTA »
- H2 : `Une discipline vous intéresse ?`
- Paragraphe : `Contactez-nous pour en discuter et trouver la formule adaptée.`
- CTA : `Nous contacter`

---

## PAGE TARIFS — `/tarifs`

### Metadata
*(source : src/app/tarifs/page.tsx)*

- **Title** : `Tarifs — Cours, stages et forfaits annuels`
- **Description** : `Découvrez les tarifs de Fort Apache : cours hebdomadaires, forfaits annuels, stages et cours particuliers. Transparence totale.`

### PageHeader
- Overline : `Tarifs`
- H1 : `Des formules claires et transparentes`
- Sous-titre : `Retrouvez ici l'ensemble de nos tarifs. Nos équipes restent à votre disposition pour tout renseignement complémentaire.`

### Tableau tarifaire principal
*(source : src/app/tarifs/page.tsx)*

- Caption (sr-only, accessibilité) : `Tarifs Fort Apache`
- En-têtes colonnes : `Formule` · `Fréquence` · `Tarif mensuel` · `Tarif annuel`

| Formule | Fréquence | Tarif mensuel | Tarif annuel |
|---|---|---|---|
| `École poney (4-8 ans)` | `1 séance / semaine` | `80 €` | `720 €` |
| `Cours enfant / ado` | `1 séance / semaine` | `95 €` | `855 €` |
| `Cours adulte` | `1 séance / semaine` | `110 €` | `990 €` |
| `Forfait compétition` | `2 séances / semaine` | `180 €` | `1 620 €` |
| `Cours particulier` | `1 séance de 45 min` | `55 € / séance` | `—` |
| `Carte 10 séances` | `10 cours collectifs` | `—` | `280 €` |

### Encadré « À noter »
- Titre encadré : `À noter`
- Texte : `Les tarifs indiqués incluent l'adhésion au club. La licence FFE (25 € / 36 €) est à régler en supplément lors de l'inscription. Facilités de paiement possibles en 3 ou 10 fois sans frais. Renseignements au 04 93 58 91 43.`

### CTA final
- Bouton : `Je m'inscris`

---

## PAGE CONTACT — `/contact`

### Metadata
*(source : src/app/contact/page.tsx)*

- **Title** : `Contact — Prendre rendez-vous`
- **Description** : `Contactez Fort Apache pour une inscription, un stage, un cours particulier ou un simple renseignement. Notre équipe vous répond rapidement.`

### PageHeader
- Overline : `Contact`
- H1 : `Parlons de votre projet équestre`
- Sous-titre : `Une question, une envie d'inscription, un stage à prévoir ? Nous vous répondrons dans les meilleurs délais.`

### Colonne gauche — « Nous joindre »
*(source : src/app/contact/page.tsx)*

- H2 bloc : `Nous joindre`
- Label téléphone (eyebrow) : `Téléphone`
- Téléphone affiché : `04 93 58 91 43`
- Label email (eyebrow) : `Email`
- Email affiché : `contact@fort-apache-equitation-vence.fr`
- Label adresse (eyebrow) : `Adresse`
- Adresse : `Carrefour Saint-Barnabé, Quartier Col de Vence<br>06140 Coursegoules`
- H3 sous-bloc : `Horaires`
- Ligne horaires (jour / plage) : `7 jours / 7` — `10h — 18h`

### Colonne droite — Formulaire de contact
*(source : src/components/ui/ContactForm.tsx)*

- aria-label form : `Formulaire de contact`
- Champ **Prénom** (obligatoire `*`)
  - Label : `Prénom`
  - autoComplete : `given-name`
  - Message d'erreur (trop court) : `Prénom trop court`
- Champ **Nom** (obligatoire `*`)
  - Label : `Nom`
  - autoComplete : `family-name`
  - Message d'erreur (trop court) : `Nom trop court`
- Champ **Email** (obligatoire `*`)
  - Label : `Email`
  - autoComplete : `email`
  - Message d'erreur : `Email invalide`
- Champ **Téléphone** (obligatoire `*`)
  - Label : `Téléphone`
  - autoComplete : `tel`
  - Messages d'erreur : `Numéro trop court`, `Numéro invalide`
- Champ **Âge du cavalier** (facultatif)
  - Label : `Âge du cavalier`
  - Aide sous le champ : `Pour les mineurs, une autorisation parentale sera demandée.`
- Champ **Niveau** (facultatif, select)
  - Label : `Niveau`
  - Placeholder option vide : `Choisir un niveau`
  - Options : `Débutant`, `Notions de base`, `Intermédiaire`, `Confirmé`, `Je ne sais pas`
- Champ **Objet de la demande** (facultatif, select)
  - Label : `Objet de la demande`
  - Placeholder option vide : `Choisir un objet`
  - Options : `Inscription cours`, `Stage vacances`, `Cours particulier`, `Renseignements`, `Autre`
- Champ **Votre message** (facultatif, textarea)
  - Label : `Votre message`
  - Placeholder : `Parlez-nous de votre projet équestre…`
- Honeypot (caché, accessibilité) — label : `Site web`
- Mention bas de formulaire : `Les champs marqués d'un * sont obligatoires.`
- Bouton submit (état normal) : `Envoyer ma demande`
- Bouton submit (état envoi) : `Envoi…`
- Écran de succès
  - H3 : `Merci pour votre message`
  - Paragraphe : `Nous vous répondrons dans les plus brefs délais.`
  - Bouton : `Envoyer un autre message`

---

## NOTES D'EXTRACTION

- **Schema.org** non extrait (reste en FR, hors périmètre light).
- **Contenus dynamiques** Social Wall et Blog non couverts (posts venant de `src/lib/social-wall.ts` / Notion).
- **Images décoratives** : alt text listés par section ci-dessus. Toute image sans alt spécifique utilise un alt automatique comme `Portrait de {name}` ou le nom de la discipline.
- **URL de query strings** (`/contact?objet=Renseignements`) : paramètre traduit automatiquement côté UX via `?objet=Inscription+cours`, etc. — à décider si on traduit ces valeurs côté EN ou si on conserve les valeurs FR comme clés.
- **« Mig's Communication »** : nom de l'agence, ne PAS traduire.
- **« Fort Apache »** : nom propre, ne PAS traduire.
- **« Bartabas »**, **« Zingaro »**, **« Pénélope »** : noms propres, ne PAS traduire.
- **« Galop » (1, 2, 3…)** : niveaux FFE, conserver tels quels ou traduire par « Level 1, 2, 3 » selon décision EN.
- **« Col de Vence »**, **« Coursegoules »**, **« Préalpes d'Azur »**, **« Parc Naturel Régional »** : toponymes, conserver en FR.
- **« shetland »**, **« double poney »** : termes équestres, à arbitrer avec Jessie.
