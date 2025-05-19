## Instructions pour accéder en remote (sur internet):

Visiter le lien suivant: http://139.59.149.92/

## 8. Instructions d'Installation en local

1. **Cloner le dépôt** :
    
    ```bash
    git clone https://github.com/fatensayeh/portfolio-main.git
    ou récupérer le fichier zip 
    ```
    
2. **Installation des dépendances** :
    - Frontend :
        
        ```bash
        cd chemin-vers-dossier/portfolio-main
        npm install
        npm run dev
        
        ```
        
3. **Configuration de la base de données** :
    
    Le backend utilise SQLite. Aucune configuration supplémentaire n'est nécessaire.
    
4. **Démarrage de l'application** :
    - Backend :
        
        ```bash
        cd chemin-vers-dossier/portfolio-main/service
        node server.js
        ```
        
    - Frontend :

       ```bash
       cd chemin-vers-dossier/portfolio-main
       npm run dev
       ```