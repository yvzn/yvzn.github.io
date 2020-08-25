---
title: "Créer un CSV compatible Excel"
date: 2020-06-30 00:00:00 +001
layout: post
author: Yvan Razafindramanana
license: CC-BY-SA-4.0
---

<acronym title="En résumé... (Too long; Didn't Read)">TL;DR</acronym>
Pour générer un fichier CSV qui peut-être ouvert sans problème dans les versions récentes de Excel, utiliser l'encodage __UTF-16LE__ et le caractère __tabulation__ comme séparateur.

<!--more-->

# Un export facile à générer

L'avantage du format de fichier CSV pour exporter ses tableaux de données est qu'il est très facile à écrire depuis n'importe quel language de programmation : il s'agit juste d'un fichier au format texte, où les données sont séparées par un caractère spécial, la virgule.

Un deuxième avantage est que ce format est compatible avec de nombreux logiciels bureautiques, dont Excel. Malheureusement le tableur de Microsoft a une façon très particulière d'interprétér les fichiers CSV qui, si on n'y prête pas attention, peuvent rendre les données exportées illisibles. Par exemple si les elles contiennent des caractères accentués ou... des virgules.

# Des choix techniques ...

Ces différentes anomalies sont selon moi un bon exemple de choix techniques parfaitement valables sur le papier mais avec un impact vraiment négatif pour l'expérience de l'utilisateur final.

Prenons par exemple le cas de données qui contiennent des caractères accentués ou d'une langue non latine. La norme actuelle pour écrire de telles données dans un fichier texte est d'utiliser un encodage _Unicode_ et __UTF-8__ est de facto le standard _Unicode_ sur internet.

Mais __UTF-8__ a quelques problèmes. Par exemple il a besoin d'un nombre variables d'octets pour encoder les caractères, parfois deux, parfois quatre, parfois plus, ce qui peut poser des difficultés dans certains algorithmes, comme calculer la longueur totale d'une chaîne. __UTF-16LE__ résoud une partie de ces limitations et si son utilisation est moins commune, elle peut se justifier. 

Sauf qu'il a été décidé, dans les versions récentes d'Excel, de n'accepter _que_ __UTF-16LE__. Si on utilise autre chose (dont __UTF-8__ ou __ANSI__) alors les caractères vont mal s'afficher.

Une solution simple pour le développeur est donc, lors de l'écriture de son fichier, de privilégier l'encodage __UTF-16LE__, bien supporté par la plupart des logiciels modernes et donc par Excel.

# ... et un manque de support

Concernant les séparateurs entre les colonnes de données, le format CSV (__Comma-separated values__) utilise habituellement une virgule (__Comma__) Cela ne pose aucun problème pour les utilisateurs d'Excel anglophones. En français par contre, les données ne vont s'afficher que dans une seule colonne et forcer l'utilisateur à utiliser l'outil de reformatage pour afficher les informations au format souhaité (lorsqu'il le connaît)

Excel se base sur un paramètre peu connu des options linguistiques de Windows, pour déterminer quel séparateur utiliser lors de la lecture des fichiers CSV. L'option __séparateur de liste__ du panneau de configuration de Windows, vous l'aurez deviné, est une virgule en anglais ce qui permet donc de lire les CSV de manière transparente. En français, c'est... un point-virgule.

Là aussi c'est justifiable techniquement. Après tout le système d'exploitation fournit un paramètre, il semble logique de vouloir l'utiliser. Malheureusement dans un environnement de travail globalisé où les fichiers sont échangés d'une langue à l'autre, il n'est pas robuste de se baser sur un tel réglage local au poste de travail.

Heureusement, une solution simple existe là aussi. Etrangement, Excel supporte également bien le caractère __tabulation__ comme séparateur, en plus de l'option __séparateur de liste__. Second avantage, dans la plupart des cas, les données exportées contiennent rarement un caractère __tabulation__, ce qui évite d'avoir à échapper toutes les colonnes.

Techniquement ce n'est plus un fichier CSV mais un fichier TSV (__Tabulation-separated values__) mais la majorité des logiciels, dont Excel, savent gérer le chargement, indépendamment de l'extension de fichier.

# TODO
Injection

# Une solution qui fonctionne

Voilà une problématique simple qui dans les faits s'avère plus complexe que prévue à mettre en oeuvre. Moins complexe toutefois que d'intégrer une librairie tierce capable de générer de vrais fichiers Excel ou ODS.

Cela m'inspire d'autres réflexions plus globales sur la manière dont les applications doivent gérer l'internationalisation, sur le besoin de mieux tester ses applications avec des profils d'utilisateurs multilingues et diversifiés.
