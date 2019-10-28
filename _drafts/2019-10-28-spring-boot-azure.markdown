Déployer une application Spring Boot sur Azure

Le service _Application Web_ (ou _App Service_) permet de déployer rapidement
une application Spring Boot standard dans le cloud Microsoft.

<!--more-->

# L'application

Pour l'exemple, j'ai choisi <a href="https://recyclette.azurewebsites.net/">La Recyclette</a>,
mon application utilisant la reconnaissance visuelle et la webcam du navigateur pour déterminer
si un déchet peut être recyclé.

C'est une application Spring Boot 2 très _classique_, avec le moteur de template `Thymeleaf`
et une base de données en mémoire `HSQLDB`. Le code source est disponible sur 
<a href="https://github.com/yvzn/recikligi/">github.com</a>.

# Créer l'hébergement sur Azure

Pour accueillir l'application, nous devons créer une ressource dans le portail Azure de type
_Application Web_ (ou _App Service_ en anglais, ou encore _Web App_). Ce service permet d'héberger des services
programmés dans une grande variété de langages, dont Java, pour un prix raisonnable.

En haut à droite du portail, sélectionner + Nouvelle Resource et rechercher _Application Web_.
A cette étape, il faut définir un groupe de resources, le nom de l'instance, le runtime et
le plan tarifaire. 

La notion de groupe de ressources est générique, elle permet de regrouper dans un même endroit des
services qui, en théorie, travaillent ensemble. Il s'agit d'un regroupement purement logique,
qui permet de retrouver facilement ses applications et d'organiser sa souscription. Un avantage,
la suppression du groupe de resource est récursive et permet d'une seule action de supprimer tout
un ensemble de ressources dont on n'a plus besoin.

Le nom de l'instance

Le runtime
Linux
Java 11 > Java SE

La région
définit dans quel datacenter

Le plan tarifaire
est la combinaison d'une puissance de calcul avec un plan tarifaire associé
c'est là où vous pourrez définir le dimensionnement et évidemment le coût
scaling horizontal et vertical

# Déployer avec Azure Devops

Déployer le code depuis github

Créer un pipeline Azure Devops

Associer le compte github

Créer le pipeline gitops (build + déploiement)

# Paramétrer 

Définir les variables d'environnement

# Automatiser

Templates ARM
Groupe de ressources : Exporter le modèle

# Conclusion




