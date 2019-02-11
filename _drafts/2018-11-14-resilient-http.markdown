---
title: "Des appels HTTP résilients dans une architecture micro-services"
date: 2018-11-14 00:00:00 +001
layout: post
author: Yvan Razafindramanana
license: CC-BY-SA-4.0
---

<acronym title="Too long; Didn't Read">TL;DR</acronym> Adopter une architecture orientée micro-services, a fortiori avec une approche serverless, c'est accepter que les échanges entre composants ne se passent pas toujours bien – et donc mettre en place les mécanismes adéquats pour éviter une perte d'informations ou fonctionner en mode dégradé.

Polly / Open-source

Injection de dépendances

<!--more-->

# Injection de HttpClient

HttpClientFactory

# Polly

Transparent pour le service

# Quelques policies

Timeout
Retry
Fallback
Circuit-breaker

# Combinaison
