# 📋 TO-DO LIST - Projet Formation IA Artemys Belgium

## 📅 Date de dernière mise à jour : 4 novembre 2025

## 🎉 STATUT GLOBAL : 🚀 VERSION 1.3.0 EN DÉVELOPPEMENT

**Version actuelle en production** : v1.2.0 ✅
**Version en cours de développement** : v1.3.0 - Système multi-sociétés 🔧

## 🎯 STRATÉGIE DE DÉPLOIEMENT

**Phase 1 (✅ TERMINÉE - 3 novembre 2025)** : Formulaire HTML + Google Sheet
- ✅ Système testé et validé
- ✅ Formulaire HTML en production
- ✅ Google Sheet opérationnel
- ✅ Emails automatiques fonctionnels

**Phase 2 (PLANIFIÉE)** : Ajout Google Forms
- Création du Google Forms en parallèle
- Approche hybride pour maximum de flexibilité

---

## 📌 WORKFLOW GIT

**⚠️ Important** : À partir de maintenant, suivre le workflow Git professionnel :
- ✅ Créer une branche pour chaque feature/fix
- ✅ Faire une Pull Request
- ✅ Merger après validation
- ✅ Tagger les releases

**Documentation** :
- **GIT_WORKFLOW.md** - Guide complet du workflow
- **CONTRIBUTING.md** - Guide de contribution

**Tags de release** :
- `v1.0.0` - Initial release (site web de base)
- `v1.1.0` - Intégration Google Sheet
- `v1.2.0` - Système emails 100% opérationnel ✅
- `v1.3.0` - **EN COURS** - Système multi-sociétés avec config.json 🔧

---

## 🚀 VERSION 1.3.0 - Système Multi-Sociétés (EN COURS)

### 🎯 Objectifs v1.3.0

**Problème résolu** : Réutiliser le système pour plusieurs sociétés/clients sans dupliquer le code.

**Solution** : Configuration centralisée dans `config.json`

### ✨ Nouvelles fonctionnalités

1. **Configuration JSON externalisée**
   - [x] Fichier `config.json` créé
   - [x] Support de multiples sociétés
   - [x] Changement de branding sans toucher au code

2. **Destinataires emails configurables**
   - [x] Support jusqu'à 4 destinataires
   - [x] Configuration depuis `config.json`
   - [x] Email avec sujet personnalisable

3. **Personnalisation complète**
   - [x] Logo dynamique
   - [x] Couleurs CSS dynamiques (branding)
   - [x] Titres et textes configurables
   - [x] Messages personnalisables

4. **Google Apps Script v1.3.0**
   - [x] Code mis à jour pour lire destinataires depuis requête
   - [x] Support sujet email dynamique
   - [x] Compatibilité backward avec v1.2.0

5. **Documentation complète**
   - [x] CONFIG.md - Guide complet configuration
   - [x] google-apps-script-v1.3.js - Code script mis à jour
   - [x] Instructions de déploiement multi-sociétés

### 📋 Checklist v1.3.0

**Développement** :
- [x] Créer branche feature/v1.3-multi-company-config
- [x] Créer config.json avec toutes les sections
- [x] Modifier inscription.html pour charger config.json
- [x] Créer google-apps-script-v1.3.js
- [x] Créer CONFIG.md avec documentation complète
- [ ] Mettre à jour Google Apps Script dans Sheet (action manuelle)
- [ ] Tester avec configuration Artemys Belgium
- [ ] Tester avec configuration test différente
- [ ] Créer Pull Request
- [ ] Merger dans main
- [ ] Créer tag v1.3.0
- [ ] Mettre à jour GitHub Pages

**Tests requis** :
- [ ] Chargement config.json réussi
- [ ] Logo s'affiche correctement
- [ ] Couleurs appliquées dynamiquement
- [ ] Titres et textes personnalisés affichés
- [ ] Formulaire fonctionne
- [ ] Données dans Google Sheet
- [ ] Emails reçus par tous les destinataires configurés
- [ ] Test avec 1, 2, 3 et 4 destinataires

**Documentation** :
- [x] CONFIG.md créé
- [ ] APIS_ET_CLES.md mis à jour
- [ ] README.md mis à jour
- [ ] CHANGELOG.md mis à jour

### 🔧 Fichiers modifiés v1.3.0

| Fichier | Status | Description |
|---------|--------|-------------|
| **config.json** | ✅ Créé | Configuration centralisée |
| **inscription.html** | ✅ Modifié | Chargement dynamique config |
| **google-apps-script-v1.3.js** | ✅ Créé | Script avec destinataires dynamiques |
| **CONFIG.md** | ✅ Créé | Documentation complète |
| **TODO_PROJET.md** | ✅ Mis à jour | Ce fichier |
| **APIS_ET_CLES.md** | ⏳ À mettre à jour | Référence APIs |
| **README.md** | ⏳ À mettre à jour | Doc générale |
| **CHANGELOG.md** | ⏳ À mettre à jour | Historique versions |

### 🎯 Évolution future notée

- **v1.4.0** : Synchronisation Google Calendar (calendrier des formations)
- **v1.5.0** : Interface web de configuration (plus besoin d'éditer JSON manuellement)

---

## ✅ CE QUI A ÉTÉ FAIT

### 1. Infrastructure du site web
- [x] Création du site web statique sur GitHub Pages
- [x] Configuration du repository GitHub : `https://github.com/pierrre2db/promotionAI.git`
- [x] Déploiement du site : `https://pierrre2db.github.io/promotionAI/`
- [x] Page d'accueil (`index.html`) avec présentation de la formation
- [x] Page d'inscription (`inscription.html`) avec formulaire complet

### 2. Formulaire d'inscription
- [x] Design responsive avec validation côté client
- [x] Collecte de 11 champs de données :
  - Prénom, Nom
  - Email, Téléphone
  - Entreprise, Fonction, Secteur
  - Attentes, Expérience IA
  - Consentements (contact + newsletter)
- [x] Messages de succès/erreur
- [x] Validation email avec regex
- [x] Protection contre les doubles soumissions

### 3. Système d'automation Google Sheet
- [x] Création du Google Sheet "Inscriptions Formation IA - Artemys"
- [x] Configuration des 11 colonnes de données
- [x] Google Apps Script développé et déployé
- [x] Webhook actif : `https://script.google.com/macros/s/AKfycbx.../exec`
- [x] Enregistrement automatique des inscriptions dans le Sheet
- [x] Envoi automatique d'emails de notification à :
  - `pierre2db@gmail.com`
  - `Thierry.BODSON@artemys-belgium.be`

### 4. Documentation
- [x] README.md - Documentation générale
- [x] CHANGELOG.md - Historique des versions
- [x] DEPLOY.md - Guide de déploiement
- [x] DEPLOIEMENT_FINAL.md - Instructions de déploiement
- [x] GOOGLE_SHEET_INTEGRATION.md - Guide d'intégration
- [x] GUIDE_COMPLET_GOOGLE_SHEET.md - Guide complet pas à pas
- [x] TODO_PROJET.md - To-do list et roadmap complète

### 5. Google Forms (Nouveau)
- [x] GOOGLE_FORMS_SETUP.md - Guide complet de configuration Google Forms
- [x] inscription-forms.html - Template de page pour intégration Google Forms
- [x] Documentation de l'approche hybride (HTML + Google Forms)
- [ ] Création effective du Google Forms (à faire manuellement)
- [ ] Configuration des notifications multiples
- [ ] Test du Google Forms en production

---

## 🔄 SYSTÈME COMPLET ACTUEL

```
┌─────────────────────────────────────────────────────────────┐
│                     FLUX D'INSCRIPTION                       │
└─────────────────────────────────────────────────────────────┘

    👤 Utilisateur visite le site
           ↓
    📝 Remplit le formulaire sur
       https://pierrre2db.github.io/promotionAI/inscription.html
           ↓
    ✓ Validation JavaScript (côté client)
       • Champs requis vérifiés
       • Format email validé
       • Consentement obligatoire
           ↓
    📤 Envoi HTTPS vers Google Apps Script
       (mode: 'no-cors', method: POST)
           ↓
    ⚙️ Google Apps Script traite les données
       └─ Fonction doPost(e)
           ↓
       ┌───┴────────────┐
       ↓                ↓
    📊 Google Sheet    📧 Email automatique
       • Horodateur       └─ Envoi à 2 destinataires :
       • 11 colonnes         • pierre2db@gmail.com
       • Données             • Thierry.BODSON@artemys-belgium.be
         structurées
           ↓                ↓
    📈 Consultation      ✉️ Notification reçue
       • Export Excel       • Détails complets
       • Statistiques       • Lien vers Sheet
       • Historique
```

### 🔑 Points clés du système

| Composant | Technologie | Status |
|-----------|-------------|---------|
| **Frontend** | HTML/CSS/JavaScript statique | ✅ Opérationnel |
| **Hébergement** | GitHub Pages (gratuit) | ✅ Actif |
| **Base de données** | Google Sheet | ✅ Fonctionnel |
| **Backend** | Google Apps Script | ✅ Déployé |
| **Emails** | Google MailApp API | ✅ Configuré |
| **Coût** | 0€ (100% gratuit) | ✅ Durable |

---

## 🎯 CE QUI RESTE À FAIRE

### ⚡ PHASE 1 - PRIORITÉ IMMÉDIATE : Test du formulaire HTML

#### Étape 1 : Test en production ✅ VALIDÉ
- [x] **Aller sur le formulaire en ligne** : https://pierrre2db.github.io/promotionAI/inscription.html
- [x] **Remplir le formulaire avec des données réelles de test**
- [x] **Soumettre le formulaire**
- [x] **Message de succès s'affiche** ✅

**BUG CORRIGÉ** : Fichier inscription.html était corrompu (balises HTML manquantes), restauré depuis commit 080ef5b.

#### Étape 2 : Vérification Google Sheet ✅ VALIDÉ
- [x] **Ouvrir le Google Sheet** : https://docs.google.com/spreadsheets/d/1a1pjMqzqpbaDyW7WGsnlBuiKO6eT6s4UJ1gLnkjpJ4k/
- [x] **Nouvelle ligne apparaît** avec données correctes ✅
- [x] Horodateur correct
- [x] Toutes les données saisies
- [x] Format correct

**RÉSULTAT** : Le formulaire HTML → Google Sheet fonctionne parfaitement ✅

#### Étape 3 : Vérification emails ✅ RÉSOLU
- [x] Test effectué
- [x] **Vérifier la boîte mail** `pierre2db@gmail.com`
  - [x] ✅ **Email reçu avec succès !**
- [x] **Email envoyé à** `Thierry.BODSON@artemys-belgium.be`
  - [x] ✅ **Email configuré et opérationnel**

**PROBLÈME IDENTIFIÉ ET RÉSOLU** :
- ✅ Données arrivent dans Google Sheet
- ✅ **Emails maintenant envoyés avec succès !**

**🔧 SOLUTION APPLIQUÉE (3 novembre 2025 - 17h00)** :
1. [x] **Diagnostic** : Script incomplet, fonction `sendEmailNotification()` manquante
2. [x] **Code complet ajouté** : 3 fonctions (doPost, sendEmailNotification, testDoPost)
3. [x] **Permissions Gmail accordées** : Nouveau déploiement avec autorisation explicite
4. [x] **URL webhook mise à jour** : `AKfycbwyPsRE4NMzqz_oYvq2WFpRMrp4tIRSMm7KcbBLiN3w2UijYmAFw0IYNURO4SnPF9sC`
5. [x] **Tests réussis** : Email reçu sur pierre2db@gmail.com
6. [x] **Formulaire HTML mis à jour** : Nouvelle URL configurée (ligne 442)

#### Étape 4 : Tests complémentaires
- [ ] **Tester sur mobile** (smartphone)
  - [ ] Affichage responsive correct
  - [ ] Formulaire utilisable
  - [ ] Soumission fonctionne
- [ ] **Tester sur tablette** (si disponible)
- [ ] **Tester avec différents navigateurs**
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

#### Étape 5 : Validation finale
- [ ] **Si tous les tests passent** → ✅ Système en production !
- [ ] **Si problèmes détectés** → 🔧 Corriger et retester

---

### 📋 PHASE 2 - FUTUR : Google Forms (Documentation prête, mise en œuvre reportée)

**Status** : ⏸️ En pause - À faire après validation Phase 1

- [x] Documentation complète créée (GOOGLE_FORMS_SETUP.md)
- [x] Template HTML créé (inscription-forms.html)
- [ ] **Création du Google Forms** (quand Phase 1 validée)
  - [ ] Suivre le guide GOOGLE_FORMS_SETUP.md
  - [ ] Configurer les 11 questions
  - [ ] Personnaliser le design (couleurs Artemys)
  - [ ] Lier au Google Sheet
  - [ ] Configurer les notifications
  - [ ] Intégrer au site
  - [ ] Tester

### Priorité 2 : Améliorations rapides
- [ ] Ajouter un captcha anti-spam (Google reCAPTCHA v3)
- [ ] Créer un email de confirmation automatique pour l'inscrit
- [ ] Ajouter un champ "Comment avez-vous connu la formation ?"
- [ ] Implémenter un système de numérotation des inscriptions

### Priorité 3 : Optimisations UX
- [ ] Ajouter une animation de chargement pendant l'envoi
- [ ] Créer une page "Merci" après inscription
- [ ] Ajouter un bouton de téléchargement du programme PDF
- [ ] Implémenter un compteur "Places restantes"

### Priorité 4 : Analytics et suivi
- [ ] Intégrer Google Analytics 4
- [ ] Créer un dashboard de suivi des inscriptions
- [ ] Ajouter des graphiques dans Google Sheet (secteurs, expérience IA)
- [ ] Mettre en place des alertes si quota de 16 participants atteint

---

## 🚀 ÉVOLUTION : Migration vers Google Forms

### Pourquoi migrer vers Google Forms ?

**Avantages :**
- ✅ Gestion native des réponses par Google
- ✅ Interface d'administration plus simple
- ✅ Export automatique vers Google Sheet
- ✅ Statistiques et graphiques intégrés
- ✅ Notifications email natives
- ✅ Protection anti-spam intégrée
- ✅ Validation des champs automatique
- ✅ Compatible mobile par défaut
- ✅ Formulaire multilingue facile
- ✅ Pas besoin de coder

**Inconvénients :**
- ❌ Moins de contrôle sur le design (mais personnalisable)
- ❌ URL Google Forms (pas votre domaine)
- ❌ Moins flexible pour l'intégration au site

### Plan de migration vers Google Forms

#### Option A : Remplacement complet

```
1. Créer un Google Forms basé sur les 11 champs actuels
2. Personnaliser le design (couleurs Artemys, logo)
3. Configurer les notifications email automatiques
4. Remplacer le formulaire HTML par un lien/iframe vers Google Forms
5. Tester et valider
```

#### Option B : Approche hybride (RECOMMANDÉE)

```
1. Garder le formulaire HTML actuel sur le site (meilleur design)
2. Créer un Google Forms en parallèle comme backup
3. Utiliser Google Forms pour :
   - Administration simplifiée
   - Export rapide des données
   - Statistiques automatiques
4. Proposer les 2 options aux utilisateurs
```

### 📝 Étapes détaillées pour créer le Google Forms

- [ ] **Étape 1 : Création du formulaire**
  - [ ] Aller sur https://forms.google.com
  - [ ] Créer un nouveau formulaire
  - [ ] Titre : "Inscription - Formation Acculturation IA"
  - [ ] Description : Texte d'introduction

- [ ] **Étape 2 : Ajouter les champs**
  - [ ] Prénom (Réponse courte, obligatoire)
  - [ ] Nom (Réponse courte, obligatoire)
  - [ ] Email (Réponse courte, validation email, obligatoire)
  - [ ] Téléphone (Réponse courte, facultatif)
  - [ ] Entreprise (Réponse courte, obligatoire)
  - [ ] Fonction (Réponse courte, obligatoire)
  - [ ] Secteur d'activité (Liste déroulante avec les 9 options)
  - [ ] Attentes (Paragraphe, obligatoire)
  - [ ] Expérience IA (Choix multiple : Novice/Débutant/Intermédiaire)
  - [ ] Consentement (Case à cocher, obligatoire)
  - [ ] Newsletter (Case à cocher, facultatif)

- [ ] **Étape 3 : Personnalisation**
  - [ ] Thème : Couleurs Artemys (bleu #0066CC)
  - [ ] Ajouter le logo Artemys en en-tête
  - [ ] Message de confirmation personnalisé
  - [ ] Activer "Limiter à 1 réponse" (si souhaité)

- [ ] **Étape 4 : Configuration des réponses**
  - [ ] Lier à un Google Sheet (nouveau ou existant)
  - [ ] Activer les notifications email pour les réponses
  - [ ] Configurer les destinataires :
    - pierre2db@gmail.com
    - Thierry.BODSON@artemys-belgium.be

- [ ] **Étape 5 : Intégration au site**

  **Option A - Lien direct :**
  ```html
  <a href="URL_GOOGLE_FORMS" class="btn-submit">
    S'inscrire via Google Forms
  </a>
  ```

  **Option B - Iframe intégré :**
  ```html
  <iframe src="URL_GOOGLE_FORMS_EMBED"
          width="700"
          height="1200"
          frameborder="0">
  </iframe>
  ```

  **Option C - Bouton avec redirection :**
  ```javascript
  document.getElementById('btnForms').addEventListener('click', () => {
    window.open('URL_GOOGLE_FORMS', '_blank');
  });
  ```

### 📊 Comparaison : Formulaire actuel vs Google Forms

| Critère | Formulaire HTML actuel | Google Forms |
|---------|------------------------|--------------|
| **Design personnalisé** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Facilité de gestion** | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Statistiques intégrées** | ❌ | ✅ |
| **Anti-spam** | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Maintenance** | ⭐⭐ (nécessite code) | ⭐⭐⭐⭐⭐ (zéro maintenance) |
| **Flexibilité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Mobile-friendly** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Export données** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Coût** | Gratuit | Gratuit |

### 🎯 Recommandation finale

**Approche hybride recommandée :**

1. **Garder le formulaire HTML sur le site** pour l'expérience utilisateur premium
2. **Créer un Google Forms en parallèle** pour :
   - Administration simplifiée
   - Partage rapide par email/SMS
   - Événements physiques (QR code)
3. **Utiliser les deux systèmes** selon le contexte :
   - Site web → Formulaire HTML personnalisé
   - Partage direct → Google Forms
   - Événements → Google Forms (QR code)

---

## 📞 CONTACTS PROJET

| Rôle | Nom | Email |
|------|-----|-------|
| **Développeur** | Pierre | pierre2db@gmail.com |
| **Client/Responsable** | Thierry Bodson | Thierry.BODSON@artemys-belgium.be |
| **Organisation** | Artemys Belgium | ask@artemys-belgium.be |

---

## 🔗 LIENS UTILES

### Sites et services
| Ressource | URL |
|-----------|-----|
| **Site en production** | https://pierrre2db.github.io/promotionAI/ |
| **Page d'inscription HTML** | https://pierrre2db.github.io/promotionAI/inscription.html |
| **Page d'inscription Google Forms** | https://pierrre2db.github.io/promotionAI/inscription-forms.html (à configurer) |
| **Repository GitHub** | https://github.com/pierrre2db/promotionAI |
| **Google Sheet** | https://docs.google.com/spreadsheets/d/1a1pjMqzqpbaDyW7WGsnlBuiKO6eT6s4UJ1gLnkjpJ4k/ |
| **Site Artemys Belgium** | https://www.artemys-belgium.be/ |

### Documentation projet
| Fichier | Description | Priorité |
|---------|-------------|----------|
| **TODO_PROJET.md** | Roadmap et to-do list complète (ce fichier) | ⭐⭐⭐ |
| **APIS_ET_CLES.md** | **Référence complète APIs, URLs et clés** | ⭐⭐⭐ |
| **GIT_WORKFLOW.md** | **Workflow Git professionnel (NOUVEAU)** | ⭐⭐⭐ |
| **CONTRIBUTING.md** | **Guide de contribution (NOUVEAU)** | ⭐⭐⭐ |
| **SOLUTION_EMAILS.md** | Résolution complète du problème d'emails | ⭐⭐⭐ |
| **GUIDE_TEST_FORMULAIRE.md** | Procédure de test du formulaire | ⭐⭐ |
| **DEBUG_EMAILS.md** | Guide de débogage emails | ⭐⭐ |
| **GUIDE_COMPLET_GOOGLE_SHEET.md** | Configuration Google Sheet et Apps Script | ⭐⭐ |
| **GOOGLE_FORMS_SETUP.md** | Guide Google Forms (Phase 2 - En pause) | ⭐ |
| **GOOGLE_SHEET_INTEGRATION.md** | Documentation intégration Google Sheet | ⭐ |
| **README.md** | Documentation générale du projet | ⭐ |
| **DEPLOY.md** | Guide de déploiement GitHub Pages | ⭐ |
| **CHANGELOG.md** | Historique des versions | ⭐ |

---

## 📈 MÉTRIQUES À SUIVRE

- [ ] Nombre d'inscriptions par semaine
- [ ] Taux de conversion (visites → inscriptions)
- [ ] Secteurs d'activité les plus représentés
- [ ] Niveau d'expérience IA des participants
- [ ] Taux d'opt-in newsletter
- [ ] Sources de trafic (direct, référencement, social)

---

## 🛠️ MAINTENANCE

### Tâches régulières
- [ ] Vérifier les inscriptions quotidiennement
- [ ] Répondre aux inscrits sous 24h
- [ ] Exporter les données avant chaque formation
- [ ] Nettoyer les doublons éventuels
- [ ] Archiver les anciennes sessions

### Mises à jour planifiées
- [ ] Ajouter de nouvelles dates de formation
- [ ] Mettre à jour les tarifs (si applicable)
- [ ] Actualiser le contenu de la formation
- [ ] Optimiser le SEO de la page

---

## 📝 NOTES

- **Version actuelle** : v1.0.0 (Formulaire HTML + Google Sheet)
- **Prochaine version** : v1.1.0 (+ Google Forms en parallèle)
- **Budget** : 0€ (solution 100% gratuite)
- **Scalabilité** : Illimitée (Google Sheet supporte jusqu'à 5 millions de cellules)

---

**Dernière modification** : 3 novembre 2025 par Claude Code
