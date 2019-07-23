---
title: "Retrouver un sous-dossier avec Powershell"
date: 2019-07-23 00:00:00 +001
layout: post
author: Yvan Razafindramanana
license: CC-BY-SA-4.0
---

`Get-ChildItem -Recurse` permet de retrouver récursivement le chemin vers un fichier
ou un répertoire dans Powershell.

<!--more-->

La commande suivante permet de retrouver rapidement les sous-répertoires du
répertoire courant dont le nom commence par source.

```powershell
Get-ChildItem -Recurse -Directory -Filter source*
```

`-Recurse` permet d'effectuer une recherche récursivement sur le
dossier courant et ses sous-dossiers,
`-Directory` indique qu'on souhaite ne chercher que des répertoires
et `-Filter <pattern>` permet de filtrer les résultats avec une
chaine de caractères.

Une fois qu'on a retrouvé le ou les répertoires, un pipe `|` suivi
de `ForEach-Object` permet de réaliser un traitement sur tous
les résultats. Par exemple pour afficher le chemin complet :

```powershell
Get-ChildItem -Recurse -Directory -Filter source* | ForEach-Object { Write-Host $_.FullName }
```

La combinaison que j'utilise souvent permet de trouver le premier
sous-répertoire avec le nom donné et de s'y déplacer :

```powershell
Get-ChildItem -Recurse -Directory -Filter source* | ForEach-Object { Set-Location $_.FullName; break }
```

L'instruction `break` est importante, elle permet d'arrêter la recherche
après le premier résultat, ce qui est une optimisation intéressante
dans mon cas.

En version *compacte* :

```powershell
gci -Recurse -Directory -Filter source* | % { cd $_.FullName; break }
```

Autre exemple, trouver le premier fichier `*.html` et de l'ouvrir avec
l'application associée :

```powershell
Get-ChildItem -Recurse -File -Filter *.html | ForEach-Object { start $_; break }
```
