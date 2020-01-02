---
title: "Déployer une application Spring Boot avec Azure Devops"
date: 2020-01-02 00:00:00 +001
layout: post
author: Yvan Razafindramanana
license: CC-BY-SA-4.0
---

<acronym title="En résumé... (Too long; Didn't Read)">TL;DR</acronym> La plateforme
Azure Devops permet de constuire et déployer automatiquement, en continu, une application Java
Spring Boot dans le cloud Microsoft. Dans ce second article, 
je décris comment configurer un tel déploiement, via l'interface Azure Devops mais
aussi par le code.

<!--more-->

# L'application

Comme exemple, j'ai choisi [La Recyclette](https://recyclette.azurewebsites.net/),
mon application Spring Boot 2 utilisant la webcam du navigateur pour déterminer
si un déchet peut être recyclé.

Dans un premier article, je décris comment [créer et
configurer l'infrastructure Azure](/2019/10/27/spring-boot-azure) nécessaire au déploiement de cette application (ressource
de type _Application Web_).

# Déployer avec Azure Devops

Le code source de l'application est disponible sur [github.com](https://github.com/yvzn/recikligi/).
Il s'agit donc de compiler et de packager cette application puis de la déployer dans la
resource Azure souhaitée.

# Créer un pipeline Azure Devops

Pour le reste de l'article, je suppose que vous êtes connectés a [Azure Devops](https://dev.azure.com) et que vous
avez un abonnement valide. L'abonnement gratuit (limité à 5 utilisateurs) suffit.

Associer le compte github

Créer le pipeline gitops (build + déploiement)

# Paramétrer 

Définir les variables d'environnement

# Automatiser

Templates ARM
Groupe de ressources : Exporter le modèle

Pulumi

# Conclusion
