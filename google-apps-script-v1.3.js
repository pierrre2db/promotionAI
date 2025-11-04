/**
 * Google Apps Script - Version 1.3.0
 * Système multi-sociétés avec configuration dynamique
 *
 * Changements v1.3.0 :
 * - Support jusqu'à 4 destinataires configurables
 * - Sujet d'email personnalisable par société
 * - Compatibilité avec config.json du frontend
 */

// Configuration par défaut (fallback si non fournie par la requête)
const DEFAULT_EMAIL_RECIPIENTS = "pierre2db@gmail.com,Thierry.BODSON@artemys-belgium.be";
const DEFAULT_EMAIL_SUBJECT = "Nouvelle inscription - Formation IA";

/**
 * Fonction principale - Réception des données du formulaire
 */
function doPost(e) {
  try {
    // Parser les données JSON de la requête
    const data = JSON.parse(e.postData.contents);

    // Récupérer la configuration depuis les données
    const recipients = data.recipients || DEFAULT_EMAIL_RECIPIENTS;
    const emailSubject = data.emailSubject || DEFAULT_EMAIL_SUBJECT;
    const companyName = data.companyName || "Formation IA";

    // Préparer les données pour le Google Sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
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

    // Ajouter la ligne dans le Google Sheet
    sheet.appendRow(rowData);

    Logger.log('✅ Données enregistrées dans le Sheet');

    // Envoyer les notifications email aux destinataires configurés
    sendEmailNotification(data, timestamp, recipients, emailSubject, companyName);

    // Retourner une réponse de succès
    return ContentService.createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Inscription enregistrée avec succès',
        recipients: recipients,
        company: companyName
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('❌ Erreur dans doPost: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Fonction d'envoi d'emails de notification
 * @param {Object} data - Données du formulaire
 * @param {Date} timestamp - Date/heure de l'inscription
 * @param {String} recipients - Liste des destinataires séparés par virgules
 * @param {String} emailSubject - Sujet de l'email
 * @param {String} companyName - Nom de la société
 */
function sendEmailNotification(data, timestamp, recipients, emailSubject, companyName) {
  try {
    // Construire le corps de l'email
    const emailBody = `
Nouvelle inscription à la formation IA - ${companyName}
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

📊 Pour consulter toutes les inscriptions :
${SpreadsheetApp.getActiveSpreadsheet().getUrl()}

---
Configuration:
- Société : ${companyName}
- Destinataires : ${recipients}
`;

    // Envoyer l'email aux destinataires configurés
    MailApp.sendEmail({
      to: recipients,
      subject: emailSubject,
      body: emailBody
    });

    Logger.log('✅ Email envoyé avec succès à : ' + recipients);
    Logger.log('📧 Sujet : ' + emailSubject);

  } catch (error) {
    Logger.log('❌ Erreur lors de l\'envoi de l\'email : ' + error.toString());
    // Ne pas bloquer le processus si l'email échoue
  }
}

/**
 * Fonction de test - Permet de tester l'envoi sans passer par le formulaire
 */
function testDoPost() {
  const testData = {
    prenom: 'Test',
    nom: 'MultiSociété',
    email: 'test@example.com',
    telephone: '+32 123 45 67 89',
    entreprise: 'Test Company SPRL',
    fonction: 'Testeur Configuration',
    secteur: 'tech',
    attentes: 'Tester le système multi-sociétés v1.3.0',
    experience: 'intermediaire',
    newsletter: true,
    // Configuration personnalisée pour le test
    companyName: 'Ma Société Test',
    recipients: 'pierre2db@gmail.com',
    emailSubject: 'TEST v1.3.0 - Nouvelle inscription - Ma Société Test'
  };

  const timestamp = new Date();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Ajouter une ligne de test
  sheet.appendRow([
    timestamp,
    testData.prenom,
    testData.nom,
    testData.email,
    testData.telephone,
    testData.entreprise,
    testData.fonction,
    testData.secteur,
    testData.attentes,
    testData.experience,
    testData.newsletter ? 'Oui' : 'Non'
  ]);

  // Tester l'envoi d'email
  sendEmailNotification(
    testData,
    timestamp,
    testData.recipients,
    testData.emailSubject,
    testData.companyName
  );

  Logger.log('✅ Test terminé - Vérifiez votre Google Sheet et vos emails !');
}

/**
 * Fonction GET - Test du webhook
 */
function doGet(e) {
  return ContentService.createTextOutput('Webhook actif - Version 1.3.0 (Multi-sociétés)');
}

/**
 * INSTRUCTIONS D'INSTALLATION
 *
 * 1. Ouvrir le Google Sheet :
 *    https://docs.google.com/spreadsheets/d/1a1pjMqzqpbaDyW7WGsnlBuiKO6eT6s4UJ1gLnkjpJ4k/
 *
 * 2. Menu Extensions → Apps Script
 *
 * 3. Remplacer tout le code existant par ce fichier
 *
 * 4. Sauvegarder (💾)
 *
 * 5. IMPORTANT : Créer un nouveau déploiement
 *    - Cliquer sur "Déployer" → "Nouveau déploiement"
 *    - Type : Application Web
 *    - Exécuter en tant que : Moi
 *    - Qui peut accéder : Tout le monde
 *    - Cliquer sur "Déployer"
 *    - COPIER LA NOUVELLE URL générée
 *
 * 6. Mettre à jour config.json avec la nouvelle URL :
 *    "googleSheet": {
 *      "scriptUrl": "https://script.google.com/macros/s/NOUVELLE_URL/exec"
 *    }
 *
 * 7. Tester avec la fonction testDoPost()
 *    - Dans Apps Script, sélectionner testDoPost() dans la liste
 *    - Cliquer sur "Exécuter"
 *    - Vérifier les logs et l'email reçu
 *
 * 8. Tester avec le formulaire web
 *    - Remplir une inscription sur le site
 *    - Vérifier que les emails arrivent aux bons destinataires
 *
 * CONFIGURATION DES DESTINATAIRES
 *
 * Les destinataires sont maintenant configurés dans config.json :
 *
 * "notifications": {
 *   "recipients": [
 *     { "email": "destinataire1@example.com", "name": "Nom 1" },
 *     { "email": "destinataire2@example.com", "name": "Nom 2" },
 *     { "email": "destinataire3@example.com", "name": "Nom 3" },
 *     { "email": "destinataire4@example.com", "name": "Nom 4" }
 *   ]
 * }
 *
 * Maximum 4 destinataires supportés.
 *
 * COMPATIBILITÉ
 *
 * Ce script est compatible avec :
 * - Version 1.2.0 et antérieures (si recipients non fourni, utilise valeurs par défaut)
 * - Version 1.3.0 avec config.json (recommandé)
 */
