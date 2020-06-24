---
title: "Mon éditeur de tablatures a 20 ans"
date: 2020-06-30 00:00:00 +001
layout: post
author: Yvan Razafindramanana
license: CC-BY-SA-4.0
---

<acronym title="En résumé... (Too long; Didn't Read)">TL;DR</acronym>
Tabber, mon éditeur de tablature de guitares pour Windows a 20 ans. Et il fonctionne encore ! Et il compile encore, enfin presque. Pour fêter cet honorable anniversaire, je l'ai à nouveau [remis en ligne](http://yvzn.github.io/tabber) et republié sur [GitHub](https://github.com/yvzn/tabber).

<!--more-->

# Une macro Excel...

J'avais à l'époque un réel besoin de pouvoir écrire facilement des tablatures de guitare, dans un format texte non propriétaire. Le logiciel donc a commencé sous la forme d'une macro Excel sous Visual Basic. Je l'ai ensuite transformé en application Delphi, une interface graphique pour Turbo Pascal. Je ne me posais certainement pas les mêmes questions sur la pertinence de tel ou tel choix technique ; _ça faisait le job_ ét c'était facile à développer.

Le passe-temps s'est transformé en vrai projet lorsque j'ai voulu le transformer en une application Windows. Cela m'a donné l'occasion d'apprendre à développer avec l'API _Win32_.

# Choix de design

Lorsque je parcours le code aujourd'hui, je suis plutôt étonné de voir à quel point il reste lisible, même pour du C++. J'arrive encore à peu près à comprendre l'organisation globale et pourquoi certains choix ont été faits - je ne suis pas sûr de pouvoir me replonger aussi immédiatement dans le code asynchrone d'un microservice que j'ai écrit il y a six mois.

Bien sûr il y a des choses que je ne ferais plus, ou plus de la même manière... comme stocker une adresse de pointeur dans une propriété cachée d'un handle de fenêtre pour pouvoir retrouver une instance d'objet, ou déclarer des fonctions _en ligne_ à la volée en utilisant des macros du préprocesseur.

Et puis il y a des astuces qui me font encore sourire, comme le fait d'avoir surchargé l'opérateur `new` pour faire du comptage de références et m'assurer que je libérais bien toute la mémoire à la sortie du programme.

Et puis il y a... l'API _Win32_ : peu de consistence entre les différentes signatures de méthodes, des types personnalisés à foison, la notation hongroise... Au moins la documentation était à peu près claire et disponible intégralement hors ligne, sous la forme d'un fichier _winhelp_ : mon accès à internet était encore aléatoire et, à l'époque, il n'y avait pas _StackOverflow_.

Ce n'était pas évident mais c'était amusant.

Et pas à cause de la performance, mais pour la maintenabilité : si je dois retenir une chose de ces vingt ans de programmation, c'est que la priorité de tout développeur est à minima de fournir le code le plus explicite possible et le plus immédiatement compréhensible - pour la personne qui devra recompiler ou débuger son programme plusieurs années après.
