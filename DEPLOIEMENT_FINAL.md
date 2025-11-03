# 🚀 DÉPLOIEMENT IMMÉDIAT

Voici les commandes à exécuter dans votre terminal local pour déployer sur GitHub :

```bash
# 1. Clone le repository local depuis votre machine
cd /chemin/vers/votre/projets
git clone https://github.com/pierre2db/promotionAI.git
cd promotionAI

# OU si vous avez déjà le dossier local :
cd /home/claude/promotionAI
git remote add origin https://github.com/pierre2db/promotionAI.git 2>/dev/null || true
git branch -M main
git push -u origin main
git push origin --tags
```

---

## 📍 LIENS D'ACCÈS

Une fois déployé sur GitHub, le site sera accessible à :

### 🌐 **URL de production**
```
https://pierre2db.github.io/promotionAI/
```

### 📄 **Pages disponibles**
- **Accueil** : https://pierre2db.github.io/promotionAI/
- **Inscription** : https://pierre2db.github.io/promotionAI/inscription.html

---

## 📋 ÉTAPES DE DÉPLOIEMENT

1. **Sur GitHub.com** :
   - Créer un nouveau repository : https://github.com/new
   - Nom : `promotionAI`
   - Public (obligatoire pour Pages)

2. **Push le code** (commands ci-dessus)

3. **Activer GitHub Pages** :
   - Settings > Pages
   - Source : `main` branch
   - Folder : `/root`
   - Save

4. **Attendre quelques minutes** (GitHub génère le site)

5. **Accéder à votre site** : https://pierre2db.github.io/promotionAI/

---

## ✨ CONTENU DÉPLOYÉ

✅ **index.html** - Page d'accueil avec appel à l'action
✅ **inscription.html** - Formulaire d'inscription complet
✅ **README.md** - Documentation
✅ **CHANGELOG.md** - Historique des versions
✅ **DEPLOY.md** - Guide de déploiement
✅ **.gitignore** - Fichiers à ignorer

---

## 🎯 FORMULAIRE D'INSCRIPTION

La page d'inscription collecte :
- ✅ Prénom / Nom
- ✅ Email / Téléphone
- ✅ Entreprise / Fonction
- ✅ Secteur d'activité
- ✅ Attentes de formation
- ✅ Niveau d'expérience IA
- ✅ Consentement & newsletter

Les données sont :
- Validées en front-end
- Affichées dans la console (prêt pour intégration backend)
- Prêtes pour envoyer à un service d'email/CRM

---

## 🔄 VERSIONING

**v1.1.0** - Ajout page d'inscription
```
c385100 [FEATURE] Add registration page with form
5c3d35c [DOCS] Add GitHub deployment guide
d10e863 [FEATURE] Initial release v1.0.0
```

À taguer : `git tag -a v1.1.0 -m "Add registration"`

---

**C'est prêt ! À vous de jouer ! 🎉**
