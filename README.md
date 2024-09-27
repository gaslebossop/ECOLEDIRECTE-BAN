#Ecole Directe Account Blocker by GasLeboss

##Description

Ce script JavaScript permet de simuler des tentatives de connexion sur le service Ecole Directe. Il envoie plusieurs requêtes de connexion à l'API d'Ecole Directe dans le but de bloquer un compte spécifique.

##Avertissement

**Utilisation illégale et éthique : Ce code est destiné à des fins éducatives uniquement. L'utilisation de ce script pour bloquer ou attaquer des comptes d'utilisateurs sans autorisation est illégale et contraire aux politiques de la plupart des services. L'auteur ne peut être tenu responsable de l'utilisation abusive de ce code.

##Prérequis

- Node.js (version 14 ou supérieure)
- Les modules Node.js readline, fs et node-fetch

##Installation

1. Clonez ou téléchargez le dépôt contenant ce code.
2. Ouvrez un terminal et naviguez vers le dossier contenant le fichier.
3. Installez les dépendances nécessaires en exécutant :
```bash
   npm install node-fetch
   node ban.js
```

##Utilisation

**1. Remplissez la variable identifiant dans la fonction auto-exécutante avec l'identifiant du compte que vous souhaitez bloquer.
2. Exécutez le script en utilisant la commande suivante :
```bash
   node ban.js
```

**Structure du Code

Le script se compose des parties suivantes :

- Imports : Le code commence par importer les modules nécessaires (readline, fs, et node-fetch).

- Fonction login : 
  - Cette fonction prend en paramètre l'identifiant, le mot de passe, et un tableau d'authentification à deux facteurs (facultatif).
  - Elle prépare les données de connexion et les envoie à l'API d'Ecole Directe.
  - Les réponses sont enregistrées et les erreurs sont gérées avec un message d'erreur approprié.

- Exécution principale :
  - Un bloc auto-exécutant qui commence l'attaque en boucle 150 fois.
  - Pour chaque itération, une tentative de connexion est faite avec un mot de passe fictif.
  - Un délai de 100 millisecondes est ajouté entre chaque tentative pour éviter d'être détecté.

##Notes Techniques

**- Authentification : L'API utilise un format JSON encodé pour les données de connexion.
- User-Agent : Le script envoie un en-tête User-Agent pour simuler une requête provenant d'un navigateur standard.

##Contributions

**Si vous souhaitez contribuer à ce projet, veuillez le faire de manière responsable et légale. Toute contribution qui encourage une utilisation malveillante sera ignorée.

##Contact

Pour toute question ou remarque, vous pouvez me contacter à : gaslebossapp@gmail.com
