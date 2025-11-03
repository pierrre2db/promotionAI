# 🔑 APIs et Clés - Projet Formation IA Artemys

## 📋 Vue d'ensemble

Ce document centralise toutes les informations sur les APIs, clés, URLs et identifiants utilisés dans le projet.

**⚠️ SÉCURITÉ** : Ce fichier contient des informations sensibles. Ne pas partager publiquement.

**Date de création** : 3 novembre 2025
**Dernière mise à jour** : 3 novembre 2025 - 16h15

---

## 🌐 URLs PRINCIPALES

### Site web et pages

| Ressource | URL | Status |
|-----------|-----|--------|
| **Site production** | https://pierrre2db.github.io/promotionAI/ | ✅ Actif |
| **Page d'accueil** | https://pierrre2db.github.io/promotionAI/index.html | ✅ Actif |
| **Formulaire inscription HTML** | https://pierrre2db.github.io/promotionAI/inscription.html | ✅ Actif |
| **Formulaire Google Forms** | https://pierrre2db.github.io/promotionAI/inscription-forms.html | ⏸️ À configurer |
| **Repository GitHub** | https://github.com/pierrre2db/promotionAI | ✅ Actif |

---

## 📊 GOOGLE SHEET

### Informations principales

| Paramètre | Valeur |
|-----------|--------|
| **Nom** | Inscriptions Formation IA - Artemys |
| **URL** | https://docs.google.com/spreadsheets/d/1a1pjMqzqpbaDyW7WGsnlBuiKO6eT6s4UJ1gLnkjpJ4k/ |
| **ID du document** | `1a1pjMqzqpbaDyW7WGsnlBuiKO6eT6s4UJ1gLnkjpJ4k` |
| **Propriétaire** | pierre2db@gmail.com |
| **Nombre de colonnes** | 11 |
| **Status** | ✅ Opérationnel |

### Structure des colonnes

| # | Nom de la colonne | Type | Description |
|---|-------------------|------|-------------|
| A | Horodateur | Date/Heure | Date et heure de l'inscription |
| B | Prénom | Texte | Prénom du participant |
| C | Nom | Texte | Nom du participant |
| D | Email | Email | Adresse email du participant |
| E | Téléphone | Texte | Numéro de téléphone (facultatif) |
| F | Entreprise | Texte | Nom de l'entreprise |
| G | Fonction | Texte | Poste occupé |
| H | Secteur | Texte | Secteur d'activité |
| I | Attentes | Texte long | Attentes de formation |
| J | Expérience IA | Texte | Niveau : novice/debutant/intermediaire |
| K | Newsletter | Oui/Non | Consentement newsletter |

### Accès et permissions

| Utilisateur | Email | Rôle | Permissions |
|-------------|-------|------|-------------|
| **Pierre** | pierre2db@gmail.com | Propriétaire | Lecture, Écriture, Admin |
| **Thierry Bodson** | Thierry.BODSON@artemys-belgium.be | _(à configurer)_ | _(à configurer)_ |

---

## ⚙️ GOOGLE APPS SCRIPT

### Informations principales

| Paramètre | Valeur |
|-----------|--------|
| **Nom du projet** | FormationIA_Webhook |
| **Type** | Application Web (Web App) |
| **Status** | ✅ Déployé |
| **Fonction principale** | `doPost(e)` |
| **Fonction email** | `sendEmailNotification(data, timestamp)` |
| **Fonction test** | `testDoPost()` |

### URL de déploiement (Webhook)

```
https://script.google.com/macros/s/AKfycbxgyHeVvJk-GN7NfY0hakibz_yiM8cpEuNXeqnP2KEHk0jLOlBM3aFxCCtR1gqbi4fW/exec
```

| Composant | Détail |
|-----------|--------|
| **URL complète** | https://script.google.com/macros/s/AKfycbxgyHeVvJk-GN7NfY0hakibz_yiM8cpEuNXeqnP2KEHk0jLOlBM3aFxCCtR1gqbi4fW/exec |
| **ID du script** | `AKfycbxgyHeVvJk-GN7NfY0hakibz_yiM8cpEuNXeqnP2KEHk0jLOlBM3aFxCCtR1gqbi4fW` |
| **Type de déploiement** | Application Web |
| **Exécuter en tant que** | Propriétaire (pierre2db@gmail.com) |
| **Qui peut accéder** | Tout le monde (public) |
| **Méthode HTTP** | POST |
| **Mode CORS** | no-cors |

### Configuration email (dans le script)

```javascript
// Configuration actuelle (ligne 4 du script)
const EMAIL_RECIPIENTS = "pierre2db@gmail.com,Thierry.BODSON@artemys-belgium.be";
const EMAIL_SUBJECT = "Nouvelle inscription - Formation IA Artemys Belgium";
```

| Paramètre | Valeur |
|-----------|--------|
| **Destinataire 1** | pierre2db@gmail.com |
| **Destinataire 2** | Thierry.BODSON@artemys-belgium.be |
| **Sujet de l'email** | "Nouvelle inscription - Formation IA Artemys Belgium" |
| **Fonction d'envoi** | `MailApp.sendEmail()` (API Google native) |

### Accès au script

Pour accéder et modifier le script :
1. Ouvrir le Google Sheet : https://docs.google.com/spreadsheets/d/1a1pjMqzqpbaDyW7WGsnlBuiKO6eT6s4UJ1gLnkjpJ4k/
2. Menu **Extensions** → **Apps Script**
3. Le script s'ouvre dans un nouvel onglet

### Permissions accordées

Le script a accès à :
- ✅ Google Sheets (lecture/écriture)
- ✅ Gmail (envoi d'emails)
- ✅ Réception de requêtes HTTP externes

---

## 📧 CONFIGURATION EMAIL

### Destinataires des notifications

| Rôle | Nom | Email | Status |
|------|-----|-------|--------|
| **Développeur / Contact principal** | Pierre | pierre2db@gmail.com | ✅ Configuré |
| **Client / Responsable formation** | Thierry Bodson | Thierry.BODSON@artemys-belgium.be | ✅ Configuré |

### Format de l'email envoyé

```
Sujet : Nouvelle inscription - Formation IA Artemys Belgium

Corps :
Nouvelle inscription à la formation IA - Artemys Belgium
=======================================================

📅 Date d'inscription : [timestamp]

👤 INFORMATIONS PERSONNELLES
-----------------------------
Prénom : [prenom]
Nom : [nom]
Email : [email]
Téléphone : [telephone]

🏢 INFORMATIONS PROFESSIONNELLES
---------------------------------
Entreprise : [entreprise]
Fonction : [fonction]
Secteur : [secteur]

📝 FORMATION
------------
Attentes : [attentes]
Expérience IA : [experience]

📧 COMMUNICATION
----------------
Newsletter : [Oui/Non]

=======================================================

Pour consulter toutes les inscriptions :
[URL du Google Sheet]
```

---

## 🔧 GITHUB

### Repository

| Paramètre | Valeur |
|-----------|--------|
| **Nom du repository** | promotionAI |
| **Propriétaire** | pierrre2db |
| **URL HTTPS** | https://github.com/pierrre2db/promotionAI.git |
| **URL SSH** | git@github.com:pierrre2db/promotionAI.git |
| **Branche principale** | main |
| **Visibilité** | Public |

### GitHub Pages

| Paramètre | Valeur |
|-----------|--------|
| **URL du site** | https://pierrre2db.github.io/promotionAI/ |
| **Source** | Branche `main` / dossier racine `/` |
| **Status** | ✅ Actif |
| **Délai de mise à jour** | 2-3 minutes après un push |
| **HTTPS** | ✅ Activé par défaut |

### Derniers commits importants

```
856b338 - [FIX] Restore corrupted inscription.html file
525d338 - [DOCS] Update roadmap with phased approach
aeb7400 - [FEATURE] Add Google Forms integration documentation
ba9c967 - [DOCS] Add comprehensive project TODO and roadmap
c7885b3 - chore: set GOOGLE_SCRIPT_URL for registration form
080ef5b - [FEATURE] Configure Google Sheet email integration
```

---

## 🌍 INTÉGRATIONS EXTERNES

### Logo Artemys Belgium

| Paramètre | Valeur |
|-----------|--------|
| **URL de l'image** | https://www.artemys-belgium.be/wp-content/uploads/2023/12/Artemys-Belgium_A_Transparent.png |
| **Format** | PNG avec transparence |
| **Utilisation** | Headers du site et formulaires |
| **Hébergement** | Site Artemys Belgium |

### Site Artemys Belgium

| Paramètre | Valeur |
|-----------|--------|
| **URL principale** | https://www.artemys-belgium.be/ |
| **URL français** | https://www.artemys-belgium.be/fr/ |
| **Contact email** | ask@artemys-belgium.be |
| **Téléphone** | +32 2 376 43 31 |
| **Adresse** | Boulevard Baudouin 1er, 25 - B-1348 Louvain-la-Neuve |

---

## 🎨 IDENTITÉ VISUELLE

### Couleurs Artemys

```css
/* Couleurs principales */
--artemys-blue: #0066CC;        /* Bleu principal Artemys */
--artemys-dark: #003D7A;        /* Bleu foncé Artemys */
--accent-orange: #F39C12;       /* Orange accent */
--success-green: #27AE60;       /* Vert succès */
--error-red: #E74C3C;           /* Rouge erreur */

/* Couleurs de fond */
--background-light: #E8F0FF;    /* Bleu clair fond */
--background-gray: #f5f5f5;     /* Gris clair */
```

### Polices

```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

---

## 🔐 SÉCURITÉ ET ACCÈS

### Qui a accès à quoi ?

| Ressource | pierre2db@gmail.com | Thierry.BODSON@artemys-belgium.be | Public |
|-----------|---------------------|-----------------------------------|--------|
| **GitHub Repository** | ✅ Admin | ❌ | 👁️ Lecture seule |
| **GitHub Pages** | ✅ Admin | ❌ | ✅ Accès complet |
| **Google Sheet** | ✅ Propriétaire | ⚠️ À configurer | ❌ |
| **Google Apps Script** | ✅ Propriétaire | ❌ | ⚠️ Peut appeler le webhook |
| **Emails de notification** | ✅ Reçoit | ✅ Reçoit | ❌ |

### Données sensibles

⚠️ **Ne JAMAIS partager publiquement** :
- L'ID du Google Sheet : `1a1pjMqzqpbaDyW7WGsnlBuiKO6eT6s4UJ1gLnkjpJ4k`
- L'URL complète du webhook Apps Script
- Les données personnelles des inscrits (RGPD)

✅ **Peut être partagé publiquement** :
- URL du site : https://pierrre2db.github.io/promotionAI/
- URL du formulaire d'inscription
- Repository GitHub (déjà public)
- Adresse email de contact Artemys

---

## 📝 VARIABLES D'ENVIRONNEMENT / CONFIGURATION

### Dans inscription.html (ligne 442)

```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxgyHeVvJk-GN7NfY0hakibz_yiM8cpEuNXeqnP2KEHk0jLOlBM3aFxCCtR1gqbi4fW/exec';
```

### Dans Google Apps Script (lignes 4-5)

```javascript
const EMAIL_RECIPIENTS = "pierre2db@gmail.com,Thierry.BODSON@artemys-belgium.be";
const EMAIL_SUBJECT = "Nouvelle inscription - Formation IA Artemys Belgium";
```

---

## 🛠️ MAINTENANCE ET MISES À JOUR

### Comment mettre à jour l'URL du webhook ?

Si vous devez redéployer le script Apps Script :

1. **Dans Google Apps Script**, créer un nouveau déploiement
2. **Copier la nouvelle URL** du webhook
3. **Mettre à jour** `inscription.html` ligne 442
4. **Committer et pusher** sur GitHub
5. **Attendre 2-3 minutes** que GitHub Pages se mette à jour

### Comment changer les destinataires email ?

1. **Ouvrir le Google Sheet**
2. **Extensions** → **Apps Script**
3. **Modifier la ligne 4** : `const EMAIL_RECIPIENTS = "email1,email2"`
4. **Sauvegarder** (💾)
5. **Tester** avec la fonction `testDoPost()`

### Comment ajouter un champ au formulaire ?

1. **Modifier** `inscription.html` (ajouter le champ HTML)
2. **Modifier** le JavaScript (ligne ~334) pour collecter la nouvelle donnée
3. **Ajouter une colonne** dans le Google Sheet
4. **Modifier** le script Apps Script pour traiter le nouveau champ
5. **Tester** le formulaire

---

## 📊 ÉTAT DES SERVICES (3 novembre 2025 - 16h15)

| Service | Status | Dernière vérification | Notes |
|---------|--------|-----------------------|-------|
| **Site web GitHub Pages** | ✅ Opérationnel | 16h00 | - |
| **Formulaire HTML** | ✅ Opérationnel | 16h00 | Bug corrompu résolu |
| **Google Sheet** | ✅ Opérationnel | 16h00 | Données reçues correctement |
| **Apps Script Webhook** | ⚠️ Partiel | 16h00 | Webhook appelé, Sheet updaté |
| **Envoi d'emails** | ❌ Non fonctionnel | 16h00 | **PROBLÈME À RÉSOUDRE** |

---

## 🆘 PROBLÈME ACTUEL : Emails non envoyés

### Symptômes
- ✅ Formulaire fonctionne
- ✅ Données arrivent dans Google Sheet
- ❌ Aucun email envoyé aux destinataires

### Causes possibles
1. Fonction `sendEmailNotification()` non appelée
2. Erreur dans la fonction d'envoi
3. Permissions Gmail insuffisantes
4. Emails bloqués par Google (spam/sécurité)

### Actions à faire
1. Vérifier les logs du script Apps Script
2. Tester la fonction `testDoPost()` manuellement
3. Vérifier les permissions Gmail dans Apps Script
4. Consulter le guide GUIDE_COMPLET_GOOGLE_SHEET.md section dépannage

---

## 📞 CONTACTS

| Rôle | Nom | Email | Téléphone |
|------|-----|-------|-----------|
| **Développeur** | Pierre | pierre2db@gmail.com | - |
| **Client / Responsable** | Thierry Bodson | Thierry.BODSON@artemys-belgium.be | - |
| **Organisation** | Artemys Belgium | ask@artemys-belgium.be | +32 2 376 43 31 |

---

## 📚 DOCUMENTATION ASSOCIÉE

| Fichier | Description |
|---------|-------------|
| **APIS_ET_CLES.md** | Ce fichier - Référence complète |
| **TODO_PROJET.md** | État du projet et roadmap |
| **GUIDE_COMPLET_GOOGLE_SHEET.md** | Configuration Google Sheet/Apps Script |
| **GUIDE_TEST_FORMULAIRE.md** | Procédure de test |
| **GOOGLE_FORMS_SETUP.md** | Configuration Google Forms (Phase 2) |

---

**Dernière modification** : 3 novembre 2025 - 16h15
**Version** : 1.0
**Prochaine mise à jour** : Après résolution du problème d'emails
