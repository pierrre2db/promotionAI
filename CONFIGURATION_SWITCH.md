# 🔄 Guide de Basculement entre Configurations

## 📋 Vue d'ensemble

Ce document explique comment basculer entre différentes configurations de sociétés.

**Date de création** : 4 novembre 2025
**Version** : 1.3.0

---

## 📚 Configurations disponibles

### 1. Artemys Belgium (Production actuelle)
- **Fichier** : `config.json` (actif)
- **Backup** : `config-artemys.json` (à créer si besoin)
- **Contact** : Thierry Bodson + Pierre
- **Couleurs** : Bleu Artemys (#0066CC)
- **Destinataires** : 2

### 2. StratAI
- **Fichier** : `config-stratai.json`
- **Contact** : Pierre Dobbeleer
- **Adresse** : 13 rue Mottiaux, 5100 Jambes
- **Couleurs** : Violet/Rose (#7C3AED)
- **Destinataires** : 1

---

## 🔄 Méthode 1 : Basculement manuel (Recommandé pour test)

### Étape 1 : Sauvegarder la configuration actuelle

```bash
# Sauvegarder Artemys Belgium
cp config.json config-artemys.json
git add config-artemys.json
git commit -m "[CONFIG] Backup configuration Artemys Belgium"
```

### Étape 2 : Activer la nouvelle configuration

```bash
# Activer StratAI
cp config-stratai.json config.json
git add config.json
git commit -m "[CONFIG] Activation configuration StratAI"
git push
```

### Étape 3 : Attendre mise à jour GitHub Pages

⏱️ **2-3 minutes** pour que GitHub Pages déploie les changements.

### Étape 4 : Tester

1. Ouvrir : https://pierrre2db.github.io/promotionAI/inscription.html
2. Vérifier :
   - ✅ Logo StratAI affiché (placeholder violet)
   - ✅ Couleurs violet/rose
   - ✅ Titre "Stratégie IA pour Entreprises Innovantes"
   - ✅ Texte de consentement "StratAI"
3. Remplir le formulaire de test
4. Vérifier email reçu par pierre2db@gmail.com

### Étape 5 : Revenir à Artemys (si test uniquement)

```bash
# Restaurer Artemys Belgium
cp config-artemys.json config.json
git add config.json
git commit -m "[CONFIG] Restauration configuration Artemys Belgium"
git push
```

---

## 🌳 Méthode 2 : Branches Git (Recommandé pour production)

### Stratégie : Une branche par société

Cette méthode est **recommandée** si vous gérez plusieurs clients en production simultanément.

### Setup initial

```bash
# Créer une branche pour Artemys Belgium
git checkout -b company/artemys-belgium
cp config.json config-artemys.json
git add config-artemys.json
git commit -m "[CONFIG] Configuration Artemys Belgium sur branche dédiée"
git push -u origin company/artemys-belgium

# Créer une branche pour StratAI
git checkout -b company/stratai
cp config-stratai.json config.json
git add config.json
git commit -m "[CONFIG] Configuration StratAI sur branche dédiée"
git push -u origin company/stratai

# Revenir sur main
git checkout main
```

### Basculer entre sociétés

```bash
# Pour déployer Artemys Belgium
git checkout company/artemys-belgium
git merge main  # Récupérer les dernières mises à jour du code
git push

# Pour déployer StratAI
git checkout company/stratai
git merge main  # Récupérer les dernières mises à jour du code
git push
```

### Avantages de cette méthode

✅ **Isolement** : Chaque société a sa branche dédiée
✅ **Historique clair** : Les changements de config sont séparés
✅ **Déploiement rapide** : `git checkout + git push`
✅ **Rollback facile** : `git checkout autre-branche`
✅ **Mises à jour code** : `git merge main` pour synchroniser

---

## 🆕 Créer une configuration pour un nouveau client

### Étape 1 : Dupliquer le template

```bash
cp config-stratai.json config-nouveau-client.json
```

### Étape 2 : Éditer la configuration

Ouvrir `config-nouveau-client.json` et modifier :

```json
{
  "company": {
    "name": "Nom Client",
    "fullName": "Raison sociale complète",
    "website": "https://www.client.com",
    "logo": "URL_DU_LOGO",
    "description": "Description"
  },
  "contact": {
    "email": "contact@client.com",
    "phone": "+32 X XXX XX XX",
    "address": {
      "street": "Adresse",
      "city": "Ville",
      "postalCode": "Code postal",
      "country": "Belgique"
    }
  },
  "branding": {
    "primaryColor": "#COULEUR1",
    "secondaryColor": "#COULEUR2"
  },
  "notifications": {
    "recipients": [
      { "name": "Contact", "email": "email@client.com", "role": "Rôle" }
    ]
  }
}
```

### Étape 3 : Créer le Google Sheet

1. **Créer un nouveau Google Sheet**
   - https://sheets.google.com → Nouveau
   - Nom : "Inscriptions Formation IA - [Nom Client]"

2. **Créer les colonnes** (même structure) :
   - A : Horodateur
   - B : Prénom
   - C : Nom
   - D : Email
   - E : Téléphone
   - F : Entreprise
   - G : Fonction
   - H : Secteur
   - I : Attentes
   - J : Expérience IA
   - K : Newsletter

3. **Copier l'ID du Sheet**
   - URL : `https://docs.google.com/spreadsheets/d/`**`ID_ICI`**`/edit`

### Étape 4 : Déployer le Google Apps Script

1. **Extensions** → **Apps Script**
2. **Copier le code** de `google-apps-script-v1.3.js`
3. **Sauvegarder**
4. **Déployer** → Nouveau déploiement
   - Type : Application Web
   - Exécuter en tant que : Moi
   - Qui peut accéder : Tout le monde
5. **Copier l'URL générée**

### Étape 5 : Compléter la configuration

Dans `config-nouveau-client.json` :

```json
"googleSheet": {
  "sheetId": "ID_COPIÉ_ÉTAPE_3",
  "scriptUrl": "URL_COPIÉE_ÉTAPE_4"
}
```

### Étape 6 : Tester

```bash
# Activer la nouvelle config
cp config-nouveau-client.json config.json

# Test local (si serveur local)
# Ou push pour tester sur GitHub Pages
git add config-nouveau-client.json config.json
git commit -m "[CONFIG] Nouvelle configuration [Nom Client]"
git push
```

---

## 🎨 Personnalisation du branding

### Choisir une palette de couleurs

**Outils recommandés** :
- [Coolors.co](https://coolors.co/) - Générateur de palettes
- [Adobe Color](https://color.adobe.com/) - Roue chromatique
- [Material Design Colors](https://materialui.co/colors/) - Palettes prêtes

**Palettes suggérées par secteur** :

| Secteur | primaryColor | secondaryColor | Exemple |
|---------|--------------|----------------|---------|
| **Tech / IT** | #7C3AED (violet) | #5B21B6 (violet foncé) | StratAI |
| **Finance** | #1E40AF (bleu foncé) | #1E3A8A (bleu nuit) | - |
| **Santé** | #059669 (vert) | #047857 (vert foncé) | - |
| **Éducation** | #DC2626 (rouge) | #991B1B (rouge foncé) | - |
| **Consulting** | #0066CC (bleu) | #003D7A (bleu foncé) | Artemys |

### Trouver le logo

**Option 1 : Logo existant**
```json
"logo": "https://www.client.com/logo.png"
```

**Option 2 : Placeholder temporaire**
```json
"logo": "https://via.placeholder.com/200x60/7C3AED/FFFFFF?text=NomSociété"
```

**Option 3 : Héberger sur GitHub**
1. Créer dossier `/images/logos/`
2. Ajouter `logo-client.png`
3. URL : `https://pierrre2db.github.io/promotionAI/images/logos/logo-client.png`

---

## 📊 Tableau de comparaison des configurations

| Paramètre | Artemys Belgium | StratAI |
|-----------|-----------------|---------|
| **Nom** | Artemys Belgium | StratAI |
| **Ville** | Louvain-la-Neuve | Jambes |
| **Couleur principale** | #0066CC (bleu) | #7C3AED (violet) |
| **Destinataires** | 2 | 1 |
| **Max participants** | 16 | 12 |
| **Contact principal** | Thierry Bodson | Pierre Dobbeleer |
| **Email contact** | ask@artemys-belgium.be | pierre2db@gmail.com |

---

## 🧪 Checklist de test après basculement

Après avoir activé une nouvelle configuration :

### Tests visuels
- [ ] Logo affiché correctement
- [ ] Couleurs primaire et secondaire appliquées
- [ ] Titre et sous-titre corrects
- [ ] Adresse dans le footer correcte
- [ ] Message de succès personnalisé

### Tests fonctionnels
- [ ] Formulaire se soumet correctement
- [ ] Données arrivent dans le bon Google Sheet
- [ ] Emails envoyés aux bons destinataires
- [ ] Sujet de l'email contient le bon nom de société
- [ ] Contenu de l'email mentionne la bonne société

### Tests multi-devices
- [ ] Affichage correct sur desktop
- [ ] Affichage correct sur mobile
- [ ] Affichage correct sur tablette

---

## 🚨 Résolution de problèmes

### Problème : Logo ne s'affiche pas

**Causes possibles** :
1. URL du logo incorrecte
2. Serveur bloque CORS
3. Image supprimée/déplacée

**Solutions** :
1. Vérifier l'URL dans le navigateur
2. Utiliser un placeholder temporaire
3. Héberger le logo sur GitHub Pages

### Problème : Couleurs non appliquées

**Cause** : Cache du navigateur

**Solution** :
- Forcer le rechargement : **Ctrl+Shift+R** (Windows) ou **Cmd+Shift+R** (Mac)
- Vider le cache navigateur
- Tester en navigation privée

### Problème : Emails vont aux mauvais destinataires

**Cause** : Google Apps Script pas mis à jour ou cache

**Solution** :
1. Vérifier `config.json` → `notifications.recipients`
2. Ouvrir le Google Sheet
3. Extensions → Apps Script → Vérifier le code
4. Tester avec `testDoPost()` dans Apps Script

### Problème : Données vont dans le mauvais Sheet

**Cause** : `googleSheet.scriptUrl` incorrect

**Solution** :
1. Vérifier le `scriptUrl` dans `config.json`
2. Tester l'URL dans le navigateur (doit afficher "Webhook actif - Version 1.3.0")
3. Créer un nouveau déploiement si nécessaire

---

## 📞 Support

**Questions sur la configuration** :
- Consulter **CONFIG.md** (guide complet 900+ lignes)
- Consulter **APIS_ET_CLES.md** (référence URLs)

**Contact développeur** : pierre2db@gmail.com

---

## 🔒 Sécurité et bonnes pratiques

### ⚠️ Attention aux données sensibles

**Avant de committer une nouvelle configuration** :

✅ **Vérifier que le fichier ne contient PAS** :
- ❌ Clés API privées
- ❌ Mots de passe
- ❌ Tokens d'authentification
- ❌ IDs de Sheets contenant données personnelles sensibles

✅ **Peut être committé** :
- ✅ Nom de la société
- ✅ Adresse postale publique
- ✅ Email de contact général
- ✅ Logo (URL publique)
- ✅ Couleurs
- ✅ URL du webhook (déjà publique)

### Protection des Google Sheets

Pour chaque nouveau client :
1. **Créer un Google Sheet dédié** (ne pas réutiliser)
2. **Limiter les accès** : Partage → Restreint
3. **Permissions** : Lecture seule pour le client, édition pour vous
4. **Backup régulier** : Export Excel/CSV hebdomadaire

---

## 📈 Statistiques d'utilisation

**Suivi recommandé** (à implémenter v1.4.0) :

| Métrique | Artemys | StratAI | Total |
|----------|---------|---------|-------|
| Inscriptions | - | - | - |
| Taux de conversion | - | - | - |
| Origine trafic | - | - | - |

---

**Document créé le** : 4 novembre 2025
**Auteur** : Claude Code
**Version** : 1.3.0
**Statut** : Guide officiel basculement multi-configurations
