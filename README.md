
# HRNet: Human Resources Application

HRNet est une application interne pour administrer les ressources humaines, construit avec React et Redux.

## Démonstration

<https://nellylie.github.io/hrnet/>

## Fonctionnalités

4 Modules de base jquery ont été convertis pour une programmation en React.
Un formulaire récupérant les données utilisateurs et mettant à jour les states avec Redux a été codé.

### calendrier

Permet l'apparition d'un mini calendrier mettant à disposition les dates à selectionner.

### modale

Affiche un message au sein d'une modale

### selecteur

present par l'import de la bibliothèque dark-light-dropdown, crée spécialement pour le projet, mais disponible en tant que module sur npmjs, prêt à l'intégration dans d'autres projets.

Disponible sous ce nom:
npm i dark-light-dropdown

### tableau

Un tableau usant les hooks personnalisés de la bibliothèque react-table. Il fournit des colonnes organisables, par date, ou par alphabet ou par nombre.

Il inclut, un filtre de recherche et une pagination dynamique.

## dépendances

    "@reduxjs/toolkit": "^1.9.7",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "dark-light-dropdown": "^0.3.8",
    "react": "^18.2.0",
    "react-datepicker": "^4.25.0",
    "react-dom": "^18.2.0",
    "react-modal": "^3.16.1",
    "react-redux": "^8.1.3",
    "react-router": "^6.18.0",
    "react-router-dom": "^6.18.0",
    "react-scripts": "5.0.1",
    "react-table": "^7.8.0",
    "redux": "^4.2.1",
    "redux-persist": "^6.0.0",
    "sass": "^1.69.5"

## Installation

Clone le repertoire en local.
Navigue jusqu'au repertoire contenant le dossier du projet

Run npm install or yarn install pour installer toutes les dépendances.

## Utilisation

Lance l'application en local en executant npm start or yarn start.
