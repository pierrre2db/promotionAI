# 🔧 GUIDE DE DÉBOGAGE - Emails non envoyés

## 🎯 Problème

✅ Le formulaire fonctionne
✅ Les données arrivent dans le Google Sheet
❌ **Les emails ne sont PAS envoyés**

---

## 📋 DIAGNOSTIC EN 5 ÉTAPES

### ÉTAPE 1 : Vérifier les logs du script Apps Script

1. **Ouvrir le Google Sheet** : https://docs.google.com/spreadsheets/d/1a1pjMqzqpbaDyW7WGsnlBuiKO6eT6s4UJ1gLnkjpJ4k/

2. **Aller dans Apps Script** :
   - Menu **Extensions** → **Apps Script**

3. **Consulter les logs** :
   - Cliquer sur **Exécutions** (icône ⏱️ dans le menu de gauche)
   - OU cliquer sur **Affichage** → **Journaux**

4. **Chercher les erreurs** :
   - Des lignes rouges = erreurs
   - Noter le message d'erreur exact

**Résultat attendu** : Voir si la fonction `doPost` a été appelée et s'il y a des erreurs.

---

### ÉTAPE 2 : Tester manuellement la fonction d'envoi d'email

1. **Dans l'éditeur Apps Script**, sélectionner la fonction **`testDoPost`** dans le menu déroulant en haut

2. **Cliquer sur Exécuter** (▶️)

3. **Si c'est la première fois** :
   - Une fenêtre "Autorisation requise" s'affiche
   - Cliquer sur **Vérifier les autorisations**
   - Sélectionner votre compte Google (pierre2db@gmail.com)
   - Google affiche "Cette application n'est pas vérifiée"
   - Cliquer sur **Paramètres avancés**
   - Cliquer sur **Accéder à FormationIA_Webhook (non sécurisé)**
   - Cliquer sur **Autoriser**

4. **Attendre l'exécution** (quelques secondes)

5. **Vérifier** :
   - ✅ Une nouvelle ligne de test apparaît dans le Google Sheet
   - ✅ Un email arrive sur pierre2db@gmail.com
   - ✅ Un email arrive sur Thierry.BODSON@artemys-belgium.be

**Si ça fonctionne** → Le problème vient du déclenchement depuis le formulaire web
**Si ça ne fonctionne pas** → Le problème est dans le code du script

---

### ÉTAPE 3 : Vérifier le code du script

Vérifier que le script contient bien la fonction d'envoi d'email :

1. **Dans Apps Script**, vérifier que vous avez ces 3 fonctions :
   ```javascript
   function doPost(e) { ... }
   function sendEmailNotification(data, timestamp) { ... }
   function testDoPost() { ... }
   ```

2. **Vérifier la ligne ~73** (dans la fonction `doPost`) :
   ```javascript
   // Envoyer l'email de notification
   sendEmailNotification(data, timestamp);
   ```

   ⚠️ **Si cette ligne est commentée ou absente** → C'est le problème !

3. **Vérifier les emails destinataires (ligne ~4)** :
   ```javascript
   const EMAIL_RECIPIENTS = "pierre2db@gmail.com,Thierry.BODSON@artemys-belgium.be";
   ```

---

### ÉTAPE 4 : Vérifier les permissions du déploiement

1. **Dans Apps Script**, cliquer sur **Déployer** → **Gérer les déploiements**

2. **Vérifier la configuration** :
   - **Exécuter en tant que** : **Moi** (pierre2db@gmail.com)
   - **Qui peut accéder** : **Tout le monde**

3. **Si ce n'est pas correct** :
   - Cliquer sur l'icône **✏️** (Modifier)
   - Corriger les paramètres
   - Cliquer sur **Déployer**
   - **⚠️ IMPORTANT** : Copier la nouvelle URL de déploiement
   - Mettre à jour `inscription.html` avec la nouvelle URL

---

### ÉTAPE 5 : Solution rapide - Redéployer le script

Si les étapes précédentes ne fonctionnent pas, refaire un déploiement complet :

1. **Copier le code complet** du script (voir ci-dessous)
2. **Dans Apps Script**, supprimer tout le code
3. **Coller le nouveau code**
4. **Sauvegarder** (💾)
5. **Déployer** → **Nouveau déploiement**
6. **Configurer** :
   - Type : Application Web
   - Exécuter en tant que : Moi
   - Qui peut accéder : Tout le monde
7. **Copier la nouvelle URL**
8. **Mettre à jour** `inscription.html` avec la nouvelle URL

---

## 📝 CODE COMPLET DU SCRIPT (Copier-Coller)

```javascript
// ============================================
// CONFIGURATION
// ============================================
const EMAIL_RECIPIENTS = "pierre2db@gmail.com,Thierry.BODSON@artemys-belgium.be";
const EMAIL_SUBJECT = "Nouvelle inscription - Formation IA Artemys Belgium";

// ============================================
// FONCTION PRINCIPALE
// ============================================
function doPost(e) {
  try {
    // Récupérer les données envoyées
    const data = JSON.parse(e.postData.contents);

    // Ouvrir la feuille de calcul active
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Préparer les données pour l'insertion
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.prenom || '',
      data.nom || '',
      data.email || '',
      data.telephone || '',
      data.entreprise || '',
      data.fonction || '',
      data.secteur || '',
      data.attentes || '',
      data.experience || '',
      data.newsletter ? 'Oui' : 'Non'
    ];

    // Ajouter la ligne dans le Sheet
    sheet.appendRow(rowData);

    // ⚠️ IMPORTANT : Envoyer l'email de notification
    sendEmailNotification(data, timestamp);

    // Retourner une réponse de succès
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Inscription enregistrée avec succès'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // En cas d'erreur, renvoyer l'erreur
    Logger.log('Erreur dans doPost: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================
// FONCTION D'ENVOI D'EMAIL
// ============================================
function sendEmailNotification(data, timestamp) {
  try {
    const emailBody = `
Nouvelle inscription à la formation IA - Artemys Belgium
=======================================================

📅 Date d'inscription : ${timestamp.toLocaleString('fr-FR')}

👤 INFORMATIONS PERSONNELLES
-----------------------------
Prénom : ${data.prenom}
Nom : ${data.nom}
Email : ${data.email}
Téléphone : ${data.telephone || 'Non renseigné'}

🏢 INFORMATIONS PROFESSIONNELLES
---------------------------------
Entreprise : ${data.entreprise}
Fonction : ${data.fonction}
Secteur : ${data.secteur || 'Non renseigné'}

📝 FORMATION
------------
Attentes : ${data.attentes}
Expérience IA : ${data.experience}

📧 COMMUNICATION
----------------
Newsletter : ${data.newsletter ? 'Oui' : 'Non'}

=======================================================

Pour consulter toutes les inscriptions :
${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
`;

    // Envoyer l'email aux destinataires
    MailApp.sendEmail({
      to: EMAIL_RECIPIENTS,
      subject: EMAIL_SUBJECT,
      body: emailBody
    });

    Logger.log('Email envoyé avec succès à : ' + EMAIL_RECIPIENTS);

  } catch (error) {
    Logger.log('Erreur lors de l\'envoi de l\'email : ' + error.toString());
    // Ne pas bloquer l'enregistrement si l'email échoue
  }
}

// ============================================
// FONCTION DE TEST (OPTIONNEL)
// ============================================
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        prenom: 'Test',
        nom: 'Debug',
        email: 'test@example.com',
        telephone: '+32 123 45 67 89',
        entreprise: 'Test Company',
        fonction: 'Testeur Email',
        secteur: 'tech',
        attentes: 'Tester l\'envoi d\'emails',
        experience: 'intermediaire',
        newsletter: true
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
  Logger.log('Test terminé - Vérifiez vos emails !');
}
```

---

## ✅ CHECKLIST DE VÉRIFICATION

Cocher au fur et à mesure :

```
☐ Étape 1 : Logs consultés
☐ Étape 2 : Fonction testDoPost() exécutée avec succès
☐ Étape 3 : Code vérifié (fonction sendEmailNotification présente)
☐ Étape 4 : Permissions de déploiement vérifiées
☐ Étape 5 : Script redéployé (si nécessaire)
☐ Email de test reçu sur pierre2db@gmail.com
☐ Email de test reçu sur Thierry.BODSON@artemys-belgium.be
☐ Test réel depuis le formulaire web
☐ Email réel reçu sur les 2 adresses
```

---

## 🎯 RÉSOLUTIONS POSSIBLES

### Problème 1 : "sendEmailNotification is not defined"

**Cause** : La fonction n'est pas dans le script
**Solution** : Copier-coller le code complet ci-dessus

### Problème 2 : "Authorization required"

**Cause** : Permissions Gmail non accordées
**Solution** : Exécuter `testDoPost()` et accepter les autorisations

### Problème 3 : Email envoyé mais pas reçu

**Cause** : Email dans les spams
**Solution** :
1. Vérifier le dossier Spam de Gmail
2. Marquer comme "Non spam"
3. Ajouter l'expéditeur aux contacts

### Problème 4 : "MailApp.sendEmail is not a function"

**Cause** : API Gmail non disponible
**Solution** :
1. Vérifier les permissions du script
2. Réautoriser l'accès à Gmail

### Problème 5 : Fonction exécutée mais pas d'email

**Cause** : Ligne d'appel commentée ou oubliée
**Solution** : Vérifier la ligne 73 dans `doPost()` :
```javascript
sendEmailNotification(data, timestamp);
```

---

## 🔍 VÉRIFICATIONS SUPPLÉMENTAIRES

### Vérifier que Gmail est activé

1. Dans Apps Script, menu **Services** (à gauche)
2. Vérifier que **Gmail API** est listé
3. Si absent, cliquer sur **+** → Ajouter **Gmail API**

### Vérifier les quotas Gmail

Google Apps Script a des limites :
- **100 emails / jour** (compte gratuit)
- **1500 emails / jour** (compte Google Workspace)

Si vous avez dépassé le quota :
- Attendre 24h
- Ou utiliser un compte Google Workspace

---

## 📞 SI RIEN NE FONCTIONNE

1. **Prendre une capture d'écran** :
   - Du code Apps Script
   - Des logs d'erreur
   - De la configuration de déploiement

2. **Vérifier** :
   - Que vous êtes connecté avec pierre2db@gmail.com
   - Que le Google Sheet vous appartient
   - Que vous avez les droits d'admin

3. **Alternative temporaire** :
   - Utiliser les notifications natives de Google Forms (Phase 2)
   - Consulter manuellement le Google Sheet

---

## ✅ SOLUTION RAPIDE : Utiliser la fonction de test

En attendant de débugger, vous pouvez recevoir les emails manuellement :

1. Chaque fois qu'une inscription arrive dans le Google Sheet
2. Ouvrir Apps Script
3. Exécuter `testDoPost()` manuellement
4. L'email sera envoyé avec les dernières données

**Note** : Ce n'est pas automatique, mais ça fonctionne en dépannage.

---

## 📚 RESSOURCES

- **GUIDE_COMPLET_GOOGLE_SHEET.md** : Configuration initiale
- **APIS_ET_CLES.md** : Toutes les URLs et configurations
- **TODO_PROJET.md** : État du projet

---

**Guide créé le** : 3 novembre 2025 - 16h20
**Version** : 1.0
**Objectif** : Résoudre le problème d'envoi d'emails
