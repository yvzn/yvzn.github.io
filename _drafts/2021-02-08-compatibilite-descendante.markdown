---
title: "Compatibilité descendante"
date: 2021-02-08 00:00:00 +001
layout: post
author: Yvan Razafindramanana
license: CC-BY-SA-4.0
---

<acronym title="En résumé... (Too long; Didn't Read)">TL;DR</acronym>
Je pense que le web a toujours eu pour vocation d'être accessible au plus grand nombre. Le langage HTML, par exemple, a intégré la compatibilité descendante dès sa conception. Si un ancien navigateur est incapable d'afficher une balise moderne, il l'ignore simplement et essaie d'afficher les balises enfant. C'est ce qui permet à la combinaison `<detail>` / `<summary>` de s'afficher de manière acceptable dans un vieux browser.

<!--more-->

De la même manière si le moteur de rendu CSS ne comprend pas une propriété, il l'igore et passe à la propriété suivante. Cela permet une amélioration progressive des styles, en fonction de ce qui est accepté par le client, par exemple pour les polices web.

Il est possible d'assurer cette compatibilité dans le code ECMAScript. C'est plus fastidieux, car il faut tester au préalable les API supportées par le navigateur et réagir en conséquence. Il faut également vérifier le bon fonctionnement des nouveaux mots-clés du langage ou, à défaut, se limiter à une syntaxe plus ancienne et moins élégante.

Pourtant, de plus en plus de sites internet ou d'applications web fonctionnent mal ou refusent tout simplement de s'afficher, si on utilise une version un peu ancienne - ou si on désactive les scripts.

Les mainteneurs de ces sites considèrent probablement le travail supplémentaire pour supporter les anciens navigateurs comme trop long, trop rébarbatif. Et effectivement, si on souhaite apporter exactement la même expérience, en terme de richesse visuelle et d'interactivité qu'avec une plateforme récente, cela nécessite une quantité non négligeable de temps, de documentation, de code, de tests.

Ce n'est peut-être pas la bonne approche. Il me semble personnellement plus simple et plus raisonnable de prendre le problème dans l'autre sens. C'est à dire partir d'un code de base qui fonctionne à peu près partout, qui privilégie d'abord la _fonctionnalité souhaitée par l'utilisateur_. Puis on peut ajouter des améliorations une par une, de manière progressive, en fonction de ce qui est possible. D'abord les styles, puis les scripts, les API complexes, les animations, etc.

Quitte à accepter que le site semble moins dynamique : il reste utilisable par le plus grand nombre et on peut éventuellement informer l'utilisateur que son expérience pourrait être améliorée, grâce à une mise à jour.
