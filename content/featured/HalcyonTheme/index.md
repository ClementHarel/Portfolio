---
date: '1'
title: 'Image Compressor'
cover: './halcyon.png'
github: 'https://github.com/ClementHarel/ImageCompressor'
external: 'https://github.com/ClementHarel/ImageCompressor'
tech:
  - Haskell
  - Programmation Fonctionnelle
showInProjects: true
---

Algorithme de compression d'image utilisation l'algorithme k-means. Cet algorithme a 3 étapes :

- Lire l'image et extraite la couleur de chaque pixel.
- Clusteriser ces couleurs et remplacer chaque couleur du cluster par la couleur majoritaire du cluster.
- Indexer les couleurs majoritaire et créer l'image compressée.