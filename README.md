# Le site web de Naova 
[https://www.clubnaova.ca](https://www.clubnaova.ca)

# Commandes importantes
* npm install : permet de mettre de télécharger tout les dépendances du projet
* npm start : permet de tester le site localement 
* npm build : permet de faire un build pour le déploiement

# Installation
1. avoir nodejs d'installé sur ta machie (https://nodejs.org/)
2. avoir git d'installé sur ta machine (https://git-scm.com/downloads)
3. je vous conseil d'utiliser visual code pour travailler avec le code (https://code.visualstudio.com)
4. clone le projet sur ta machine
5. à la racine du projet faire un "npm install" pour avoir tous les dépendances du projet
6. à la racine du projet faire un "npm start" pour faire rouler le site localement (http://localhost:3000/)

# Structuration du code
Le site est programmé en Reactjs (https://reactjs.org), c'est un mélange de HTML et de JavaScript. C'est normale d'avoir du HTML dans ton JavaScript. Nous utilisons aussi Redux, afin de stocker des informations, par exemple ici la langue du l'utilisateur, dans le store. Le store c'est comme un LocalStorage.


## L'arbre des fichiers

    .
    ├── build                 # Le code React qui est convertie en HTML, CSS et JavaScript pour le déploiement (ne pas jouer dedans)
    ├── dist                  # Pas besoin (ne pas jouer dedans)
    ├── node_modules          # Le code des dépendances (ne pas jouer dedans)
    ├── public
    │   ├── index.html        # La page HTML qui contient le core du projet
    │   └── noafacehalf.webp   # Le favicon (logo de naova dans le tab du browser)
    ├── src                   # Tout le code React
    │   └── ...
    ├── .gitignore            # Le code que nous voulons que Git ignore
    ├── .htaccess             # Le code de configuration pour le serveur
    ├── package-lock.json     # Fichier de configuration du projet
    ├── package.json          # Fichier de configuration du projet et la liste des dépendances
    └── README.md

## L'arbre des fichiers pour le src

    .
    src
    ├── action
    │   └── locale.js           # Action qui permet de changer la langue/locale (fr ou en)
    ├── components              # Tous les components utilisés par les containers
    │   └── ...
    ├── containers              # Tous les containers/section du site
    │   ├── Historique          # La page Historique (https://www.clubnaova.ca/history)
    │   ├── Home                # La page d'accueil (https://www.clubnaova.ca/)
    │   ├── Press               # La page Presse (https://www.clubnaova.ca/press)
    │   ├── Scientific          # La page scientifique/TDP (https://www.clubnaova.ca/scientific)
    │   ├── Sponsors            # La page des partenaires (https://www.clubnaova.ca/sponsors)
    │   └── Team                # La page des membres du club (https://www.clubnaova.ca/team)
    ├── doc
    │   ├── partenariat         # Les documents de partenariat
    │   └── scientific          # Les documents scientifique ex: TDP
    ├── fonts                   # Les polices/fonts d'écriture
    ├── img
    │   ├── bg                  # Tous les images que nous retrouver en backgroud d'une page
    │   ├── logo                # Tous les logos du club
    │   ├── partenaire          # Tous les logos des partenaires
    │   ├── portfolio           # Les images que nous utilisons dans la section Photo
    │   └── team                # Les images individuels des membres du club
    ├── json                    # Ici se retrouve ma BD
    │   ├── historique.json     # Toute les informations que nous affichons dans la page Historique
    │   ├── member.json         # Toute les informations que nous affichons dans la page Team
    │   ├── press.json          # Toute les informations que nous affichons dans la page Press
    │   ├── project.json        # Toute les informations sur les projets que nous affichons dans la page Home
    │   └── scientific.json     # Toute les informations que nous affichons dans la page Scientific
    ├── reducer
    │   └── locale.js           # Fonction qui permet de changer la langue/locale dans le store
    ├── selector
    │   └── locale.js           # Fonction qui permet d'aller chercher de l'information, ici la langue, dans le store
    ├── style                   # Fichier de style, css
    ├── types
    │   └── locale.js           # Tous les actionTypes qui sont utilisées par les actions et le reducer
    ├── App.js                  # Tous les routes
    ├── index.js                # Coeur de l'application
    ├── logo.svg
    ├── messages.js             # Tous les textes en francais et en anglais pour la traduction
    ├── reducer.js              # Fichier qui conbine tous les reducer ensemble pour parler au store
    └── registerServiceWorker.js # Aucune idée...

## L'arbre des fichiers pour les components

    .
    components
    ├── ContactUs
    │   └── ...                     # Fichier jsx et css pour la section contactUs de la page Home
    ├── Footer
    │   └── ...                     # Fichier jsx et css pour le Footer de toutes les pages
    ├── Header
    │   └── ...                     # Tous les Headers de chaque pages
    ├── Historique
    │   ├── Historique.jsx          # L'affichage d'une seul Historique
    │   └── ListOfHistorique.jsx    # L'affichage de la liste pour la page Historic
    ├── Images
    │   ├── Images.jsx              # L'affichage de la liste des images pour la section Photo de la page Home
    │   └── OneImage.jsx            # L'affichage d'une seule photo
    ├── NavBar
    │   └── ...                     # La NavBar pour toutes les pages
    ├── Presentation                # Section Presentation (la première section) de page Home
    │   ├── Definition
    │   │   └── ...                 # L'affichage de la definition du club
    │   ├── Summary                 # Section "Naova, c'est donc :"
    │   │   ├── LeftSummary.jsx     # L'affichage des section à gauche
    │   │   └── RightSummary.jsx    # L'affichage des section à droite
    │   └── Presentation.jsx        # Container des components
    ├── Press
    │   ├── ListOfPress.jsx         # La liste des presses pour la page Press
    │   └── Press.jsx               # Une seule presse
    ├── Project
    │   ├── Project.jsx             # Container de la section
    │   └── Skill.jsx               # L'affichage du projet où il est rendu
    ├── Scientific
    │   ├── ListOfScientific.jsx    # La liste des scientifiques pour la page Scientific
    │   └── Scientific.jsx          # Une seule scientifique
    ├── SectionHeaderNao
    │   └── ...                     # C'est se que est afficher entre chaque section de la page Home avec une petite tête de Nao ou une grosse
    ├── Sponsors
    │   ├── Argent.jsx              # La liste des sponsors de la catégorie Argent
    │   ├── Bronze.jsx              # La liste des sponsors de la catégorie Bronze
    │   ├── Diamant.jsx             # La liste des sponsors de la catégorie Diamant
    │   ├── Or.jsx                  # La liste des sponsors de la catégorie Or
    │   ├── Platine.jsx             # La liste des sponsors de la catégorie Platine
    │   └── Sponsors.jsx            # Affichage d'un seul sponsor
    ├── Team
    │   ├── ListOfMembers.jsx       # La liste des membres du club
    │   └── Member.jsx              # L'affichage d'un seul membre du club
    └── Video
        └── ...                     # Section de la vidéo prise par Youtube

Prendre une vidéo de Youtube pour la section Vidéo : 
1. Allez sur la vidéo que vous avez besoin
2. Cliquez sur le bouton partager (à côté des pouces)
3. Choisir Intégrer
4. Prendre uniquement le lien src
5. Le copier à la bonne place dans le fichier componets/Video/Video.jsx

# Structuration des fichier json
## historique.json
````
{
    idDate,                 # L'id du message.json qui représente la date
    defaultMessageDate,     # Le message en anglais de la date
    idContent,              # L'id du message.json qui représente le contenu
    defaultMessageContent   # Le message en anglais du contenu *** Le contenu dans être en HTML ***
}
````

## member.json
````
{
    imgName,                    # Le nom du fichier de la photo (la photo doit être dans le fichier /src/img/team, en format .webp)
    *img2Name,                  # Le nom du fichier de la photo hover/funny (la photo doit être dans le fichier /src/img/team, en format .webp)
    name,                       # Le nom complet de la personne
    *idTitre,                   # L'id du message.json qui représente le titre de la personne (Capitainerie)
    *defaultMessageTitre,       # Le message en anglais du titre de la personne (Capitainerie)
    idProgramme,                # L'id du message.json qui représente le programme de la personne
    defaultMessageProgramme,    # Le message en anglais du programme de la personne
    *isFounder                  # true : si le membre est un membre fondateur du club
}
````
Les champs qui commence par * ne sont pas obligatoire

## press.json
````
{
    title,              # Le titre de l'article
    lang,               # La langue de l'article
    resume,             # Un résumer de l'article
    idDate,             # L'id du message.json qui représente la date
    defaultMessageDate, # Le message en anglais de la date
    type,               # Type de l'article ex: Photo, Magazine, Video, Article
    link,               # Le lien de l'article, photo, facebook, youtube
    source              # La source de l'article (Chaine Youtube, Page Facebook, ...) / L'auteur de l'article
}
````

## project.json
````
{
    idTitle,                # L'id du message.json qui représente le titre du projet
    defaultMessageTitle,    # Le message en anglais du titre du projet
    open,                   # Sur GitLab le nombre de ticket ouvert pour le projet
    close,                  # Sur GitLab le nombre de ticket fermé pour le projet
}
````

## scientific.json
````
{
    title,              # Le titre de l'article scientifique
    lang,               # La langue de l'article scientifique
    idDate,             # L'id du message.json qui représente la date
    defaultMessageDate, # Le message en anglais de la date
    link,               # Le nom du fichier avec l'extension (.pdf) qui se retrouve dans /src/doc/scientific
    source,             # La source de l'article scientifique / Les nom des membres du club qui ont écrit l'article
    *github             # Le lien github vers notre code release
}
````
Les champs qui commence par * ne sont pas obligatoire

# Déploiement
## Jusqu'au 19 juin :
* [Funio - CPanel](https://funio.com/fr/)
* Information de connexion voir email : New Customer Hub Password ;)

1. Premièrement nous devons tester si l'application fonctionne en local avec "npm start"
2. Lorsque les tests manuelle sont terminés nous pouvons faire un "npm build" pour créer un build du projet
3. Je vous conseil d'utiliser le logiciel FileZilla (https://filezilla-project.org) pour pouvoir déposer les fichiers du build sur le serveur
4. Le hôte : ftp.clubnaova.ca
5. Identifiant : {votre identifiant Funio}@clubnaova.ca
6. Mot de passe : {votre mot de passe Funio}
7. Port : 21
8. Connextion Rapide
9. Confirmer le certificat
10. À droite vous avez vos documents et à gauche se sont les documents du serveur
11. À droite, allez dans votre répertoire où vous avez mis le code et ensuite dans build
12. À gauche, allez dans le répertoire /public_html
13. À droite sélectionner tous les fichiers (static, asset-manifest.json, index.html, naofacehalf.webp et service-worker.js)
14. Clic droit sur la sélection et faire "Envoyer"
15. Il se peut qu'il ait des pop-up pour dire que le fichier existe, on remplace tout!

## Netlify :
1. Lorsqu'une merge request est créée, un lien de preview est envoyé
2. Vérifie que ton changement ne brise rien
3. Quand tu merge dans master, le site se déploy automatiquement.
4. Un message est envoyé pour avertir que le déployement à réussi
5. Voilà!