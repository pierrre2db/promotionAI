# 🤝 Guide de Contribution

Merci de votre intérêt pour contribuer au projet **Formation IA Artemys Belgium** !

Ce guide explique comment contribuer de manière professionnelle.

---

## 🎯 Workflow Git (OBLIGATOIRE)

### ⚠️ Ne JAMAIS committer directement sur `main`

**Processus à suivre** :

1. **Créer une branche**
   ```bash
   git checkout -b feature/ma-nouvelle-feature
   ```

2. **Faire les modifications**

3. **Committer**
   ```bash
   git add .
   git commit -m "[FEATURE] Description claire"
   ```

4. **Pousser**
   ```bash
   git push -u origin feature/ma-nouvelle-feature
   ```

5. **Créer une Pull Request sur GitHub**

6. **Attendre la review et le merge**

**Voir GIT_WORKFLOW.md pour les détails complets.**

---

## 📝 Standards de Code

### HTML
- ✅ Indentation : 4 espaces
- ✅ Balises en minuscules
- ✅ Attributs avec guillemets doubles
- ✅ Commentaires clairs pour les sections

### CSS
- ✅ Variables CSS pour les couleurs (`:root`)
- ✅ Classes descriptives (BEM recommandé)
- ✅ Mobile-first (responsive design obligatoire)

### JavaScript
- ✅ ES6+ moderne (`const`, `let`, arrow functions)
- ✅ Pas de `var`
- ✅ Commentaires pour la logique complexe
- ✅ Gestion d'erreurs avec try/catch

---

## 📋 Convention de Commits

**Format** :
```
[TYPE] Titre court (max 50 caractères)

Description optionnelle plus détaillée.
```

**Types** :
- `[FEATURE]` - Nouvelle fonctionnalité
- `[FIX]` - Correction de bug
- `[DOCS]` - Documentation
- `[STYLE]` - Changements CSS/UI
- `[REFACTOR]` - Refactoring
- `[TEST]` - Tests
- `[CHORE]` - Maintenance

**Exemples** :
```bash
git commit -m "[FEATURE] Add Google reCAPTCHA integration"
git commit -m "[FIX] Resolve email sending issue"
git commit -m "[DOCS] Update API reference with new webhook URL"
```

---

## 🧪 Tests Obligatoires

Avant de créer une Pull Request, vérifier :

- [ ] Le formulaire fonctionne sur Chrome, Firefox, Safari
- [ ] L'affichage est correct sur mobile
- [ ] Les données arrivent dans le Google Sheet
- [ ] Les emails sont envoyés (si applicable)
- [ ] Pas d'erreurs dans la console navigateur
- [ ] Pas de régression sur les fonctionnalités existantes

---

## 📚 Documentation à Mettre à Jour

Lors d'un changement important, mettre à jour :

- [ ] **README.md** si architecture modifiée
- [ ] **TODO_PROJET.md** pour l'état du projet
- [ ] **APIS_ET_CLES.md** si URLs/clés changent
- [ ] **CHANGELOG.md** avec les changements

---

## 🚀 Process de Pull Request

### Checklist avant de créer la PR

- [ ] Code testé localement
- [ ] Pas de `console.log()` oubliés
- [ ] Documentation mise à jour
- [ ] Commits atomiques et bien nommés
- [ ] Branche à jour avec `main`

### Template de PR

Utiliser ce template lors de la création :

```markdown
## Description
[Description claire du changement]

## Type de changement
- [ ] Feature
- [ ] Bug fix
- [ ] Documentation
- [ ] Refactoring

## Tests effectués
- [ ] Test 1
- [ ] Test 2

## Screenshots (si UI)
[Images]

## Documentation mise à jour
- [ ] README.md
- [ ] APIS_ET_CLES.md
- [ ] TODO_PROJET.md
```

---

## 🏷️ Versioning

Utiliser **Semantic Versioning** :

- **v1.0.0** - Version majeure (breaking changes)
- **v1.1.0** - Version mineure (nouvelle feature)
- **v1.0.1** - Patch (bug fix)

**Créer un tag après chaque release** :
```bash
git tag -a v1.3.0 -m "Description de la release"
git push origin v1.3.0
```

---

## 🛡️ Sécurité

### Ne JAMAIS committer

- ❌ Clés API privées
- ❌ Mots de passe
- ❌ Tokens d'authentification
- ❌ Données personnelles (RGPD)

### À la place

- ✅ Documenter dans APIS_ET_CLES.md (fichier local)
- ✅ Utiliser des variables d'environnement
- ✅ Référencer les URLs publiques seulement

---

## 📞 Besoin d'Aide ?

- **Documentation** : Consulter GIT_WORKFLOW.md
- **Questions** : Ouvrir une issue sur GitHub
- **Contact** : pierre2db@gmail.com

---

## ⚖️ Code de Conduite

- 🤝 Respecter les autres contributeurs
- 💬 Communication claire et professionnelle
- 🎯 Focus sur la qualité du code
- 📚 Documenter pour les autres

---

## 🎉 Merci !

Chaque contribution, petite ou grande, est appréciée ! 🙏

---

**Document créé le** : 3 novembre 2025
**Version** : 1.0
