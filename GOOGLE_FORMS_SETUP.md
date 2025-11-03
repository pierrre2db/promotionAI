# 📝 GUIDE COMPLET - Configuration Google Forms

## 📋 CONTEXTE

Ce guide vous permet de créer un Google Forms pour les inscriptions à la formation IA, en parallèle du formulaire HTML existant. Cette approche hybride offre le meilleur des deux mondes.

**Date de création** : 3 novembre 2025
**Version** : 1.0

---

## 🎯 OBJECTIF

Créer un Google Forms qui :
- Collecte les mêmes 11 champs que le formulaire HTML
- S'intègre au Google Sheet existant (ou en crée un nouveau)
- Envoie des notifications email automatiques
- Peut être partagé facilement (lien, QR code, iframe)
- Offre des statistiques intégrées

---

## ⚡ ÉTAPES DE CRÉATION

### ÉTAPE 1 : Créer le formulaire Google Forms

1. **Aller sur Google Forms**
   - URL : https://forms.google.com
   - Connectez-vous avec le compte Google approprié (pierre2db@gmail.com)

2. **Créer un nouveau formulaire**
   - Cliquer sur le bouton **"+"** (Nouveau formulaire vierge)
   - Ou utiliser **"Vierge"** dans les modèles

3. **Paramétrer le titre et la description**
   ```
   Titre : Inscription - Formation Acculturation IA

   Description :
   Formation d'une demi-journée (4 heures) proposée par Artemys Belgium.

   📍 Lieu : Louvain-la-Neuve, Belgique
   👥 Maximum : 16 participants
   💡 Niveau : Aucun prérequis technique nécessaire

   Remplissez ce formulaire pour vous inscrire. Nous vous contacterons
   dans les 24h pour confirmer votre place.
   ```

---

### ÉTAPE 2 : Ajouter les champs (Questions)

#### Question 1 : Prénom
- **Type** : Réponse courte
- **Intitulé** : Prénom
- **Obligatoire** : ✅ Oui
- **Validation** : Aucune

#### Question 2 : Nom
- **Type** : Réponse courte
- **Intitulé** : Nom
- **Obligatoire** : ✅ Oui
- **Validation** : Aucune

#### Question 3 : Email
- **Type** : Réponse courte
- **Intitulé** : Adresse email
- **Obligatoire** : ✅ Oui
- **Validation** : ✅ Activer "Validation de la réponse"
  - Type : Adresse e-mail
  - Message d'erreur : "Veuillez saisir une adresse email valide"

#### Question 4 : Téléphone
- **Type** : Réponse courte
- **Intitulé** : Téléphone (facultatif)
- **Obligatoire** : ❌ Non
- **Texte d'aide** : "Format : +32 XXX XX XX XX"

#### Question 5 : Entreprise
- **Type** : Réponse courte
- **Intitulé** : Entreprise
- **Obligatoire** : ✅ Oui
- **Validation** : Aucune

#### Question 6 : Fonction
- **Type** : Réponse courte
- **Intitulé** : Fonction / Poste occupé
- **Obligatoire** : ✅ Oui
- **Validation** : Aucune

#### Question 7 : Secteur d'activité
- **Type** : Liste déroulante
- **Intitulé** : Secteur d'activité
- **Obligatoire** : ❌ Non
- **Options** :
  1. Technologie / IT
  2. Finance / Banque
  3. Commerce / Retail
  4. Santé
  5. Éducation
  6. Marketing / Communication
  7. Ressources Humaines
  8. Logistique / Transport
  9. Autre

#### Question 8 : Attentes
- **Type** : Paragraphe
- **Intitulé** : Qu'espérez-vous apprendre lors de cette formation ?
- **Obligatoire** : ✅ Oui
- **Texte d'aide** : "Décrivez brièvement vos attentes et objectifs"

#### Question 9 : Expérience avec l'IA
- **Type** : Choix multiple (une seule réponse)
- **Intitulé** : Quel est votre niveau d'expérience avec l'IA ?
- **Obligatoire** : ✅ Oui
- **Options** :
  - ⭕ Novice (jamais utilisé d'outil IA)
  - ⭕ Débutant (quelques essais ponctuels)
  - ⭕ Intermédiaire (utilisation régulière)

#### Question 10 : Consentement
- **Type** : Cases à cocher
- **Intitulé** : Consentements
- **Obligatoire** : ✅ Oui (pour la première case)
- **Options** :
  - ☑️ **J'accepte d'être contacté par Artemys Belgium concernant cette formation** (OBLIGATOIRE)

  > Configuration :
  > - Validation de la réponse : "Sélectionner au moins 1"
  > - Message d'erreur : "Vous devez accepter d'être contacté pour valider l'inscription"

#### Question 11 : Newsletter (séparée)
- **Type** : Cases à cocher
- **Intitulé** : Communication
- **Obligatoire** : ❌ Non
- **Options** :
  - ☑️ Je souhaite recevoir des informations sur les formations futures d'Artemys Belgium

---

### ÉTAPE 3 : Personnalisation du design

1. **Cliquer sur l'icône palette** 🎨 en haut à droite

2. **Choisir le thème**
   - **Couleur principale** : `#0066CC` (Bleu Artemys)
   - **Couleur d'arrière-plan** : `#E8F0FF` (Bleu clair)
   - **Style de police** : "Basic" ou "Modern"

3. **Ajouter une image d'en-tête**
   - Cliquer sur "Choisir une image"
   - Option A : Télécharger le logo Artemys
   - Option B : Utiliser l'URL : `https://www.artemys-belgium.be/wp-content/uploads/2023/12/Artemys-Belgium_A_Transparent.png`
   - Ajuster la position : Centré

---

### ÉTAPE 4 : Configurer les paramètres

1. **Cliquer sur l'icône engrenage** ⚙️ en haut à droite

2. **Onglet "Général"**
   - ✅ Collecter les adresses e-mail : **OUI**
   - ❌ Limiter à 1 réponse : **NON** (sauf si vous voulez éviter les doublons par compte Google)
   - ❌ Autoriser la modification après l'envoi : **NON**

3. **Onglet "Présentation"**
   - ✅ Afficher la barre de progression : **OUI**
   - ✅ Mélanger l'ordre des questions : **NON**
   - Message de confirmation personnalisé :
     ```
     ✅ Inscription envoyée avec succès !

     Merci pour votre inscription à la formation Acculturation IA.

     Nous vous contacterons dans les 24h pour confirmer votre place et
     vous communiquer les derniers détails pratiques.

     À très bientôt !

     L'équipe Artemys Belgium
     📞 +32 2 376 43 31
     ✉️ ask@artemys-belgium.be
     ```
   - ✅ Afficher le lien pour envoyer une autre réponse : **NON**

4. **Onglet "Quiz"**
   - ❌ Transformer en quiz : **NON**

---

### ÉTAPE 5 : Configurer les réponses et notifications

1. **Cliquer sur l'onglet "Réponses"** en haut

2. **Lier à un Google Sheet**

   **Option A : Créer un nouveau Sheet**
   - Cliquer sur l'icône Google Sheets (vert) ➕
   - Sélectionner "Créer une feuille de calcul"
   - Nom : "Inscriptions Formation IA - Google Forms"
   - Cliquer sur "Créer"

   **Option B : Utiliser le Sheet existant (RECOMMANDÉ)**
   - Cliquer sur l'icône Google Sheets (vert) ➕
   - Sélectionner "Sélectionner une feuille de calcul existante"
   - Choisir : "Inscriptions Formation IA - Artemys"
   - Créer un nouvel onglet : "Réponses Google Forms"
   - Cliquer sur "Sélectionner"

3. **Activer les notifications email**
   - Cliquer sur les 3 points ⋮ (Plus d'options)
   - Sélectionner "Recevoir des notifications pour les nouvelles réponses"
   - ✅ Activer

   > **Note** : Par défaut, seul le propriétaire du formulaire recevra les notifications.
   > Pour ajouter d'autres destinataires, voir ÉTAPE 6.

---

### ÉTAPE 6 : Configurer les notifications email multiples (IMPORTANT)

Pour envoyer des emails à `pierre2db@gmail.com` ET `Thierry.BODSON@artemys-belgium.be`, vous avez 2 options :

#### Option A : Partager le formulaire avec Thierry

1. Cliquer sur les 3 points ⋮ en haut à droite
2. Sélectionner "Ajouter des collaborateurs"
3. Ajouter `Thierry.BODSON@artemys-belgium.be`
4. Niveau d'accès : "Éditeur" ou "Lecteur"
5. Thierry devra activer les notifications de son côté

#### Option B : Créer un script pour notifications multiples (AVANCÉ)

1. **Ouvrir le Google Sheet lié**
2. **Extensions** → **Apps Script**
3. **Copier-coller ce code** :

```javascript
// ============================================
// NOTIFICATIONS EMAIL MULTIPLES - GOOGLE FORMS
// ============================================

const EMAIL_RECIPIENTS = "pierre2db@gmail.com,Thierry.BODSON@artemys-belgium.be";
const EMAIL_SUBJECT = "Nouvelle inscription - Formation IA (Google Forms)";

// Fonction déclenchée à chaque nouvelle réponse
function onFormSubmit(e) {
  try {
    // Récupérer les valeurs de la réponse
    const timestamp = e.namedValues['Horodateur'][0];
    const prenom = e.namedValues['Prénom'][0];
    const nom = e.namedValues['Nom'][0];
    const email = e.namedValues['Adresse email'][0];
    const telephone = e.namedValues['Téléphone (facultatif)'] ? e.namedValues['Téléphone (facultatif)'][0] : 'Non renseigné';
    const entreprise = e.namedValues['Entreprise'][0];
    const fonction = e.namedValues['Fonction / Poste occupé'][0];
    const secteur = e.namedValues['Secteur d\'activité'] ? e.namedValues['Secteur d\'activité'][0] : 'Non renseigné';
    const attentes = e.namedValues['Qu\'espérez-vous apprendre lors de cette formation ?'][0];
    const experience = e.namedValues['Quel est votre niveau d\'expérience avec l\'IA ?'][0];
    const consentement = e.namedValues['Consentements'][0];
    const newsletter = e.namedValues['Communication'] ? 'Oui' : 'Non';

    // Composer l'email
    const emailBody = `
Nouvelle inscription à la formation IA - Artemys Belgium (via Google Forms)
===========================================================================

📅 Date d'inscription : ${timestamp}

👤 INFORMATIONS PERSONNELLES
-----------------------------
Prénom : ${prenom}
Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}

🏢 INFORMATIONS PROFESSIONNELLES
---------------------------------
Entreprise : ${entreprise}
Fonction : ${fonction}
Secteur : ${secteur}

📝 FORMATION
------------
Attentes : ${attentes}
Expérience IA : ${experience}

📧 COMMUNICATION
----------------
Consentement : ${consentement}
Newsletter : ${newsletter}

===========================================================================

Pour consulter toutes les inscriptions :
${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
`;

    // Envoyer l'email
    MailApp.sendEmail({
      to: EMAIL_RECIPIENTS,
      subject: EMAIL_SUBJECT,
      body: emailBody
    });

  } catch (error) {
    Logger.log('Erreur lors de l\'envoi de l\'email : ' + error.toString());
  }
}
```

4. **Sauvegarder** le script (💾)
5. **Créer le déclencheur** :
   - Cliquer sur l'icône horloge ⏰ (Déclencheurs)
   - Cliquer sur "+ Ajouter un déclencheur"
   - Configuration :
     - Fonction : `onFormSubmit`
     - Source de l'événement : `Depuis une feuille de calcul`
     - Type d'événement : `À l'envoi d'un formulaire`
   - Cliquer sur "Enregistrer"
6. **Autoriser les permissions** (comme pour le script précédent)

---

### ÉTAPE 7 : Tester le formulaire

1. **Cliquer sur l'icône œil** 👁️ en haut à droite (Aperçu)
2. **Remplir le formulaire** avec des données de test
3. **Soumettre**
4. **Vérifier** :
   - ✅ Les données apparaissent dans le Google Sheet
   - ✅ Les emails sont reçus (si Option B activée)
   - ✅ Le message de confirmation s'affiche

---

### ÉTAPE 8 : Obtenir les liens de partage

1. **Cliquer sur "Envoyer"** en haut à droite
2. **Onglet "Lien"** 🔗
3. **Copier le lien** du formulaire
   - URL courte : `https://forms.gle/XXXXXXXX`
   - URL complète : `https://docs.google.com/forms/d/e/XXXXXXXXXXX/viewform`

4. **Pour intégration iframe** :
   - Cliquer sur l'onglet **< >** (Intégrer le code HTML)
   - Copier le code iframe
   - Exemple :
     ```html
     <iframe src="https://docs.google.com/forms/d/e/XXXXXXXXXXX/viewform?embedded=true"
             width="640"
             height="1200"
             frameborder="0"
             marginheight="0"
             marginwidth="0">
       Chargement…
     </iframe>
     ```

5. **Créer un QR code** (optionnel)
   - Utiliser https://www.qr-code-generator.com/
   - Coller l'URL du formulaire
   - Télécharger le QR code
   - Utiliser pour événements physiques, flyers, etc.

---

## 🔗 INTÉGRATION AU SITE WEB

### Option 1 : Bouton de redirection (SIMPLE)

Ajouter un bouton sur `inscription.html` qui redirige vers Google Forms :

```html
<!-- Ajouter après le formulaire existant -->
<div class="info-box" style="margin-top: 30px;">
    <strong>📱 Alternative :</strong>
    Vous préférez Google Forms ?
    <a href="URL_GOOGLE_FORMS" target="_blank" class="btn-submit" style="display: inline-block; margin-top: 10px;">
        S'inscrire via Google Forms
    </a>
</div>
```

### Option 2 : Page dédiée avec iframe (RECOMMANDÉ)

Créer une nouvelle page `inscription-forms.html` :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription via Google Forms - Formation IA</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #E8F0FF 0%, #f5f5f5 100%);
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        h1 {
            color: #0066CC;
            text-align: center;
        }
        iframe {
            width: 100%;
            min-height: 1400px;
            border: none;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .back-link {
            display: block;
            text-align: center;
            margin-top: 20px;
            color: #0066CC;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 Inscription à la Formation IA</h1>

        <iframe src="URL_GOOGLE_FORMS_EMBED">
            Chargement du formulaire...
        </iframe>

        <a href="index.html" class="back-link">← Retour à l'accueil</a>
    </div>
</body>
</html>
```

### Option 3 : Menu de choix (HYBRIDE)

Modifier `inscription.html` pour proposer les 2 options :

```html
<!-- Ajouter au début du formulaire -->
<div class="choice-box">
    <h2>Choisissez votre méthode d'inscription</h2>

    <div class="option">
        <h3>📝 Formulaire intégré</h3>
        <p>Restez sur cette page</p>
        <button onclick="showHTMLForm()">Utiliser ce formulaire</button>
    </div>

    <div class="option">
        <h3>📱 Google Forms</h3>
        <p>Interface Google simplifiée</p>
        <a href="URL_GOOGLE_FORMS" target="_blank">
            <button>Ouvrir Google Forms</button>
        </a>
    </div>
</div>
```

---

## 📊 AVANTAGES DE GOOGLE FORMS

- ✅ **Administration simplifiée** : Interface intuitive
- ✅ **Statistiques automatiques** : Graphiques et analyses intégrés
- ✅ **Anti-spam** : Protection native de Google
- ✅ **Mobile-first** : Optimisé automatiquement
- ✅ **Partage facile** : Lien court, QR code
- ✅ **Zéro maintenance** : Pas de code à maintenir
- ✅ **Multilingue** : Traduction automatique possible
- ✅ **Validation native** : Email, numéro, etc.
- ✅ **Réponses en temps réel** : Consultables instantanément
- ✅ **Export facile** : CSV, Excel, Google Sheets

---

## 🆚 COMPARAISON : Formulaire HTML vs Google Forms

| Critère | Formulaire HTML | Google Forms |
|---------|-----------------|--------------|
| **Design sur mesure** | ⭐⭐⭐⭐⭐ Totalement personnalisé | ⭐⭐⭐ Personnalisation limitée |
| **Branding** | ⭐⭐⭐⭐⭐ URL propre (votre domaine) | ⭐⭐ URL Google |
| **Facilité de gestion** | ⭐⭐ Nécessite compétences techniques | ⭐⭐⭐⭐⭐ Interface no-code |
| **Statistiques** | ❌ Aucune | ⭐⭐⭐⭐⭐ Graphiques intégrés |
| **Anti-spam** | ⭐⭐ À implémenter manuellement | ⭐⭐⭐⭐⭐ Protection Google native |
| **Maintenance** | ⭐⭐ Mises à jour manuelles | ⭐⭐⭐⭐⭐ Automatique |
| **Partage** | ⭐⭐⭐ Lien vers page web | ⭐⭐⭐⭐⭐ Lien court + QR code |
| **Mobile** | ⭐⭐⭐⭐ Responsive custom | ⭐⭐⭐⭐⭐ Optimisé Google |
| **Coût** | Gratuit | Gratuit |

---

## 💡 RECOMMANDATION FINALE

### Approche HYBRIDE (meilleure solution)

**🎯 Utilisez les DEUX systèmes en parallèle :**

1. **Formulaire HTML** pour :
   - Inscription depuis le site web
   - Expérience utilisateur premium
   - Cohérence avec votre branding

2. **Google Forms** pour :
   - Partage direct par email/SMS
   - QR code pour événements physiques
   - Administration facilitée
   - Backup si problème technique

**📈 Résultat :**
- Maximum de flexibilité
- Deux sources de données (redondance)
- Adaptation à tous les cas d'usage

---

## 🔧 MAINTENANCE

### Tâches régulières
- Consulter les réponses quotidiennement
- Exporter les données périodiquement
- Vérifier les notifications email
- Analyser les statistiques

### Mises à jour
- Modifier les questions si nécessaire (sans perdre les données)
- Ajuster les notifications
- Mettre à jour le message de confirmation
- Adapter le design selon les retours

---

## 🆘 DÉPANNAGE

### Problème : Pas de notification email
- Vérifier que les notifications sont activées dans "Réponses"
- Si script Apps Script : vérifier les déclencheurs
- Regarder dans les spams

### Problème : Données manquantes dans le Sheet
- Vérifier que le formulaire est bien lié au Sheet
- Vérifier les permissions d'accès au Sheet

### Problème : Formulaire non accessible
- Vérifier les paramètres de partage (Public)
- Vérifier que "Accepter les réponses" est activé

---

## 📞 SUPPORT

**Documentation Google Forms** : https://support.google.com/docs/topic/9055404
**Communauté Google** : https://support.google.com/docs/community

---

**Guide créé le** : 3 novembre 2025
**Auteur** : Claude Code
**Version** : 1.0
