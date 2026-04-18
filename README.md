# Jeux VideoPS 🎮

Pipeline CI/CD pour deux jeux JS13K : Space Invaders et SpaceWord.

![CI Pipeline](https://github.com/stevendarboux-a11y/projet_deopps_perso/actions/workflows/main.yml/badge.svg)

## Jeux

- **Space Invaders** — Arnold
- **SpaceWord** — Morgan

## Pipeline CI

- **Tests** : 19 tests Jest (11 unitaires imposés + 5 supplémentaires + 3 fonctionnels)
- **Linter** : ESLint Google JavaScript Style Guide
- **Audit** : npm audit — 0 vulnérabilité critique (réduit de 90 à 18 via `npm audit fix` + `overrides`)
- **Annotations** : workflow commands GitHub Actions (`::notice::`, `::error::`)
- **Résumés** : rapport d'audit et statut des jobs dans `$GITHUB_STEP_SUMMARY`

## Pipeline CD

- **Docker** : build et push des images vers GitHub Container Registry (GHCR)
- **GitHub Pages** : déploiement automatique du portail et des deux jeux sur push vers `main`

## Déclencheurs

- Push sur toutes les branches
- Pull Request vers `main`
- Déclenchement manuel (`workflow_dispatch`)

## Sécurité

**Vulnérabilités corrigées :**
- `npm audit fix` : 90 → 72 vulnérabilités
- `overrides` (`form-data`, `elliptic`, `braces`, `node-forge`, `nth-check`, `qs`, `tough-cookie`, `terser`, `postcss`, `minimatch`) : 72 → 18 vulnérabilités
- Résultat final : **0 vulnérabilité critique, 0 vulnérabilité high**

**Vulnérabilités restantes (18) — non corrigibles :**

Toutes proviennent de `parcel-bundler` v1, un bundler abandonné depuis 2021. Elles ont le statut "No fix available" — aucune version corrigée n'existe.

L'override `micromatch` a été volontairement exclu car il casse le build de parcel v1 — ce package fait partie de l'API interne de parcel et n'est pas rétrocompatible avec les nouvelles versions.

**Solution en production :** migrer vers Parcel v2 ou Vite.
