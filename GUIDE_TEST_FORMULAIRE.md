# 🧪 GUIDE DE TEST - Formulaire d'inscription HTML

## 📋 Objectif

Tester le système complet d'inscription pour valider que :
- ✅ Le formulaire fonctionne en ligne
- ✅ Les données arrivent dans le Google Sheet
- ✅ Les emails sont envoyés aux 2 destinataires
- ✅ Le système est prêt pour les vraies inscriptions

**Durée estimée** : 10 minutes

---

## ⚡ TEST RAPIDE (5 étapes)

### ÉTAPE 1 : Ouvrir le formulaire (1 min)

1. **Ouvrir le navigateur** (Chrome, Firefox, Safari, Edge)
2. **Aller sur** : https://pierrre2db.github.io/promotionAI/inscription.html
3. **Vérifier** :
   - ✅ La page se charge complètement
   - ✅ Le logo Artemys s'affiche
   - ✅ Le formulaire est visible
   - ✅ Tous les champs sont présents

---

### ÉTAPE 2 : Remplir le formulaire (3 min)

Remplir avec des **données de test réalistes** :

```
Prénom : Pierre
Nom : Test
Email : pierre2db@gmail.com
Téléphone : +32 123 45 67 89
Entreprise : Test Company
Fonction : Développeur Test
Secteur : Technologie / IT
Attentes : "Tester le système d'inscription automatique"
Expérience IA : Intermédiaire (utilise régulièrement)
☑️ J'accepte d'être contacté (OBLIGATOIRE)
☐ Newsletter (facultatif)
```

**Important** :
- Utiliser une **vraie adresse email** que vous pouvez vérifier
- Cocher la case de consentement obligatoire

---

### ÉTAPE 3 : Soumettre et observer (1 min)

1. **Cliquer sur "✓ S'Inscrire"**
2. **Observer** :
   - Le bouton devient gris
   - Texte change en "Envoi en cours..."
   - Attendre 2-3 secondes

3. **Résultat attendu** :
   - ✅ Message vert s'affiche : "✅ Inscription envoyée !"
   - ✅ "Nous vous contactons dans les 24h..."
   - ✅ Le formulaire se réinitialise (champs vides)
   - ✅ Pas de message d'erreur

**Si erreur** :
- ❌ Message rouge → Vérifier tous les champs obligatoires
- ❌ Rien ne se passe → Problème technique (noter et signaler)

---

### ÉTAPE 4 : Vérifier le Google Sheet (2 min)

1. **Ouvrir le Google Sheet** :
   https://docs.google.com/spreadsheets/d/1a1pjMqzqpbaDyW7WGsnlBuiKO6eT6s4UJ1gLnkjpJ4k/

2. **Vérifier qu'une nouvelle ligne apparaît** (peut prendre 5-10 secondes)

3. **Contrôler les données** :
   | Colonne | Vérification |
   |---------|--------------|
   | **Horodateur** | Date/heure actuelle ✅ |
   | **Prénom** | "Pierre" ✅ |
   | **Nom** | "Test" ✅ |
   | **Email** | "pierre2db@gmail.com" ✅ |
   | **Téléphone** | "+32 123 45 67 89" ✅ |
   | **Entreprise** | "Test Company" ✅ |
   | **Fonction** | "Développeur Test" ✅ |
   | **Secteur** | "tech" ✅ |
   | **Attentes** | Texte complet ✅ |
   | **Expérience IA** | "intermediaire" ✅ |
   | **Newsletter** | "Non" ou "Oui" selon case ✅ |

**Résultat attendu** : Toutes les données présentes et correctes ✅

---

### ÉTAPE 5 : Vérifier les emails (3 min)

#### A. Email 1 : pierre2db@gmail.com

1. **Ouvrir Gmail** : https://mail.google.com
2. **Chercher dans la boîte de réception** (ou spams)
3. **Sujet attendu** : "Nouvelle inscription - Formation IA Artemys Belgium"
4. **Vérifier le contenu** :
   ```
   Nouvelle inscription à la formation IA - Artemys Belgium
   =======================================================

   📅 Date d'inscription : [date/heure]

   👤 INFORMATIONS PERSONNELLES
   -----------------------------
   Prénom : Pierre
   Nom : Test
   Email : pierre2db@gmail.com
   Téléphone : +32 123 45 67 89

   🏢 INFORMATIONS PROFESSIONNELLES
   ---------------------------------
   Entreprise : Test Company
   Fonction : Développeur Test
   Secteur : tech

   📝 FORMATION
   ------------
   Attentes : Tester le système d'inscription automatique
   Expérience IA : intermediaire

   📧 COMMUNICATION
   ----------------
   Newsletter : Non

   =======================================================

   Pour consulter toutes les inscriptions :
   [Lien vers le Google Sheet]
   ```

5. **Cliquer sur le lien** vers le Google Sheet → Doit s'ouvrir ✅

**Résultat attendu** : Email reçu avec toutes les infos ✅

#### B. Email 2 : Thierry.BODSON@artemys-belgium.be

1. **Contacter Thierry** ou vérifier son compte
2. **Vérifier qu'il a reçu le MÊME email**
3. **Même sujet, même contenu**

**Résultat attendu** : Email reçu identique ✅

---

## ✅ CHECKLIST DE VALIDATION

Cocher après chaque test réussi :

```
Phase 1 : Formulaire
☐ Page accessible en ligne
☐ Tous les champs affichés
☐ Validation fonctionne (champs obligatoires)
☐ Message de succès s'affiche
☐ Formulaire se réinitialise

Phase 2 : Google Sheet
☐ Nouvelle ligne créée
☐ Horodateur correct
☐ Toutes les 11 colonnes remplies
☐ Données exactes et complètes
☐ Format correct (Oui/Non, valeurs choisies)

Phase 3 : Emails
☐ Email 1 reçu (pierre2db@gmail.com)
☐ Email 2 reçu (Thierry.BODSON@artemys-belgium.be)
☐ Sujet correct
☐ Contenu complet et lisible
☐ Lien Google Sheet fonctionnel

Phase 4 : Multi-devices (optionnel)
☐ Testé sur mobile (responsive)
☐ Testé sur Chrome
☐ Testé sur Firefox/Safari/Edge
```

---

## 🎯 RÉSULTAT FINAL

### ✅ Si TOUS les tests passent

**🎉 FÉLICITATIONS !**

Votre système d'inscription est **100% opérationnel** :
- Formulaire en ligne fonctionnel
- Base de données automatique (Google Sheet)
- Notifications email automatiques
- Système prêt pour les vraies inscriptions

**Actions suivantes** :
1. ✅ Marquer le système comme "EN PRODUCTION"
2. ✅ Communiquer l'URL aux parties prenantes
3. ✅ Promouvoir la formation
4. ✅ (Phase 2) Créer le Google Forms si besoin

---

### ❌ Si certains tests échouent

#### Problème 1 : Message de succès mais pas de données dans le Sheet

**Causes possibles** :
- URL du script incorrect dans inscription.html
- Script Apps Script non déployé
- Permissions insuffisantes

**Solution** :
1. Vérifier l'URL dans inscription.html ligne 347
2. Vérifier le déploiement du script dans Google Apps Script
3. Consulter GUIDE_COMPLET_GOOGLE_SHEET.md

#### Problème 2 : Données dans le Sheet mais pas d'email

**Causes possibles** :
- Fonction d'envoi d'email non appelée
- Adresses email incorrectes dans le script
- Email dans les spams

**Solution** :
1. Vérifier les spams Gmail
2. Vérifier les adresses dans Apps Script ligne 4
3. Tester la fonction testDoPost() dans Apps Script

#### Problème 3 : Message d'erreur sur le formulaire

**Causes possibles** :
- Champs obligatoires non remplis
- Format email invalide
- Consentement non coché

**Solution** :
1. Remplir TOUS les champs marqués *
2. Vérifier le format email (xxx@xxx.xxx)
3. Cocher la case de consentement obligatoire

#### Problème 4 : Rien ne se passe

**Causes possibles** :
- JavaScript désactivé
- Problème réseau
- URL du script incorrecte

**Solution** :
1. Vérifier que JavaScript est activé
2. Ouvrir la console (F12) et chercher les erreurs
3. Vérifier la connexion internet

---

## 📱 TESTS COMPLÉMENTAIRES (optionnel)

### Test mobile

1. **Scanner le QR code** (à créer) ou taper l'URL
2. **Vérifier l'affichage** :
   - Champs empilés verticalement
   - Texte lisible
   - Boutons accessibles
3. **Remplir et soumettre**
4. **Vérifier** : même processus que sur desktop

### Test multi-navigateurs

| Navigateur | Test | Résultat |
|------------|------|----------|
| Chrome | ☐ | ⬜ |
| Firefox | ☐ | ⬜ |
| Safari | ☐ | ⬜ |
| Edge | ☐ | ⬜ |

---

## 📊 RAPPORT DE TEST (template)

```
Date du test : __/__/____
Testeur : ________________
Navigateur : ______________
Appareil : ________________

RÉSULTATS :
✅ Formulaire accessible
✅ Soumission réussie
✅ Données dans Google Sheet
✅ Email 1 reçu (pierre2db)
✅ Email 2 reçu (Thierry)

PROBLÈMES RENCONTRÉS :
- Aucun / [Décrire si problèmes]

OBSERVATIONS :
- [Notes supplémentaires]

STATUT FINAL : ✅ VALIDÉ / ❌ À CORRIGER
```

---

## 🆘 BESOIN D'AIDE ?

### Ressources disponibles

| Document | Usage |
|----------|-------|
| **GUIDE_COMPLET_GOOGLE_SHEET.md** | Configuration Google Sheet/Script |
| **TODO_PROJET.md** | Roadmap et état du projet |
| **GOOGLE_SHEET_INTEGRATION.md** | Intégration technique |

### Contacts

- **Développeur** : Pierre (pierre2db@gmail.com)
- **Client** : Thierry Bodson (Thierry.BODSON@artemys-belgium.be)
- **Support Artemys** : ask@artemys-belgium.be / +32 2 376 43 31

---

## 🎓 APRÈS LA VALIDATION

Une fois tous les tests validés :

1. **Documenter le succès** dans TODO_PROJET.md
2. **Communiquer l'URL** de l'inscription :
   - À l'équipe Artemys
   - Sur les supports marketing
   - Sur les réseaux sociaux
3. **Monitorer les inscriptions** quotidiennement
4. **Planifier Phase 2** (Google Forms) si besoin

---

**Guide créé le** : 3 novembre 2025
**Version** : 1.0
**Prochaine mise à jour** : Après validation des tests
