# Changelog

Toutes les modifications remarquables de ce projet sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
et ce projet suit le [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2025-01-09

### Added
- 🎉 Version initiale du site de promotion
- ✅ Header avec logo Artemys Belgium
- ✅ Section "Appétence" pour engager les visiteurs
- ✅ 6 modules d'acculturation à l'IA
- ✅ Section "Infos Pratiques" avec détails clés
- ✅ Design responsive (mobile, tablet, desktop)
- ✅ Couleurs cohérentes avec l'identité Artemys
- ✅ CTA "S'Inscrire" clairs et accessibles
- ✅ Footer avec informations de contact
- ✅ Smooth scroll navigation

### Design & UX
- Palette Artemys Blue (#0066CC) et Dark (#003D7A)
- Accent Orange (#F39C12) pour les éléments importants
- Typographie lisible et hiérarchie claire
- Pas de distraction - focus sur la conversion

### Contenu
- Positionnement marketing direct et efficace
- 6 modules concis et pertinents
- Appel à l'action répété
- Information complète en une page

### Technical
- HTML5 sémantique
- CSS moderne (Grid, Flexbox)
- JavaScript vanilla (smooth scroll, CTA)
- Pas de dépendances externes
- Performant et léger

---

## [1.3.0] - 2025-11-04 [EN COURS]

### 🚀 Système Multi-Sociétés

Cette version majeure rend le système réutilisable pour plusieurs sociétés/clients.

### Added
- ✅ **config.json** - Configuration centralisée externalisée
  - Nom de la société personnalisable
  - Logo dynamique
  - Couleurs de branding configurables
  - Adresse et contacts
  - Textes du formulaire personnalisables
- ✅ **Destinataires emails configurables**
  - Support jusqu'à 4 destinataires
  - Configuration via `notifications.recipients` dans config.json
  - Sujet d'email personnalisable avec templates
- ✅ **Chargement dynamique de configuration**
  - inscription.html charge config.json au démarrage
  - Application automatique du branding (logo, couleurs, textes)
  - Fallback sur configuration par défaut si échec
- ✅ **google-apps-script-v1.3.js** - Script mis à jour
  - Lecture des destinataires depuis la requête
  - Support sujet email dynamique
  - Compatibilité backward avec v1.2.0
- ✅ **CONFIG.md** - Documentation complète
  - Guide de déploiement multi-sociétés
  - Référence complète de tous les paramètres
  - Exemples de configurations
  - Guide de tests et dépannage

### Changed
- 🔧 **inscription.html**
  - Ajout fonction `loadConfig()` et `applyConfig()`
  - Variables CSS dynamiques basées sur config
  - URL webhook depuis configuration
  - Envoi des recipients et emailSubject au backend
- 🔧 **Google Apps Script**
  - Fonction `doPost()` lit les recipients dynamiquement
  - Fonction `sendEmailNotification()` supporte sujet personnalisé
  - Logging amélioré avec info société

### Documentation
- ✅ CONFIG.md créé (guide complet 900+ lignes)
- ✅ TODO_PROJET.md mis à jour avec section v1.3.0
- ✅ CHANGELOG.md mis à jour
- ⏳ APIS_ET_CLES.md à mettre à jour
- ⏳ README.md à mettre à jour

### Breaking Changes
⚠️ **Aucun** - Rétrocompatible avec v1.2.0 grâce au fallback

### Migration depuis v1.2.0
1. Créer config.json à la racine avec la configuration existante
2. Mettre à jour le Google Apps Script avec google-apps-script-v1.3.js
3. Créer un nouveau déploiement du script
4. Mettre à jour l'URL dans config.json
5. Tester le formulaire

### Tests
- [ ] Chargement config.json
- [ ] Application du branding
- [ ] Envoi formulaire avec 1, 2, 3, 4 destinataires
- [ ] Emails reçus par tous les destinataires
- [ ] Fallback si config.json manquant

---

## [1.2.0] - 2025-11-03

### 🎉 Système emails 100% opérationnel

### Added
- ✅ Fonction `sendEmailNotification()` dans Google Apps Script
- ✅ Fonction `testDoPost()` pour tests manuels
- ✅ Permissions Gmail accordées au script
- ✅ Emails automatiques aux 2 destinataires configurés

### Fixed
- 🐛 **[CRITIQUE]** Emails non envoyés après soumission formulaire
  - Cause 1 : Fonction sendEmailNotification() manquante
  - Cause 2 : Permissions Gmail non accordées
  - Solution : Script complet + nouveau déploiement avec permissions

### Changed
- 🔧 Nouveau déploiement Google Apps Script avec permissions Gmail
- 🔧 URL webhook mise à jour dans inscription.html
- 🔧 Configuration EMAIL_RECIPIENTS avec 2 destinataires

### Documentation
- ✅ SOLUTION_EMAILS.md - Documentation complète résolution
- ✅ DEBUG_EMAILS.md - Guide de débogage
- ✅ APIS_ET_CLES.md mis à jour avec nouvelle URL webhook
- ✅ TODO_PROJET.md mis à jour - Phase 1 terminée

### Tests
- ✅ Test manuel avec testDoPost() réussi
- ✅ Email reçu pierre2db@gmail.com
- ✅ Email reçu Thierry.BODSON@artemys-belgium.be
- ✅ Données dans Google Sheet correctes

---

## [1.1.0] - 2025-11-03

### 📊 Intégration Google Sheet

### Added
- ✅ Google Sheet "Inscriptions Formation IA - Artemys"
- ✅ 11 colonnes de données configurées
- ✅ Google Apps Script pour réception webhook
- ✅ Fonction `doPost()` pour traitement des inscriptions
- ✅ Enregistrement automatique dans le Sheet
- ✅ Horodatage automatique
- ✅ Formatage des données (Oui/Non pour newsletter)

### Changed
- 🔧 inscription.html connecté au webhook Google Apps Script
- 🔧 Envoi des données en JSON via fetch API
- 🔧 Mode 'no-cors' pour compatibilité

### Documentation
- ✅ GUIDE_COMPLET_GOOGLE_SHEET.md créé
- ✅ APIS_ET_CLES.md créé avec toutes les URLs et clés
- ✅ TODO_PROJET.md créé avec roadmap complète

### Tests
- ✅ Formulaire → Google Sheet fonctionnel
- ✅ Validation des 11 colonnes
- ✅ Test avec données réelles réussi

---

## À venir

### [1.4.0] - Planifié
- [ ] Google reCAPTCHA anti-spam
- [ ] Email de confirmation automatique à l'inscrit
- [ ] Synchronisation Google Calendar
- [ ] Gestion automatique des places restantes

### [1.5.0] - Planifié
- [ ] Support multilingue (FR/EN)
- [ ] Dashboard d'administration
- [ ] Statistiques et graphiques
- [ ] Export automatique des données

### [2.0.0] - Planifié
- [ ] Interface web de configuration (plus besoin d'éditer JSON)
- [ ] Multi-formations (plusieurs formations par société)
- [ ] Système de paiement en ligne
- [ ] Refonte complète avec CMS

---

## Notes pour les développeurs

### Branches de travail
- `main` : Version stable (production)
- `develop` : Version de développement
- `feature/*` : Nouvelles fonctionnalités
- `bugfix/*` : Corrections de bugs

### Commits
Utiliser le format :
```
[TYPE] Courte description

Description détaillée si nécessaire.

Fixes #123 (si applicable)
```

Types de commits :
- `[FEATURE]` : Nouvelle fonctionnalité
- `[FIX]` : Correction de bug
- `[DOCS]` : Documentation
- `[STYLE]` : Formatage, sans changement logique
- `[REFACTOR]` : Restructuration sans changement logique
- `[PERF]` : Amélioration de performance

---

## Support

Pour toute question ou suggestion, contactez Artemys Belgium :
- 📧 ask@artemys-belgium.be
- 📞 +32 2 376 43 31
