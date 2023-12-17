
<?php
// Assurez-vous que la requête est bien une requête AJAX et qu'elle contient l'action nécessaire
if (isset($_POST['action'])) {
    // Incluez ici toute logique nécessaire pour le calcul des volumes

    // Récupérez les données du formulaire
    $mode = isset($_POST['mode']) ? $_POST['mode'] : '';
    $furnitures = isset($_POST['furnitures']) ? $_POST['furnitures'] : '';

    // Traitez les données selon le mode
    if ($mode == 'm3') {
        // Effectuez le calcul nécessaire et renvoyez les résultats
        $result = performVolumeCalculation($furnitures);
        echo $result;
    } elseif ($mode == 'listing') {
        // Effectuez le traitement nécessaire pour le mode 'listing' et renvoyez les résultats
        $result = generateListing($furnitures);
        echo $result;
    } else {
        // Mode non reconnu
        echo 'Invalid mode';
    }
} else {
    // La requête n'est pas une requête AJAX valide
    echo 'Invalid AJAX request';
}

// Fonction pour le calcul de volume
// function performVolumeCalculation($furnitures) {
    // Implémentez votre logique de calcul de volume ici en utilisant les données fournies
    // ...

    // Exemple de résultat (à remplacer par votre logique)
  //  $volumeResult = "Le volume calculé est : 42 m³";

  //  return $volumeResult;
// }

// Fonction pour le calcul de volume
function performVolumeCalculation($furnitures) {
    // Convertissez la chaîne de requête en un tableau associatif
    parse_str($furnitures, $furnitureData);

    // Initialisez la variable pour stocker le volume total
    $totalVolume = 0;

    // Vérifiez si les données nécessaires sont présentes
    if (isset($furnitureData['furniture'])) {
        // Parcourez chaque meuble
        foreach ($furnitureData['furniture'] as $furniture) {
            // Récupérez les dimensions du meuble
            $length = isset($furniture['length']) ? floatval($furniture['length']) : 0;
            $width = isset($furniture['width']) ? floatval($furniture['width']) : 0;
            $height = isset($furniture['height']) ? floatval($furniture['height']) : 0;

            // Récupérez la quantité du meuble
            $quantity = isset($furniture['quantity']) ? intval($furniture['quantity']) : 0;

            // Calculez le volume du meuble
            $volume = $length * $width * $height * $quantity;

            // Ajoutez le volume du meuble au total
            $totalVolume += $volume;
        }

        // Formattez le résultat
        $formattedResult = sprintf("Le volume total calculé est : %.2f m³", $totalVolume);

        // Renvoyez le résultat
        return $formattedResult;
    } else {
        // Les données nécessaires ne sont pas présentes
        return 'Erreur : Les données nécessaires ne sont pas fournies pour le calcul du volume.';
    }
}



// Fonction pour la génération de la liste d'inventaire
function generateListing($furnitures) {
    // Implémentez votre logique de génération de liste d'inventaire ici en utilisant les données fournies
    // ...


    // Exemple de résultat (à remplacer par votre logique)
    $listingResult = "Liste d'inventaire : Table, Chaise, Lit";

    return $listingResult;
}


?>
