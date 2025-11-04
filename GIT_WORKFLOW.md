# 🔀 Workflow Git - Bonnes Pratiques

## 📋 Vue d'ensemble

Ce document décrit le workflow Git professionnel à suivre pour ce projet.

**Date de création** : 3 novembre 2025
**Statut actuel** : ⚠️ Workflow non suivi dans les premiers commits (travail direct sur `main`)
**À partir de maintenant** : ✅ Workflow strict à respecter

---

## ⚠️ CONSTAT : Workflow non respecté initialement

### Ce qui a été fait (❌ mauvais)
- Commits directs sur la branche `main`
- Pas de branches `feature/` ou `fix/`
- Pas de Pull Requests
- Pas de review avant merge
- Tags créés rétroactivement

### Pourquoi c'est problématique
- ❌ Pas de possibilité de review avant intégration
- ❌ Historique Git moins propre
- ❌ Difficile de revenir en arrière sur une feature
- ❌ Pas de séparation entre code stable (main) et développement
- ❌ Risque de casser la production

---

## ✅ WORKFLOW PROFESSIONNEL À SUIVRE

### 1. Créer une branche pour chaque feature/fix

```bash
# Pour une nouvelle fonctionnalité
git checkout -b feature/nom-descriptif

# Pour une correction de bug
git checkout -b fix/nom-du-bug

# Pour de la documentation
git checkout -b docs/sujet

# Pour un hotfix urgent
git checkout -b hotfix/probleme-urgent
```

**Exemples de noms de branches** :
- `feature/google-forms-integration`
- `feature/captcha-anti-spam`
- `fix/email-not-sent`
- `docs/update-api-reference`
- `hotfix/critical-security-issue`

### 2. Faire les modifications sur la branche

```bash
# Modifier les fichiers nécessaires
# Vérifier les changements
git status
git diff

# Ajouter les fichiers modifiés
git add fichier1.html fichier2.md

# OU ajouter tous les fichiers modifiés
git add .
```

### 3. Committer avec un message clair

```bash
git commit -m "[TYPE] Titre court du changement

Description plus détaillée si nécessaire.
- Point 1
- Point 2

Refs: #issue-number si applicable"
```

**Types de commits** :
- `[FEATURE]` - Nouvelle fonctionnalité
- `[FIX]` - Correction de bug
- `[DOCS]` - Documentation
- `[REFACTOR]` - Refactoring sans changement fonctionnel
- `[TEST]` - Ajout de tests
- `[STYLE]` - Changements cosmétiques (CSS, formatage)
- `[CHORE]` - Tâches de maintenance

### 4. Pousser la branche sur GitHub

```bash
# Première fois (créer la branche distante)
git push -u origin feature/nom-descriptif

# Pushs suivants
git push
```

### 5. Créer une Pull Request (PR)

1. **Aller sur GitHub** : https://github.com/pierrre2db/promotionAI
2. **Cliquer sur "Compare & pull request"**
3. **Remplir la PR** :
   - **Titre** : Résumé clair du changement
   - **Description** :
     ```markdown
     ## Changements
     - Liste des modifications principales

     ## Tests effectués
     - [ ] Test 1
     - [ ] Test 2

     ## Screenshots (si applicable)
     [Images]

     ## Checklist
     - [ ] Code testé localement
     - [ ] Documentation mise à jour
     - [ ] Pas de régression
     ```
4. **Assigner des reviewers** (si applicable)
5. **Créer la Pull Request**

### 6. Review et corrections (si nécessaire)

```bash
# Si des changements sont demandés dans la review
# Faire les modifications sur la même branche
git add fichiers-modifies
git commit -m "[FIX] Corrections suite à review"
git push

# La PR sera automatiquement mise à jour
```

### 7. Merger la Pull Request

**Sur GitHub** :
1. Attendre l'approbation (si review configurée)
2. Vérifier que les tests passent (si CI/CD configuré)
3. Cliquer sur **"Merge pull request"**
4. Choisir le type de merge :
   - **Merge commit** (historique complet)
   - **Squash and merge** (un seul commit propre) ← **RECOMMANDÉ**
   - **Rebase and merge** (historique linéaire)
5. Confirmer le merge
6. **Supprimer la branche** (bouton "Delete branch")

**En local après le merge** :
```bash
# Revenir sur main
git checkout main

# Récupérer les changements
git pull origin main

# Supprimer la branche locale
git branch -d feature/nom-descriptif
```

### 8. Créer un tag de release

**Après un merge important** :

```bash
# Tag avec message
git tag -a v1.3.0 -m "Description de la release

Nouveautés:
- Feature 1
- Feature 2

Corrections:
- Bug fix 1"

# Pousser le tag
git push origin v1.3.0

# OU pousser tous les tags
git push origin --tags
```

**Versioning sémantique (SemVer)** :
- `v1.0.0` - Version majeure (breaking changes)
- `v1.1.0` - Version mineure (nouvelles features)
- `v1.1.1` - Patch (bug fixes)

---

## 📊 WORKFLOW COMPLET - Diagramme

```
1. main (stable)
      ↓
   git checkout -b feature/nouvelle-fonction
      ↓
2. feature/nouvelle-fonction (développement)
      ↓
   Modifications + git commit -m "..."
      ↓
   git push origin feature/nouvelle-fonction
      ↓
3. GitHub → Créer Pull Request
      ↓
4. Review du code (optionnel si solo)
      ↓
5. Merge Pull Request → main
      ↓
6. git checkout main + git pull
      ↓
7. git tag -a v1.x.0 -m "Release notes"
      ↓
   git push origin --tags
      ↓
8. main (stable avec nouvelle feature) ✅
```

---

## 🔥 CAS PARTICULIERS

### Hotfix urgent en production

```bash
# Créer une branche hotfix depuis main
git checkout main
git pull origin main
git checkout -b hotfix/probleme-critique

# Corriger le bug
# Commit et push
git commit -m "[HOTFIX] Correction problème critique"
git push origin hotfix/probleme-critique

# Créer PR et merger rapidement
# Tag immédiat en version patch
git tag -a v1.2.1 -m "Hotfix: correction problème critique"
git push origin v1.2.1
```

### Synchroniser une branche avec main

```bash
# Si main a évolué pendant votre développement
git checkout feature/ma-branche
git fetch origin
git rebase origin/main

# OU merger main dans votre branche
git merge origin/main

# Résoudre les conflits si nécessaire
# Puis push (force push si rebase)
git push --force-with-lease
```

### Annuler un commit

```bash
# Annuler le dernier commit (garder les modifications)
git reset --soft HEAD~1

# Annuler le dernier commit (supprimer les modifications)
git reset --hard HEAD~1

# Créer un commit qui annule un commit précédent
git revert <commit-hash>
```

---

## 📝 TEMPLATES

### Template de commit

```
[TYPE] Titre court (max 50 caractères)

Description détaillée du changement (max 72 caractères par ligne).
Expliquer le "pourquoi" plus que le "quoi".

- Point important 1
- Point important 2

Refs: #123 (si lié à une issue)
Breaking change: Oui/Non
```

### Template de Pull Request

```markdown
## 📋 Description

Brève description du changement et de sa motivation.

## 🔧 Type de changement

- [ ] 🚀 Nouvelle fonctionnalité (feature)
- [ ] 🐛 Correction de bug (fix)
- [ ] 📚 Documentation
- [ ] 🎨 Style/UI
- [ ] ♻️ Refactoring
- [ ] ⚡ Performance
- [ ] ✅ Tests

## 📝 Changements détaillés

- Changement 1
- Changement 2
- Changement 3

## 🧪 Tests effectués

- [ ] Test manuel sur navigateur Chrome
- [ ] Test sur mobile
- [ ] Vérification du Google Sheet
- [ ] Test des emails
- [ ] Pas de régression constatée

## 📸 Screenshots (si applicable)

[Ajouter des captures d'écran]

## 📚 Documentation mise à jour

- [ ] README.md
- [ ] APIS_ET_CLES.md
- [ ] TODO_PROJET.md
- [ ] Autre : _______

## ✅ Checklist finale

- [ ] Le code compile sans erreur
- [ ] Les tests passent
- [ ] La documentation est à jour
- [ ] Pas de code commenté inutile
- [ ] Pas de console.log oubliés
- [ ] Les commits sont atomiques et bien nommés

## 🔗 Références

- Issue: #___
- Documentation: [lien]
- Ticket: [lien]
```

---

## 🎯 RELEASES ET TAGS

### Stratégie de versioning

**Format** : `vMAJOR.MINOR.PATCH`

- **MAJOR** (v2.0.0) : Breaking changes, refonte majeure
- **MINOR** (v1.1.0) : Nouvelles fonctionnalités, pas de breaking changes
- **PATCH** (v1.0.1) : Corrections de bugs uniquement

### Quand créer un tag ?

**Toujours** :
- ✅ Après un merge important sur `main`
- ✅ Avant un déploiement en production
- ✅ Après correction d'un bug critique

**Jamais** :
- ❌ Sur une branche de développement
- ❌ Pour chaque petit commit
- ❌ Sans avoir testé

### Notes de release

```bash
git tag -a v1.3.0 -m "Release v1.3.0 - Ajout captcha anti-spam

🚀 Nouveautés:
- Google reCAPTCHA v3 intégré
- Protection anti-spam avancée
- Dashboard admin des inscriptions

🐛 Corrections:
- Bug d'affichage sur mobile
- Problème de validation email

📚 Documentation:
- Guide d'installation captcha
- Mise à jour APIS_ET_CLES.md

⚠️ Breaking changes:
Aucun

👥 Contributeurs:
- Pierre (@pierre2db)
- Claude Code
"

git push origin v1.3.0
```

---

## 📊 ÉTAT ACTUEL DU PROJET

### Tags existants

| Tag | Commit | Description | Date |
|-----|--------|-------------|------|
| **v1.0.0** | af352c7 | Initial release - Site web de base | 3 nov 2025 |
| **v1.1.0** | 080ef5b | Intégration Google Sheet | 3 nov 2025 |
| **v1.2.0** | ee0ac5f | Système emails 100% opérationnel ✅ | 3 nov 2025 |

### Prochaine release prévue

**v1.3.0** (Phase 2) :
- Intégration Google Forms
- Approche hybride HTML + Forms
- Tests multi-devices validés

---

## 🚀 POUR DÉMARRER PROPREMENT

### Setup initial (déjà fait)

```bash
# Clone du repository
git clone https://github.com/pierrre2db/promotionAI.git
cd promotionAI

# Vérifier la branche
git branch  # Doit afficher: * main

# Configurer Git
git config user.name "Votre Nom"
git config user.email "votre.email@example.com"
```

### Workflow standard pour une nouvelle feature

```bash
# 1. S'assurer d'être à jour
git checkout main
git pull origin main

# 2. Créer une branche
git checkout -b feature/nouvelle-feature

# 3. Développer
# ... modifications ...

# 4. Committer
git add .
git commit -m "[FEATURE] Description"

# 5. Pousser
git push -u origin feature/nouvelle-feature

# 6. Créer PR sur GitHub

# 7. Après merge, nettoyer
git checkout main
git pull origin main
git branch -d feature/nouvelle-feature

# 8. Tag si nécessaire
git tag -a v1.x.0 -m "Release notes"
git push origin --tags
```

---

## 🛠️ OUTILS RECOMMANDÉS

### Extensions Git utiles

- **GitLens** (VS Code) : Visualiser l'historique dans l'éditeur
- **GitHub Desktop** : Interface graphique pour Git
- **Git Graph** (VS Code) : Visualiser les branches

### Commandes utiles

```bash
# Voir l'historique graphique
git log --oneline --graph --all

# Voir les branches
git branch -a

# Voir les tags
git tag -l

# Voir les différences non committées
git diff

# Voir le statut
git status

# Voir les commits d'une branche
git log feature/ma-branche

# Chercher dans l'historique
git log --grep="email"

# Voir qui a modifié chaque ligne
git blame fichier.html
```

---

## 📚 RESSOURCES

- **Git Flow** : https://nvie.com/posts/a-successful-git-branching-model/
- **Semantic Versioning** : https://semver.org/
- **Conventional Commits** : https://www.conventionalcommits.org/
- **Git Docs** : https://git-scm.com/doc

---

## ✅ ENGAGEMENT POUR L'AVENIR

**À partir de maintenant** :
- ✅ Toujours créer une branche pour chaque changement
- ✅ Créer des Pull Requests (même si solo, pour l'historique)
- ✅ Committer avec des messages clairs et structurés
- ✅ Tagger les releases importantes
- ✅ Maintenir un CHANGELOG.md à jour
- ✅ Documenter systématiquement les changements

**Exception autorisée** :
- ⚠️ Hotfix critiques en production (avec PR immédiate après)
- ⚠️ Corrections de typos dans la doc (commits directs acceptables)

---

**Document créé le** : 3 novembre 2025 - 17h30
**Auteur** : Claude Code
**Version** : 1.0
**Statut** : À appliquer strictement à partir de maintenant
