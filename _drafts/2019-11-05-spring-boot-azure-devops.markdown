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
mon application Spring Boot utilisant la webcam du navigateur pour déterminer
si un déchet peut être recyclé.

Dans un premier article, je décris comment [créer et
configurer l'infrastructure Azure](/2019/10/27/spring-boot-azure) nécessaire au
déploiement de cette application (ressource de type _Application Web_).

# Déployer avec Azure Devops

Il s'agit donc de compiler et de packager cette application puis de la déployer dans la
resource Azure préalablement configurée.

Pour le reste de l'article, je suppose que vous êtes connectés a [Azure Devops](https://dev.azure.com) et que vous
avez un abonnement valide. L'abonnement gratuit (limité à 5 utilisateurs) suffit.

## Créer un pipeline Azure Devops

Il faut commencer par créer un nouveau _projet_ dans Azure Devops. Cette notion 
regroupe l'ensemble des services permettant la réalisation et le déploiement
d'une application web. Nous allons uniquement utiliser le service _pipelines_ mais
les autres services ont également leurs qualités et mériteraient une présentation
à part entière (repos, boards agiles, etc.)

Une fois le projet en place, on peut se rendre dans l'onglet _Pipelines_ > _Pipelines_
pour commencer l'automatisation de notre déploiement.

Azure devops va demander où récupérer le code source est hébergé. Puisque dans notre
cas le code source est disponible sur [github.com](https://github.com/yvzn/recikligi/),
il faut associer son compte Github à Azure devops. Cette opération nécessite de se
connecter à Github et de fournir les autorisations nécessaires.

## Configuration manuelle ou par fichier

Azure devops requiert un droit d'écriture dans le repository. Cela peut sembler
intrusif, mais donne en réalité l'opportunité de sauvegarder la configuration
de déploiement dans un fichier `yaml`, versionné au même endroit que votre code.
Les intérêts sont multiples: répéter le déploiement, le faire évoluer en même temps
que votre architecture, etc.

L'écriture de ce fichier `yaml` est largement assistée par des templates et des
tooltips, l'expérience est vraiment moderne, mais vous pouvez bien sûr choisir
l'option d'une configuration plus classique (via des écrans et des formulaires) 
en cliquant sur le lien _Classic editor_ en bas de page.

Nous pouvons commencer avec le _Starter pipeline_ qui va initialiser un fichier `yaml`
et afficher un éditeur de texte permettant de le compléter au fur et à mesure. 
Le contenu par défaut du fichier est l'équivalent d'un _hello world_.
Nous pouvons supprimer ce qu'il contient à l'exception des sections
`trigger` et `pool`. `trigger` définit la branche à observer pour déclencher le build en continu, 
`pool` paramètre l'ensemble d'ordinateurs (agents) utilisés pour le build.

## Build

L'étape suivante est de packager notre application. L'assistant de conception
`yaml` est disponible à l'aide du bouton _Show assistant_ sur la droite de l'éditeur.

Puisqu'il s'agit d'une application Spring Boot construite avec Maven, rechercher
`maven` dans l'assistant, paramétrer les différentes options (chemin vers le `pom.xml`, etc.)
et cliquer sur Add.

Attention le contenu `yaml` va être inséré à l'endroit où le curseur est positionné dans
l'éditeur, il faut donc bien s'assurer que ce dernier est la fin du fichier avant
de cliquer sur Add, sinon le code ne sera plus valide.

Créer le pipeline gitops (build + déploiement)

# Paramétrer 

Définir les variables d'environnement

# Automatiser

Templates ARM
Groupe de ressources : Exporter le modèle

Pulumi

# Conclusion
