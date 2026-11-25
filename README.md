# Blog Manager

**Blog Manager** est une application web de gestion d'articles développée avec React et TypeScript. Elle permet de créer, consulter, modifier, supprimer et organiser des articles à travers une interface simple, moderne et intuitive.

Ce projet a été réalisé dans le cadre de mon apprentissage du développement Front-End, afin de mettre en pratique les concepts fondamentaux de React, TypeScript, la gestion des états, la navigation entre les pages et la persistance des données.

---

## Sommaire

- [Présentation du projet](#présentation-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Architecture du projet](#architecture-du-projet)
- [Installation et lancement](#installation-et-lancement)
- [Fonctionnement de l'application](#fonctionnement-de-lapplication)
- [Gestion et sauvegarde des données](#gestion-et-sauvegarde-des-données)
- [Scripts disponibles](#scripts-disponibles)
- [Améliorations possibles](#améliorations-possibles)
- [Auteur](#auteur)

---

## Présentation du projet

Blog Manager est une application permettant de gérer facilement des publications sans avoir besoin d'un serveur ou d'une base de données externe.

Chaque article contient les informations suivantes :

- **Identifiant :** généré automatiquement lors de la création.
- **Titre :** titre de l'article.
- **Catégorie :** catégorie à laquelle appartient l'article.
- **Contenu :** texte de l'article.
- **Auteur :** nom de l'auteur.
- **Date de création :** générée automatiquement lors de la publication.

L'application utilise le stockage local du navigateur (`localStorage`) afin de conserver les articles après le rechargement de la page.

## Fonctionnalités

### 1. Gestion des articles

- Création de nouveaux articles.
- Affichage de l'ensemble des articles.
- Consultation du détail d'un article.
- Modification des articles existants à travers une fenêtre modale.
- Suppression d'un article avec confirmation préalable.

### 2. Recherche et filtrage

- Recherche d'articles à partir de leur titre.
- Filtrage des articles par catégorie.
- Tri des articles par date de création :
  - Du plus récent au plus ancien.
  - Du plus ancien au plus récent.

Les différents critères permettent de retrouver rapidement un article.

### 3. Validation des formulaires

Les formulaires de création et de modification intègrent un système de validation.

- Le titre, la catégorie et le contenu sont obligatoires.
- Les champs contenant uniquement des espaces sont considérés comme invalides.
- Des messages d'erreur sont affichés en cas de saisie incorrecte.
- Les données sont nettoyées avec la méthode `trim()` avant leur enregistrement.

### 4. Navigation

L'application dispose de plusieurs pages accessibles grâce à React Router :

| Route | Description |
|---|---|
| `/` | Page d'accueil |
| `/articles` | Liste des articles |
| `/articles/:id` | Détail d'un article |
| `/new` | Création d'un nouvel article |

### 5. Persistance des données

Les articles sont sauvegardés dans le `localStorage` du navigateur.

Les données restent disponibles après actualisation de la page, sans nécessiter de connexion à un serveur.

---

## Technologies utilisées

| Technologie | Utilisation |
|---|---|
| React | Construction de l'interface utilisateur avec des composants. |
| TypeScript | Typage statique et sécurisation du code. |
| Vite | Création et lancement de l'environnement de développement. |
| React Router DOM | Gestion de la navigation entre les pages. |
| HTML5 | Structure des éléments de l'application. |
| CSS3 | Mise en forme et design de l'interface. |
| LocalStorage | Sauvegarde locale des articles dans le navigateur. |
| ESLint | Analyse et contrôle de la qualité du code. |
| Prettier | Formatage automatique du code. |

---

## Architecture du projet

Le projet est organisé de manière modulaire afin de séparer les composants réutilisables, les pages et les types de données.

```text
blog-manager/
│
├── public/
│   └── blog-manager-favicon.png
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── ArticleList.tsx
│   │   └── EditArticleModal.tsx
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ArticlesPage.tsx
│   │   ├── ArticleDetailPage.tsx
│   │   └── NewArticlePage.tsx
│   │
│   ├── types/
│   │   └── article.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── .gitignore
└── README.md
```

### Rôle des principaux dossiers et fichiers

**`components/`**

Contient les composants réutilisables de l'application :

- `Header.tsx` : en-tête et navigation.
- `Footer.tsx` : pied de page.
- `ArticleCard.tsx` : affichage individuel d'un article et actions associées.
- `ArticleList.tsx` : affichage de la liste des articles.
- `EditArticleModal.tsx` : fenêtre modale permettant de modifier un article.

**`pages/`**

Contient les différentes pages accessibles dans l'application :

- `HomePage.tsx` : page d'accueil.
- `ArticlesPage.tsx` : consultation, recherche, filtrage et tri des articles.
- `ArticleDetailPage.tsx` : affichage détaillé d'un article.
- `NewArticlePage.tsx` : formulaire de création d'un article.

**`types/`**

Contient les définitions TypeScript utilisées dans le projet.

- `article.ts` : définition de l'interface `Article` et données initiales de démonstration.

**`App.tsx`**

Composant principal de l'application. Il centralise la liste des articles, les opérations de création, de modification et de suppression, ainsi que la configuration des routes.

**`main.tsx`**

Point d'entrée de l'application React. Il initialise le rendu et configure le routeur.

**`index.css`**

Contient les styles globaux et les règles de présentation de l'application.

---

## Installation et lancement

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/)
- npm (installé avec Node.js).
- Git.

### 1. Cloner le projet

```bash
git clone <URL_DU_DEPOT_GITHUB>
```

### 2. Accéder au dossier du projet

```bash
cd blog-manager
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Vite démarre le serveur de développement et affiche une adresse locale dans le terminal.

Ouvrez cette adresse dans votre navigateur pour accéder à l'application.

---

## Fonctionnement de l'application

### Création d'un article

L'utilisateur accède au formulaire de création, renseigne les informations demandées et valide sa publication.

Une fois les données validées, un nouvel article est créé avec un identifiant et une date générés automatiquement.

L'article est ensuite ajouté à la liste et l'utilisateur est redirigé vers la page des articles.

### Modification d'un article

Depuis la liste des articles, l'utilisateur peut ouvrir une fenêtre modale pour modifier les informations d'une publication.

Les données existantes sont automatiquement chargées dans le formulaire.

Après validation, les informations sont mises à jour tout en conservant l'identifiant et la date de création d'origine.

### Suppression d'un article

La suppression nécessite une confirmation de l'utilisateur afin d'éviter les suppressions accidentelles.

### Recherche et organisation

La page des articles permet de rechercher une publication par son titre, de sélectionner une catégorie et de modifier l'ordre d'affichage selon la date de création.

---

## Gestion et sauvegarde des données

L'application utilise `localStorage`, une fonctionnalité intégrée aux navigateurs web.

Les articles sont convertis au format JSON avant leur sauvegarde.

Les principales opérations utilisées sont :

- `localStorage.getItem()` : récupérer les articles sauvegardés.
- `localStorage.setItem()` : enregistrer les articles.
- `JSON.stringify()` : convertir les données JavaScript en chaîne JSON.
- `JSON.parse()` : reconstruire les données JavaScript à partir du JSON.

La gestion de la liste des articles est centralisée dans `App.tsx` avec le hook `useState`.

Le hook `useEffect` permet de synchroniser les modifications de cette liste avec le stockage local.

**Remarque :** les données sont conservées uniquement dans le navigateur utilisé. Elles ne sont pas partagées entre plusieurs utilisateurs ou appareils.

---

## Scripts disponibles

Les commandes suivantes sont disponibles dans le projet :

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement. |
| `npm run build` | Compile l'application pour la production. |
| `npm run lint` | Analyse le code avec ESLint. |
| `npm run preview` | Permet de prévisualiser la version de production. |

---

## Améliorations possibles

Plusieurs évolutions pourraient être envisagées pour enrichir le projet :

- Ajouter un backend et une base de données pour centraliser les articles.
- Mettre en place un système d'authentification.
- Ajouter la possibilité d'ajouter des images aux articles.
- Permettre la pagination de la liste des articles.
- Ajouter des fonctionnalités de gestion des profils utilisateurs.
- Améliorer davantage l'expérience utilisateur sur les différents appareils.

---

## Auteur

**Développé par Miguel**

Projet réalisé dans le cadre de mon apprentissage du développement Front-End avec React et TypeScript.

