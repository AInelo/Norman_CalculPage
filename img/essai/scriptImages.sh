#!/bin/bash

# Liste des liens des images à télécharger
image_links=(
    "https://www.demenageur.com/wp-content/uploads/2020/03/carton-s.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/canape3-1.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/canape-2.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/bibliotheque-g.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/table-p.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/bureau-g.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/commode.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/bibliotheque-m.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/enfilade.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/bureau-p.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/secretaire.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/lampadaire.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/biblioteque-p-1.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/meuble-tv.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/fauteuil.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/fauteuil-b.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/table-b.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/chaise-b.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/tapis.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/plantes-1.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/suspension.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/miroir.png"
    "https://www.demenageur.com/wp-content/uploads/2020/03/tableau.png"
    
    # Ajoutez d'autres liens au besoin
)

# Boucle sur chaque lien et utilise wget pour télécharger l'image
for link in "${image_links[@]}"
do
    # Extrait le nom du fichier à partir du lien
    filename=$(basename "$link")
    
    # Télécharge l'image en conservant son nom d'origine
    wget "$link" -O "$filename"

    # Vous pouvez ajouter d'autres opérations ici si nécessaire
done
