# 📋 Configuration Google Forms - Instructions

## ✅ Solution gratuite et illimitée !

Google Forms est **100% gratuit, sans limite de soumissions**, et stocke automatiquement toutes les réponses dans Google Sheets.

---

## 🚀 Étape 1 : Créer le Google Form

### 1️⃣ Créer un nouveau formulaire

1. Allez sur : **https://forms.google.com/**
2. Cliquez sur **"+ Vierge"** (nouveau formulaire)
3. Donnez-lui un titre : **"Inscription Formation IA - Artemys Belgium"**
4. Description : **"Formation Acculturation à l'Intelligence Artificielle - 1/2 journée"**

---

### 2️⃣ Ajouter les champs suivants

Créez les questions dans cet ordre :

#### **Question 1 : Prénom**
- Type : **Réponse courte**
- ✅ Obligatoire

#### **Question 2 : Nom**
- Type : **Réponse courte**
- ✅ Obligatoire

#### **Question 3 : Email**
- Type : **Réponse courte**
- Validation : Cochez **"Validation de la réponse"** → **"Texte"** → **"Adresse e-mail"**
- ✅ Obligatoire

#### **Question 4 : Téléphone**
- Type : **Réponse courte**
- ⬜ Facultatif

#### **Question 5 : Entreprise**
- Type : **Réponse courte**
- ✅ Obligatoire

#### **Question 6 : Fonction**
- Type : **Réponse courte**
- ✅ Obligatoire

#### **Question 7 : Secteur d'activité**
- Type : **Liste déroulante**
- Options :
  - Technologie / IT
  - Finance / Banque
  - Commerce / Retail
  - Santé
  - Éducation
  - Marketing / Communication
  - Ressources Humaines
  - Logistique / Transport
  - Autre
- ⬜ Facultatif

#### **Question 8 : Qu'espérez-vous apprendre ?**
- Type : **Paragraphe**
- ✅ Obligatoire

#### **Question 9 : Expérience avec l'IA**
- Type : **Choix multiple**
- Options :
  - Novice (jamais utilisé)
  - Débutant (quelques essais)
  - Intermédiaire (utilise régulièrement)
- ✅ Obligatoire

#### **Question 10 : Consentement**
- Type : **Cases à cocher**
- Option : **"J'accepte d'être contacté par Artemys Belgium pour cette formation"**
- Validation : **"Sélectionner au moins"** → **1**
- ✅ Obligatoire

#### **Question 11 : Newsletter**
- Type : **Cases à cocher**
- Option : **"Je souhaite recevoir des informations sur les formations futures"**
- ⬜ Facultatif

---

## 🎨 Étape 2 : Personnaliser l'apparence

1. Cliquez sur l'icône **"Palette"** (Personnaliser le thème)
2. Choisissez :
   - **Couleur principale** : Bleu (#0066CC - couleur Artemys)
   - **Couleur d'arrière-plan** : Blanc ou bleu clair
3. Ajoutez le logo Artemys dans l'en-tête si vous le souhaitez

---

## 📧 Étape 3 : Configurer les notifications par e-mail

### Option A : Notifications Google Forms (recommandé)

1. Dans votre formulaire, cliquez sur **"Réponses"** (en haut)
2. Cliquez sur les **3 points** (⋮) → **"Recevoir des notifications par e-mail pour les nouvelles réponses"**
3. ✅ Activez cette option

### Option B : Script pour plusieurs destinataires

Si vous voulez envoyer à **2 e-mails** (pierre2db@gmail.com ET Thierry.BODSON@artemys-belgium.be) :

1. Dans le formulaire, cliquez sur **"Réponses"** → **"Créer une feuille de calcul"**
2. Dans Google Sheets, cliquez sur **"Extensions"** → **"Apps Script"**
3. Collez ce code :

```javascript
function sendEmailNotification(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var row = sheet.getLastRow();
  var range = sheet.getRange(row, 1, 1, sheet.getLastColumn());
  var values = range.getValues()[0];

  var emailBody = "Nouvelle inscription à la formation IA :\n\n";
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  for (var i = 0; i < headers.length; i++) {
    emailBody += headers[i] + ": " + values[i] + "\n";
  }

  var recipients = "pierre2db@gmail.com,Thierry.BODSON@artemys-belgium.be";

  MailApp.sendEmail({
    to: recipients,
    subject: "Nouvelle inscription - Formation IA Artemys",
    body: emailBody
  });
}
```

4. Cliquez sur **"Déclencheurs"** (icône horloge) → **"Ajouter un déclencheur"**
5. Configurez :
   - Fonction : **sendEmailNotification**
   - Source de l'événement : **Depuis une feuille de calcul**
   - Type d'événement : **Lors de l'envoi du formulaire**
6. Cliquez sur **"Enregistrer"**

---

## 🔗 Étape 4 : Obtenir le lien de soumission

### Méthode 1 : Lien direct (le plus simple)

1. Dans votre formulaire, cliquez sur **"Envoyer"** (en haut à droite)
2. Cliquez sur l'icône **"Lien"** (🔗)
3. Copiez le lien (il ressemble à : `https://forms.gle/XXXXX`)
4. **C'est ce lien que nous utiliserons !**

### Méthode 2 : Intégration iframe (alternative)

1. Dans votre formulaire, cliquez sur **"Envoyer"**
2. Cliquez sur l'icône **"<>"** (code intégré)
3. Copiez le code iframe

---

## 🌐 Étape 5 : Intégrer dans votre site

### **Option A : Remplacer par le formulaire Google (recommandé)**

Le plus simple : sur votre page `inscription.html`, ajoutez un bouton qui redirige vers le Google Form :

```html
<a href="VOTRE_LIEN_GOOGLE_FORM" class="btn-submit" target="_blank">
    S'inscrire maintenant
</a>
```

### **Option B : Iframe intégré**

Intégrez le Google Form directement dans votre page :

```html
<iframe src="VOTRE_LIEN_GOOGLE_FORM?embedded=true" width="100%" height="1200" frameborder="0">
    Chargement…
</iframe>
```

---

## ✅ Avantages de Google Forms

✅ **Gratuit et illimité** (aucune limite de soumissions)
✅ **Stockage automatique** dans Google Sheets
✅ **Notifications par e-mail** automatiques
✅ **Export Excel/CSV** facile
✅ **Graphiques et statistiques** intégrés
✅ **Protection anti-spam** de Google
✅ **Accessible partout** (mobile, tablette, ordinateur)
✅ **Sauvegarde automatique** des réponses

---

## 📊 Visualiser les réponses

Toutes les inscriptions seront automatiquement enregistrées dans un Google Sheets :
1. Dans le formulaire, cliquez sur **"Réponses"**
2. Cliquez sur l'icône **Google Sheets** pour ouvrir la feuille de calcul
3. Vous pouvez **exporter en Excel** à tout moment

---

## 🎯 Prochaine étape

Une fois que vous avez créé votre Google Form :
1. **Copiez le lien** du formulaire
2. Dites-moi le lien, et je mettrai à jour la page `inscription.html` pour rediriger vers ce formulaire
3. OU je peux intégrer le formulaire directement dans la page avec un iframe

**Besoin d'aide pour créer le formulaire ?** Je peux vous guider pas à pas ! 😊
