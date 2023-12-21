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
function performVolumeCalculation($furnitures) {
    // Convertissez la chaîne de requête en un tableau associatif
    parse_str($furnitures, $furnitureData);

    // Chargez les données depuis le fichier JSON (ajustez le chemin en conséquence)
    $jsonData = file_get_contents('./json/biens.json');
    $objectsData = json_decode($jsonData, true);

    // Initialisez la variable pour stocker le volume total
    $totalVolume = 0;

    // Vérifiez si les données nécessaires sont présentes
    if (isset($furnitureData['furniture'])) {
        // Parcourez chaque meuble
        foreach ($furnitureData['furniture'] as $class => $quantity) {
            // Vérifiez si la classe existe dans les données JSON
            if (isset($objectsData[$class])) {
                // Récupérez les dimensions du meuble depuis le fichier JSON
                $length = floatval($objectsData[$class]['length']);
                $width = floatval($objectsData[$class]['width']);
                $height = floatval($objectsData[$class]['height']);

                // Récupérez la quantité du meuble
                $quantity = intval($quantity);

                // Calculez le volume du meuble
                $volume = $length * $width * $height * $quantity;

                // Ajoutez le volume du meuble au total
                $totalVolume += $volume;
            }
        }

        // Formattez le résultat
        $formattedResult = sprintf("%.2f", $totalVolume);

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
