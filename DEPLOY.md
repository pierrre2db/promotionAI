# 📚 Guide de Déploiement - promotionAI

## 1️⃣ Créer le Repository sur GitHub

### Option A : Créer depuis zéro
1. Allez sur [github.com/new](https://github.com/new)
2. **Repository name** : `promotionAI`
3. **Description** : "Site web de promotion - Formation Acculturation IA"
4. **Visibility** : Public (pour GitHub Pages)
5. **Cliquez** "Create repository"

---

## 2️⃣ Pousser le code local vers GitHub

Après création du repository, exécutez ces commandes :

```bash
cd /home/claude/promotionAI

# Ajouter la remote GitHub
git remote add origin https://github.com/<your-username>/promotionAI.git

# Renommer la branche si nécessaire (optional)
git branch -M main

# Pousser le code
git push -u origin main

# Pousser les tags
git push origin --tags
```

---

## 3️⃣ Activer GitHub Pages

1. Allez sur votre repository GitHub
2. **Settings** > **Pages** (dans le menu gauche)
3. **Source** : Sélectionnez `main` branch
4. **Folder** : Sélectionnez `/root` (racine)
5. **Cliquez** "Save"

✅ Votre site sera accessible à :
```
https://<username>.github.io/promotionAI/
```

---

## 4️⃣ Workflow de Mise à Jour

### Pour développer une nouvelle feature

```bash
# 1. Créer une branche feature
git checkout -b feature/nouvelle-section

# 2. Faire vos modifications
# (modifier index.html, CSS, etc.)

# 3. Commiter vos changements
git add .
git commit -m "[FEATURE] Description de la modification"

# 4. Pousser vers GitHub
git push origin feature/nouvelle-section

# 5. Sur GitHub : Créer une Pull Request
# (Décrivez les changements, attendez la review)

# 6. Après approval, merger sur main
# (GitHub interface ou en local : git merge)

# 7. Créer une nouvelle release
git tag -a v1.1.0 -m "Description de la version"
git push origin --tags
```

---

## 5️⃣ Format des Commits

Utilisez ce format pour la clarté :

```
[TYPE] Courte description (max 50 caractères)

Description détaillée si nécessaire.
Peut être multi-ligne.

Fixes #123 (si ferme une issue)
```

**Types disponibles :**
- `[FEATURE]` : Nouvelle fonctionnalité
- `[FIX]` : Correction de bug
- `[DOCS]` : Documentation uniquement
- `[STYLE]` : Formatage, CSS (pas de logique)
- `[REFACTOR]` : Restructuration
- `[PERF]` : Amélioration de performance

**Exemples :**
```
[FEATURE] Ajout section FAQ
[FIX] Correction typo dans section modules
[DOCS] Update README avec instructions
[STYLE] Amélioration responsive mobile
```

---

## 6️⃣ Semantic Versioning (SemVer)

Format : `MAJOR.MINOR.PATCH`

- **MAJOR** (x.0.0) : Changements incompatibles
  - Exemple : Redesign complet du site
  
- **MINOR** (0.x.0) : Nouvelles fonctionnalités compatible
  - Exemple : Ajout d'un module FAQ
  
- **PATCH** (0.0.x) : Corrections de bugs
  - Exemple : Fix typo, CSS bug

**Exemples de versions :**
```
v1.0.0 - Version initiale
v1.0.1 - Fix typo dans header
v1.1.0 - Ajout FAQ et calendrier
v2.0.0 - Refonte complète UI/UX
```

---

## 7️⃣ Branches de Travail Recommandées

```
main          ← Production (toujours stable)
├── develop   ← Développement
├── feature/* ← Nouvelles features
└── bugfix/*  ← Corrections bugs
```

---

## 8️⃣ Checklist de Déploiement

Avant de pousser vers GitHub :

- [ ] Tester localement dans le navigateur
- [ ] Vérifier les liens (internes & externes)
- [ ] Tester sur mobile (DevTools F12)
- [ ] Vérifier la console pour les erreurs
- [ ] Actualiser le CHANGELOG.md
- [ ] Faire un commit propre et descriptif
- [ ] Vérifier le .gitignore

---

## 9️⃣ Problèmes Courants

### Le site n'est pas accessible

**Cause** : GitHub Pages pas activé
**Solution** : Vérifier Settings > Pages, s'assurer que la branche `main` est sélectionnée

### Les images ne s'affichent pas

**Cause** : Chemin relatif incorrect
**Solution** : Utiliser des URLs absolues ou des chemins relatifs corrects

### Les changements n'apparaissent pas

**Cause** : Cache navigateur
**Solution** : Hard refresh (Ctrl+F5 ou Cmd+Shift+R)

---

## 🔟 Ressources

- [GitHub Docs - Pages](https://docs.github.com/en/pages)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [Git Cheat Sheet](https://github.github.com/training-kit/)

---

## ❓ Questions ?

Contactez Artemys Belgium :
- 📧 ask@artemys-belgium.be
- 📞 +32 2 376 43 31

---

**Bonne chance avec votre déploiement ! 🚀**
