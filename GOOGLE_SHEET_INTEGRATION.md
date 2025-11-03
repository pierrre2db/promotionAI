# 📊 Intégration Google Sheet - Guide Complet

## 🎯 Solution choisie : Formulaire HTML → Google Sheet

Cette solution est **gratuite, illimitée et entièrement sous votre contrôle** !

### ✅ Avantages
- Gratuit et illimité (aucune restriction)
- Emails automatiques à 2 destinataires
- Stockage dans votre propre Google Sheet
- Export Excel/CSV facile
- Pas de service tiers payant
- Design personnalisé Artemys conservé

---

## 🚀 GUIDE PAS À PAS (10 minutes)

### **Étape 1 : Créer le Google Sheet**

1. Allez sur : **https://sheets.google.com/**
2. Cliquez sur **"Vierge"** (nouveau document)
3. Nommez le document : **"Inscriptions Formation IA - Artemys"**

4. **Créez les colonnes suivantes** sur la ligne 1 :
   - Colonne A : `Horodateur`
   - Colonne B : `Prénom`
   - Colonne C : `Nom`
   - Colonne D : `Email`
   - Colonne E : `Téléphone`
   - Colonne F : `Entreprise`
   - Colonne G : `Fonction`
   - Colonne H : `Secteur`
   - Colonne I : `Attentes`
   - Colonne J : `Expérience IA`
   - Colonne K : `Newsletter`

5. **Mettez en gras** la première ligne (sélectionnez la ligne 1 et cliquez sur **B**)

---

### **Étape 2 : Créer le Google Apps Script**

1. Dans votre Google Sheet, cliquez sur **"Extensions"** → **"Apps Script"**
2. Un nouvel onglet s'ouvre avec un éditeur de code
3. **Supprimez tout** le code par défaut
4. **Copiez-collez** le code suivant :

```javascript
// Configuration des emails
const EMAIL_RECIPIENTS = "pierre2db@gmail.com,Thierry.BODSON@artemys-belgium.be";
const EMAIL_SUBJECT = "Nouvelle inscription - Formation IA Artemys Belgium";

// Fonction principale qui reçoit les données du formulaire
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

// Fonction pour envoyer l'email de notification
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

// Fonction de test (optionnel - pour tester depuis l'éditeur)
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

5. Cliquez sur l'icône **💾 "Enregistrer"** (ou Ctrl+S)
6. Donnez un nom au projet : **"FormationIA_Webhook"**

---

### **Étape 3 : Déployer le script comme Web App**

1. Dans l'éditeur Apps Script, cliquez sur **"Déployer"** → **"Nouveau déploiement"**
2. Cliquez sur l'icône **"⚙️ Sélectionner un type"** → **"Application Web"**
3. Configurez :
   - **Description** : `Webhook pour formulaire inscription IA`
   - **Exécuter en tant que** : **Moi** (votre email)
   - **Qui peut accéder** : **Tout le monde**
4. Cliquez sur **"Déployer"**
5. **Autorisez l'application** :
   - Cliquez sur **"Autoriser l'accès"**
   - Sélectionnez votre compte Google
   - Cliquez sur **"Paramètres avancés"** → **"Accéder à FormationIA_Webhook (non sécurisé)"**
   - Cliquez sur **"Autoriser"**
6. **IMPORTANT : Copiez l'URL de l'application web** qui apparaît
   - Elle ressemble à : `https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXX/exec`
   - **Gardez cette URL précieusement !**

---

### **Étape 4 : Tester le script (optionnel mais recommandé)**

1. Dans l'éditeur Apps Script, sélectionnez la fonction **"testDoPost"** dans le menu déroulant en haut
2. Cliquez sur **"Exécuter"**
3. Vérifiez que :
   - Une ligne de test apparaît dans votre Google Sheet
   - Vous recevez un email de test

Si ça fonctionne, c'est parfait ! ✅

---

### **Étape 5 : Configurer le formulaire HTML**

1. **Ouvrez le fichier** `inscription.html`
2. **Cherchez** la ligne avec `YOUR_GOOGLE_SHEET_SCRIPT_URL`
3. **Remplacez** par l'URL que vous avez copiée à l'étape 3
4. **Enregistrez** le fichier

5. **Commitez et poussez** sur GitHub :
```bash
git add inscription.html
git commit -m "Configure Google Sheet webhook URL"
git push
```

---

### **Étape 6 : Tester le formulaire en ligne**

1. Attendez 2-3 minutes que GitHub Pages se mette à jour
2. Allez sur : **https://pierrre2db.github.io/promotionAI/inscription.html**
3. Remplissez et soumettez le formulaire
4. Vérifiez que :
   - ✅ L'inscription apparaît dans votre Google Sheet
   - ✅ Vous recevez un email à **pierre2db@gmail.com**
   - ✅ Thierry reçoit un email à **Thierry.BODSON@artemys-belgium.be**

---

## 🔧 Configuration des emails (personnalisation)

Si vous voulez modifier les destinataires ou le sujet de l'email :

1. Dans le script Apps Script, modifiez les lignes 2 et 3 :
```javascript
const EMAIL_RECIPIENTS = "votre@email.com,autre@email.com";
const EMAIL_SUBJECT = "Votre sujet personnalisé";
```

2. Enregistrez et **redéployez** :
   - **"Déployer"** → **"Gérer les déploiements"**
   - Cliquez sur l'icône **✏️** (modifier)
   - **"Version"** → **"Nouvelle version"**
   - Cliquez sur **"Déployer"**

---

## 📊 Consulter les inscriptions

- **En ligne** : Ouvrez votre Google Sheet
- **Export Excel** : Fichier → Télécharger → Microsoft Excel (.xlsx)
- **Export CSV** : Fichier → Télécharger → Valeurs séparées par des virgules (.csv)

---

## 🛡️ Sécurité et vie privée

✅ **RGPD-friendly** : Données stockées dans votre propre Google Drive
✅ **Accès contrôlé** : Seul vous avez accès au Google Sheet
✅ **Backup automatique** : Google Drive sauvegarde automatiquement
✅ **Historique des versions** : Possibilité de revenir en arrière

---

## ❓ Dépannage

### Le formulaire ne s'envoie pas
- Vérifiez que l'URL du script est correcte dans `inscription.html`
- Vérifiez que le script est bien déployé avec accès "Tout le monde"

### Pas d'email reçu
- Vérifiez vos spams
- Vérifiez que les emails sont corrects dans le script (ligne 2)
- Testez avec la fonction `testDoPost()`

### Erreur 403 ou 401
- Redéployez le script avec "Qui peut accéder : Tout le monde"

---

## 🎉 C'est prêt !

Une fois l'URL configurée, votre formulaire sera **100% fonctionnel** avec :
- ✅ Enregistrement automatique dans Google Sheet
- ✅ Emails automatiques aux 2 destinataires
- ✅ Design personnalisé Artemys
- ✅ Gratuit et illimité

**Donnez-moi l'URL de votre script Apps Script et je finaliserai la configuration !** 🚀
