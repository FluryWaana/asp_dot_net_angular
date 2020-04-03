# Projet ASP.NET
![Version](https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE)

Cette application à pour but la gestion d'évènement. Celle-ci est réalisée pour un cours.  
La conception du backend (API) est conçu avec le langage **C#**.  
Le conception du frontend est conçu à l'aide du framework **Angular 8**.  

Si vous souhaitez utiliser cette application:

## Prérequis

- MySQL >=5.7.24
- dotnet-ef >= 3.0.0

## Importation de la base de données
Dans le fichier **appsettings.json** qui se situe à la racine du projet modifier la ligne suivante en fonction de votre base de données
```
  "ConnectionStrings": {
    "EventContext": "server=localhost;port=3306;userid=root;password=motdepasse;database=events;persistsecurityinfo=True"
  }
```

Une fois celui-ci modifié, générer votre projet.

Executer la commande suivante dans votre projet:
```
dotnet ef database update
```
