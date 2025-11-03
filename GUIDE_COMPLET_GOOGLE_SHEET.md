# 🤖 GUIDE COMPLET - Configuration Google Sheet (Copier-Coller pour IA)

## 📋 CONTEXTE

Ce guide permet de configurer un système d'inscription automatisé qui :
- Enregistre les inscriptions dans un Google Sheet
- Envoie des emails automatiques à pierre2db@gmail.com et Thierry.BODSON@artemys-belgium.be
- Fonctionne avec le formulaire HTML sur https://pierrre2db.github.io/promotionAI/inscription.html

---

## ⚡ INSTRUCTIONS COMPLÈTES

### ÉTAPE 1 : Créer le Google Sheet

1. Aller sur : https://sheets.google.com/
2. Créer un nouveau document vierge (cliquer sur "+ Vierge")
3. Renommer le document en : **Inscriptions Formation IA - Artemys**

4. Dans la ligne 1, créer ces 11 colonnes (A1 à K1) :

| A1 | B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 |
|---|---|---|---|---|---|---|---|---|---|---|
| Horodateur | Prénom | Nom | Email | Téléphone | Entreprise | Fonction | Secteur | Attentes | Expérience IA | Newsletter |

5. Mettre la ligne 1 en gras (sélectionner la ligne 1, puis Ctrl+B ou Cmd+B)

---

### ÉTAPE 2 : Créer le Google Apps Script

1. Dans le Google Sheet, cliquer sur **Extensions** → **Apps Script**
2. Un nouvel onglet s'ouvre avec un éditeur de code
3. **SUPPRIMER TOUT** le code par défaut (tout sélectionner et supprimer)
4. **COPIER-COLLER** le code suivant :

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

    // Envoyer l'email de notification
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
}

// ============================================
// FONCTION DE TEST (OPTIONNEL)
// ============================================
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        prenom: 'Test',
        nom: 'Utilisateur',
        email: 'test@example.com',
        telephone: '+32 123 45 67 89',
        entreprise: 'Test SARL',
        fonction: 'Testeur',
        secteur: 'tech',
        attentes: 'Test des fonctionnalités',
        experience: 'debutant',
        newsletter: true
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

5. Cliquer sur l'icône **💾 Enregistrer** (ou Ctrl+S / Cmd+S)
6. Renommer le projet en : **FormationIA_Webhook**

---

### ÉTAPE 3 : Déployer le script comme Web App

1. Dans l'éditeur Apps Script, cliquer sur **Déployer** → **Nouveau déploiement**

2. Cliquer sur l'icône **⚙️** à côté de "Sélectionner un type" → choisir **Application Web**

3. Configurer :
   - **Description** : `Webhook pour formulaire inscription IA`
   - **Exécuter en tant que** : **Moi** (votre email)
   - **Qui peut accéder** : **Tout le monde**

4. Cliquer sur **Déployer**

5. **Autoriser l'application** :
   - Une fenêtre popup s'ouvre demandant l'autorisation
   - Cliquer sur **Autoriser l'accès**
   - Sélectionner votre compte Google (pierre2db@gmail.com)
   - Si un avertissement "Cette application n'est pas vérifiée" apparaît :
     - Cliquer sur **Paramètres avancés**
     - Cliquer sur **Accéder à FormationIA_Webhook (non sécurisé)**
   - Cliquer sur **Autoriser**

6. **IMPORTANT : COPIER L'URL DE DÉPLOIEMENT**
   - Une fois le déploiement réussi, une URL apparaît qui ressemble à :
   ```
   https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
   ```
   - **COPIER CETTE URL COMPLÈTEMENT** (elle est unique et nécessaire pour la suite)

---

### ÉTAPE 4 : Tester le script (OPTIONNEL mais recommandé)

1. Dans l'éditeur Apps Script, sélectionner la fonction **testDoPost** dans le menu déroulant en haut
2. Cliquer sur **Exécuter** (▶️)
3. Vérifier que :
   - Une ligne de test apparaît dans votre Google Sheet
   - Vous recevez un email de test sur pierre2db@gmail.com
   - Thierry reçoit un email de test sur Thierry.BODSON@artemys-belgium.be

Si tout fonctionne, c'est parfait ! ✅

---

### ÉTAPE 5 : Configurer le formulaire HTML avec l'URL

1. Ouvrir le fichier `inscription.html` dans votre éditeur de code
2. Chercher la ligne 484 qui contient :
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SHEET_SCRIPT_URL';
   ```
3. Remplacer `YOUR_GOOGLE_SHEET_SCRIPT_URL` par l'URL copiée à l'étape 3
4. Exemple final :
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec';
   ```
5. Enregistrer le fichier

---

### ÉTAPE 6 : Committer et pousser sur GitHub

1. Ouvrir le terminal dans le dossier du projet
2. Exécuter les commandes suivantes :

```bash
git add inscription.html
git commit -m "Configure Google Sheet webhook URL for form submissions"
git push
```

3. Attendre 2-3 minutes que GitHub Pages se mette à jour

---

### ÉTAPE 7 : Tester le formulaire en ligne

1. Aller sur : https://pierrre2db.github.io/promotionAI/inscription.html
2. Remplir le formulaire avec des données de test
3. Soumettre le formulaire
4. Vérifier que :
   - ✅ Un message de succès s'affiche sur la page
   - ✅ L'inscription apparaît dans votre Google Sheet
   - ✅ Un email arrive sur pierre2db@gmail.com
   - ✅ Un email arrive sur Thierry.BODSON@artemys-belgium.be

---

## ✅ RÉSULTAT FINAL

Après avoir suivi toutes ces étapes, vous aurez :

✅ Un Google Sheet qui enregistre automatiquement toutes les inscriptions
✅ Des emails automatiques envoyés aux 2 destinataires
✅ Un formulaire entièrement fonctionnel sur votre site
✅ Gratuit et illimité (aucune restriction de soumissions)
✅ Export Excel/CSV facile depuis Google Sheets
✅ Historique complet de toutes les inscriptions

---

## 🔧 DÉPANNAGE

### Problème : Le formulaire ne s'envoie pas
- Vérifier que l'URL du script est correcte dans inscription.html ligne 484
- Vérifier que le script est bien déployé avec accès "Tout le monde"

### Problème : Pas d'email reçu
- Vérifier les spams
- Vérifier que les emails sont corrects dans le script (ligne 4)
- Tester avec la fonction testDoPost()

### Problème : Erreur 403 ou 401
- Redéployer le script avec "Qui peut accéder : Tout le monde"
- Vérifier que les autorisations ont été accordées

---

## 📞 SUPPORT

Si vous rencontrez des problèmes :
1. Vérifier que toutes les étapes ont été suivies dans l'ordre
2. Tester avec la fonction testDoPost() pour isoler le problème
3. Consulter les logs dans Apps Script : Affichage → Journaux

---

**🎉 Une fois configuré, le système est entièrement automatisé ! 🎉**

Les inscriptions arriveront automatiquement dans votre Google Sheet et par email, sans intervention manuelle !
