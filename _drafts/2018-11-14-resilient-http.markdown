---
title: "Des appels HTTP résilients dans une architecture micro-services"
date: 2018-11-14 00:00:00 +001
layout: post
author: Yvan Razafindramanana
license: CC-BY-SA-4.0
---

<acronym title="Too long; Didn't Read">TL;DR</acronym> Adopter une architecture orientée micro-services, a fortiori sur une approche serverless, c'est accepter que les échanges entre composants ne se passent pas toujours bien – et donc mettre en place les mécanismes adéquats pour éviter une perte d'informations ou fonctionner en mode dégradé.

La librairie open-source [Polly](https://github.com/App-vNext/Polly) permet d'adresser un de ces problèmes de communication : la gestion des erreurs lors d'appels HTTP à des services distants. En cas d'erreur, faut-il rejouer l'appel ? Combien de fois ? Que retourner à la méthode appelante ?

Complètement intégrée au système d'injection de dépendances .NET Core, Polly peut être mise en place de manière globale et complètement transparente, et permet de rendre son code plus résilient aux fautes.

<!--more-->

# Injection de HttpClient

HttpClientFactory

# Polly

En intégrant le monde open-source, le framework .NET Core s'est également ouvert à tout un écosystème de solutions tierces qui est venu démultiplier les fonctionnalités offertes. Certaines de ces solutions sont même tellement indispensables qu'elles sont devenues des citoyens de première classe du framework. La librairie Polly fait partie de ces solutions, elle est recommandée par Microsoft pour les cas d'utilisations déjà cités. 

Transparent pour le service

# Quelques policies

Timeout
Retry
Fallback
Circuit-breaker

# Combinaison
