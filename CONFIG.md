# ⚙️ Configuration Multi-Sociétés - Guide Complet

## 📋 Vue d'ensemble

**Version** : 1.3.0
**Date** : 4 novembre 2025

À partir de la version 1.3.0, le système d'inscription est **configurable** et **réutilisable pour plusieurs sociétés**.

Toute la configuration se fait via le fichier **`config.json`** :
- Nom de la société
- Logo et couleurs
- Adresse et contacts
- Destinataires des emails (jusqu'à 4)
- Textes du formulaire
- URL du webhook Google Apps Script

---

## 🎯 Cas d'usage

Ce système multi-sociétés permet de :

1. **Réutiliser le même code** pour différentes sociétés
2. **Changer facilement** le branding (logo, couleurs)
3. **Configurer les destinataires** sans toucher au code
4. **Déployer rapidement** pour un nouveau client
5. **Maintenir plusieurs configurations** en parallèle

---

## 📁 Structure du fichier config.json

```json
{
  "company": {
    "name": "Nom de la société",
    "fullName": "Raison sociale complète",
    "website": "https://www.example.com",
    "logo": "https://example.com/logo.png",
    "description": "Description courte"
  },
  "contact": {
    "email": "contact@example.com",
    "phone": "+XX X XXX XX XX",
    "address": {
      "street": "Rue et numéro",
      "city": "Ville",
      "postalCode": "Code postal",
      "country": "Pays"
    }
  },
  "branding": {
    "primaryColor": "#0066CC",
    "secondaryColor": "#003D7A",
    "accentColor": "#F39C12",
    "successColor": "#27AE60",
    "errorColor": "#E74C3C"
  },
  "form": {
    "title": "Titre de la formation",
    "subtitle": "Sous-titre descriptif",
    "description": "Description complète",
    "successMessage": "Message après inscription réussie",
    "consentText": "Texte de consentement obligatoire"
  },
  "notifications": {
    "recipients": [
      { "name": "Contact 1", "email": "contact1@example.com", "role": "Rôle" },
      { "name": "Contact 2", "email": "contact2@example.com", "role": "Rôle" }
    ],
    "emailSubject": "Sujet de l'email - {{company.name}}",
    "sendCopyToRegistrant": false
  },
  "googleSheet": {
    "sheetId": "ID_DU_GOOGLE_SHEET",
    "scriptUrl": "https://script.google.com/macros/s/.../exec"
  },
  "features": {
    "captcha": { "enabled": false },
    "analytics": { "enabled": false },
    "calendarSync": { "enabled": false, "note": "Future feature" }
  },
  "limits": {
    "maxParticipants": 16,
    "showRemainingPlaces": false
  }
}
```

---

## 🔧 Paramètres détaillés

### 1. Section `company` - Informations société

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `name` | String | ✅ | Nom court de la société (affiché partout) |
| `fullName` | String | ⚪ | Raison sociale complète |
| `website` | String (URL) | ⚪ | Site web de la société |
| `logo` | String (URL) | ✅ | URL du logo (PNG/SVG avec fond transparent recommandé) |
| `description` | String | ⚪ | Description courte de l'activité |

**Exemple** :
```json
"company": {
  "name": "Artemys Belgium",
  "fullName": "Artemys Belgium SPRL",
  "website": "https://www.artemys-belgium.be/",
  "logo": "https://www.artemys-belgium.be/wp-content/uploads/2023/12/Artemys-Belgium_A_Transparent.png",
  "description": "Expert en transformation digitale et intelligence artificielle"
}
```

---

### 2. Section `contact` - Coordonnées

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `email` | String (email) | ✅ | Email général de contact |
| `phone` | String | ✅ | Téléphone avec indicatif international |
| `address.street` | String | ⚪ | Rue et numéro |
| `address.city` | String | ⚪ | Ville |
| `address.postalCode` | String | ⚪ | Code postal |
| `address.country` | String | ⚪ | Pays |

**Exemple** :
```json
"contact": {
  "email": "ask@artemys-belgium.be",
  "phone": "+32 2 376 43 31",
  "address": {
    "street": "Boulevard Baudouin 1er, 25",
    "city": "Louvain-la-Neuve",
    "postalCode": "B-1348",
    "country": "Belgique"
  }
}
```

---

### 3. Section `branding` - Couleurs et identité visuelle

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `primaryColor` | String (hex) | ✅ | Couleur principale (boutons, liens) |
| `secondaryColor` | String (hex) | ✅ | Couleur secondaire (header, footer) |
| `accentColor` | String (hex) | ⚪ | Couleur d'accentuation (éléments spéciaux) |
| `successColor` | String (hex) | ⚪ | Couleur pour messages de succès |
| `errorColor` | String (hex) | ⚪ | Couleur pour messages d'erreur |

**Format** : Couleurs en hexadécimal avec `#` (ex: `#0066CC`)

**Exemple** :
```json
"branding": {
  "primaryColor": "#0066CC",
  "secondaryColor": "#003D7A",
  "accentColor": "#F39C12",
  "successColor": "#27AE60",
  "errorColor": "#E74C3C"
}
```

**Outil recommandé** : [Coolors.co](https://coolors.co/) pour générer des palettes de couleurs harmonieuses.

---

### 4. Section `form` - Textes du formulaire

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `title` | String | ✅ | Titre principal affiché sur le formulaire |
| `subtitle` | String | ✅ | Sous-titre descriptif |
| `description` | String | ⚪ | Description longue (si nécessaire) |
| `successMessage` | String | ✅ | Message affiché après inscription réussie |
| `consentText` | String | ✅ | Texte de la case de consentement obligatoire |

**Exemple** :
```json
"form": {
  "title": "Formation Intelligence Artificielle",
  "subtitle": "Acculturation à l'Intelligence Artificielle pour Entreprises",
  "description": "Une journée complète pour comprendre et maîtriser l'IA dans votre contexte professionnel",
  "successMessage": "Inscription enregistrée avec succès ! Nous vous contactons dans les 24h.",
  "consentText": "J'accepte d'être contacté(e) concernant cette formation *"
}
```

---

### 5. Section `notifications` - Destinataires emails 🔥 **NOUVEAU v1.3.0**

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `recipients` | Array | ✅ | **Liste des destinataires (max 4)** |
| `recipients[].name` | String | ⚪ | Nom du contact |
| `recipients[].email` | String (email) | ✅ | Adresse email du destinataire |
| `recipients[].role` | String | ⚪ | Rôle/fonction du contact |
| `emailSubject` | String | ✅ | Sujet de l'email de notification |
| `sendCopyToRegistrant` | Boolean | ⚪ | Future feature : envoyer copie à l'inscrit |

**⚠️ Important** :
- **Maximum 4 destinataires** supportés
- Utiliser `{{company.name}}` dans `emailSubject` pour insérer dynamiquement le nom de la société
- Tous les destinataires reçoivent le **même email** avec toutes les informations

**Exemple avec 2 destinataires** :
```json
"notifications": {
  "recipients": [
    {
      "name": "Pierre",
      "email": "pierre2db@gmail.com",
      "role": "Développeur / Contact technique"
    },
    {
      "name": "Thierry Bodson",
      "email": "Thierry.BODSON@artemys-belgium.be",
      "role": "Responsable formation"
    }
  ],
  "emailSubject": "Nouvelle inscription - Formation IA {{company.name}}",
  "sendCopyToRegistrant": false
}
```

**Exemple avec 4 destinataires** :
```json
"notifications": {
  "recipients": [
    { "name": "Contact 1", "email": "contact1@example.com", "role": "Responsable commercial" },
    { "name": "Contact 2", "email": "contact2@example.com", "role": "Responsable formation" },
    { "name": "Contact 3", "email": "contact3@example.com", "role": "Assistant administratif" },
    { "name": "Contact 4", "email": "contact4@example.com", "role": "Directeur" }
  ],
  "emailSubject": "Nouvelle inscription - Formation IA {{company.name}}"
}
```

---

### 6. Section `googleSheet` - Configuration technique

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `sheetId` | String | ✅ | ID du Google Sheet (dans l'URL) |
| `scriptUrl` | String (URL) | ✅ | URL complète du webhook Google Apps Script |

**Comment trouver ces valeurs ?**

**sheetId** :
- URL du Sheet : `https://docs.google.com/spreadsheets/d/`**`1a1pjMqzqpbaDyW7WGsnlBuiKO6eT6s4UJ1gLnkjpJ4k`**`/edit`
- L'ID est la partie en gras entre `/d/` et `/edit`

**scriptUrl** :
- Après déploiement du Google Apps Script, copier l'URL générée
- Format : `https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxx/exec`

**Exemple** :
```json
"googleSheet": {
  "sheetId": "1a1pjMqzqpbaDyW7WGsnlBuiKO6eT6s4UJ1gLnkjpJ4k",
  "scriptUrl": "https://script.google.com/macros/s/AKfycbwyPsRE4NMzqz_oYvq2WFpRMrp4tIRSMm7KcbBLiN3w2UijYmAFw0IYNURO4SnPF9sC/exec"
}
```

---

### 7. Section `features` - Fonctionnalités optionnelles

| Champ | Type | Description |
|-------|------|-------------|
| `captcha.enabled` | Boolean | Activer Google reCAPTCHA (v1.4.0+) |
| `captcha.siteKey` | String | Clé site reCAPTCHA |
| `analytics.enabled` | Boolean | Activer Google Analytics |
| `analytics.gaTrackingId` | String | ID de suivi GA4 |
| `calendarSync.enabled` | Boolean | Future : sync Google Calendar |

**Exemple** :
```json
"features": {
  "captcha": {
    "enabled": false,
    "siteKey": ""
  },
  "analytics": {
    "enabled": false,
    "gaTrackingId": ""
  },
  "calendarSync": {
    "enabled": false,
    "note": "Future feature - Google Calendar synchronization"
  }
}
```

---

### 8. Section `limits` - Limitations

| Champ | Type | Description |
|-------|------|-------------|
| `maxParticipants` | Number | Nombre maximum de participants |
| `showRemainingPlaces` | Boolean | Afficher places restantes sur formulaire |

**Exemple** :
```json
"limits": {
  "maxParticipants": 16,
  "showRemainingPlaces": false
}
```

---

## 🚀 Guide de déploiement pour une nouvelle société

### Étape 1 : Dupliquer config.json

```bash
cp config.json config-nouvelle-societe.json
```

### Étape 2 : Modifier les paramètres

Éditer `config-nouvelle-societe.json` et changer :
- `company.name` → Nom de la nouvelle société
- `company.logo` → URL du nouveau logo
- `branding.primaryColor` → Couleur principale de la société
- `branding.secondaryColor` → Couleur secondaire
- `contact.email` → Email de contact
- `contact.phone` → Téléphone
- `notifications.recipients` → Nouveaux destinataires (max 4)
- `form.title` → Nouveau titre de formation
- `form.subtitle` → Nouveau sous-titre

### Étape 3 : Créer un nouveau Google Sheet

1. Aller sur https://sheets.google.com
2. Créer un nouveau Google Sheet
3. Créer les colonnes :
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

4. Copier l'ID du Sheet depuis l'URL

### Étape 4 : Déployer le Google Apps Script

1. Dans le Google Sheet : **Extensions** → **Apps Script**
2. Copier tout le code de `google-apps-script-v1.3.js`
3. Sauvegarder (💾)
4. **Déployer** → **Nouveau déploiement**
   - Type : Application Web
   - Exécuter en tant que : Moi
   - Qui peut accéder : Tout le monde
5. **Copier l'URL générée**

### Étape 5 : Mettre à jour config-nouvelle-societe.json

```json
"googleSheet": {
  "sheetId": "NOUVEAU_ID_COPIÉ",
  "scriptUrl": "NOUVELLE_URL_COPIÉE"
}
```

### Étape 6 : Tester

1. Renommer `config.json` en `config-artemys.json` (backup)
2. Renommer `config-nouvelle-societe.json` en `config.json`
3. Ouvrir `inscription.html` dans le navigateur
4. Vérifier que le logo, les couleurs et les textes sont corrects
5. Remplir le formulaire avec des données de test
6. Vérifier :
   - ✅ Données dans le Google Sheet
   - ✅ Emails reçus par les destinataires configurés

### Étape 7 : Déployer sur GitHub Pages

```bash
git add config.json
git commit -m "[FEATURE] Configuration pour [Nom Société]"
git push
```

Attendre 2-3 minutes pour la mise à jour de GitHub Pages.

---

## 🔄 Basculer entre plusieurs configurations

Si vous gérez plusieurs sociétés, vous pouvez maintenir plusieurs fichiers de config :

```
config-artemys.json
config-societe2.json
config-societe3.json
```

**Pour basculer** :
```bash
# Activer config société 2
cp config-societe2.json config.json
git add config.json
git commit -m "[CONFIG] Activation configuration Société 2"
git push
```

**Alternative** : Créer des branches Git par société
```bash
git checkout -b artemys-belgium
git checkout -b societe2
git checkout -b societe3
```

---

## 🧪 Tests recommandés

Après chaque modification de config.json :

### Test 1 : Chargement de la configuration
1. Ouvrir `inscription.html` dans le navigateur
2. Ouvrir la console développeur (F12)
3. Vérifier absence d'erreurs : "Erreur lors du chargement de la configuration"
4. Inspecter visuellement :
   - ✅ Logo correct
   - ✅ Couleurs correctes
   - ✅ Titres corrects

### Test 2 : Envoi formulaire
1. Remplir le formulaire avec données de test
2. Soumettre
3. Vérifier :
   - ✅ Message de succès personnalisé affiché
   - ✅ Données dans Google Sheet
   - ✅ Emails reçus par tous les destinataires

### Test 3 : Validation JSON
Utiliser un validateur JSON en ligne :
- https://jsonlint.com/
- Copier-coller votre config.json
- Vérifier absence d'erreurs de syntaxe

---

## ⚠️ Erreurs courantes et solutions

### Erreur : "Erreur lors du chargement de la configuration"
**Cause** : Fichier config.json invalide ou introuvable
**Solution** :
- Vérifier que `config.json` existe à la racine du projet
- Valider la syntaxe JSON sur https://jsonlint.com/
- Vérifier les guillemets et virgules

### Erreur : Logo ne s'affiche pas
**Cause** : URL du logo incorrecte ou serveur bloque CORS
**Solution** :
- Vérifier que l'URL est accessible (ouvrir dans navigateur)
- Utiliser une URL HTTPS
- Héberger le logo sur un CDN ou GitHub

### Erreur : Emails non reçus
**Cause** : Adresses email incorrectes ou webhook non mis à jour
**Solution** :
- Vérifier les adresses dans `notifications.recipients`
- Vérifier `googleSheet.scriptUrl` correspond au déploiement actif
- Tester avec `testDoPost()` dans Google Apps Script

### Erreur : Couleurs ne changent pas
**Cause** : Cache du navigateur
**Solution** :
- Forcer le rechargement : Ctrl+Shift+R (Windows) ou Cmd+Shift+R (Mac)
- Vider le cache du navigateur
- Tester en navigation privée

---

## 📚 Exemples de configurations

### Exemple 1 : Artemys Belgium (actuel)
Voir `config.json` à la racine du projet

### Exemple 2 : Configuration minimaliste
```json
{
  "company": {
    "name": "Ma Société",
    "logo": "https://example.com/logo.png"
  },
  "branding": {
    "primaryColor": "#007BFF",
    "secondaryColor": "#0056B3"
  },
  "form": {
    "title": "Formation IA",
    "subtitle": "Inscription",
    "successMessage": "Merci ! Nous vous contactons bientôt.",
    "consentText": "J'accepte d'être contacté *"
  },
  "notifications": {
    "recipients": [
      { "email": "contact@example.com" }
    ],
    "emailSubject": "Nouvelle inscription"
  },
  "googleSheet": {
    "sheetId": "VOTRE_SHEET_ID",
    "scriptUrl": "VOTRE_SCRIPT_URL"
  }
}
```

### Exemple 3 : Configuration avec 4 destinataires
```json
{
  "notifications": {
    "recipients": [
      { "name": "Directeur", "email": "directeur@example.com", "role": "Direction" },
      { "name": "Responsable RH", "email": "rh@example.com", "role": "Ressources Humaines" },
      { "name": "Responsable Formation", "email": "formation@example.com", "role": "Formation" },
      { "name": "Assistant", "email": "assistant@example.com", "role": "Administratif" }
    ],
    "emailSubject": "Nouvelle inscription - Formation IA {{company.name}}"
  }
}
```

---

## 🔐 Sécurité

### ⚠️ Données sensibles

**NE PAS COMMITTER** sur GitHub public :
- ❌ Clés API privées
- ❌ Mots de passe
- ❌ IDs de Google Sheets privés (si contient données personnelles)

**Peut être committé** :
- ✅ Nom de la société
- ✅ Logo (URL publique)
- ✅ Couleurs
- ✅ Adresses email génériques de contact
- ✅ URL du webhook Apps Script (déjà publique)

### Protection du Google Sheet

Pour protéger les données personnelles :
1. Google Sheet : **Partage** → Limiter l'accès
2. Ne partager qu'avec les personnes autorisées
3. Considérer l'export régulier et suppression des anciennes données (RGPD)

---

## 📞 Support

**Documentation complète** :
- README.md - Vue d'ensemble du projet
- GUIDE_COMPLET_GOOGLE_SHEET.md - Configuration Google Sheet
- DEBUG_EMAILS.md - Dépannage emails
- APIS_ET_CLES.md - Référence APIs et URLs

**Contact développeur** : pierre2db@gmail.com

---

## 🎓 Évolutions futures

### v1.4.0 (Planifié)
- ✅ Google reCAPTCHA anti-spam
- ✅ Email de confirmation automatique à l'inscrit
- ✅ Validation avancée des emails

### v1.5.0 (Planifié)
- ✅ Synchronisation Google Calendar
- ✅ Gestion automatique des places restantes
- ✅ Dashboard d'administration

### v2.0.0 (Vision)
- ✅ Interface de configuration web (plus besoin d'éditer JSON)
- ✅ Multi-langues
- ✅ Paiement en ligne

---

**Document créé le** : 4 novembre 2025
**Auteur** : Claude Code
**Version** : 1.3.0
**Statut** : Documentation officielle système multi-sociétés
