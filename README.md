# Piiquante


Création d’une API sécurisée pour l’ application web d’avis gastronomiques: Hot Takes.

---------

La marque Piiquante souhaite créer un site “gallerie” où chaque utilisateur pourra voter pour des sauces piquantes mises en ligne par d’autre utilisateurs et mettre en ligne leurs sauces piquantes préférées.
La marque souhaite faire évoluer l’application web dans le futur pour pouvoir y vendre ses propres sauces piquantes.

---------

## Objectifs

Toute la partie __frontend__ a été réalisée en amont par Openclassrooms, elle est disponible sur [ce repository:](https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6)

Le but de ce projet est de créer la partie __backend__ de l’application (ce repository ne contient que la partie backend).

L’application doit répondre à des __objectifs de sécurité__:
- Le mot de passe de l'utilisateur doit être haché. 
- L'authentification doit être renforcée sur toutes les routes sauce requises.
- Les adresses électroniques dans la base de données sont uniques et un plugin Mongoose approprié est utilisé pour garantir leur unicité et signaler les erreurs. 
- La sécurité de la base de données MongoDB (à partir d'un service tel que MongoDB Atlas) ne doit pas empêcher l'application de se lancer sur la machine d'un utilisateur. 
- Un plugin Mongoose doit assurer la remontée des erreurs issues de la base de données.
- Les versions les plus récentes des logiciels sont utilisées avec des correctifs de sécurité actualisés.
- Le contenu du dossier images ne doit pas être téléchargé sur GitHub

Les étapes clés du projet sont [ici](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Guide+E%CC%81tapes+Cle%CC%81s_DW_P6.pdf)

Les recommandations techniques sont [par là](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Requirements_DW_P6.pdf)

------

## Pour commencer: 
Retirez le code de l'application _front-end_ du repository du projet et suivez les étapes suivantes : 
1. Clonez le repository
2. Ouvrez un terminal (Linux/Mac) ou une invite de commande/PowerShell (Windows) 
3. Exécutez npm install à partir du répertoire du projet
4. Exécutez npm start 
5. Exécutez le back-end sur http://localhost:3000 seulement

Pour faire tourner le _backend_:
1.	Ouvrir le terminal sur ce dossier.
2.	Pour utiliser le serveur, chargez le package nodemon : npm install -g nodemon.
3.	Puis lancez le serveur: nodemon server.
4.	Ouvrir http://localhost:4200 dans votre navigateur.

Il ne vous reste qu’à créer un compte utilisateur en cliquant sur SIGN UP.

------

## Technologies utilisées dans ce projet:
Language: javascript  
Framework: Express  
Server: NodeJs  
Base de données: MongoDB (hébergement sur MongoDB atlas) avec Mongoose.

------ 

## Auteur
Ce projet a été réalisé par Laura Vng
Github: github.com/KLdvl
