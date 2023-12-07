<?php
// Inclure le fichier WordPress pour utiliser ses fonctionnalités
require_once("../../wp-load.php");

// Fonction de calcul du volume
function calculate_volume() {
    // Récupérer les données du formulaire
    $furnitures = $_POST['furnitures'];

    // Votre logique de calcul du volume ici (à remplacer par votre propre code)
    // Exemple : calculer le volume en fonction des données fournies

    // Supposons que vous ayez une fonction qui effectue le calcul du volume
    $volume_result = calculate_volume_function($furnitures);

    // Envoyer la réponse au client (par exemple, le résultat du calcul)
    echo $volume_result;

    // Assurez-vous de terminer l'exécution après avoir envoyé la réponse
    wp_die();
}

// Fonction de génération de la liste d'inventaire
function generate_inventory_listing() {
    // Récupérer les données du formulaire
    $furnitures = $_POST['furnitures'];

    // Votre logique de génération de la liste d'inventaire ici (à remplacer par votre propre code)
    // Exemple : générer la liste d'inventaire en fonction des données fournies

    // Supposons que vous ayez une fonction qui génère la liste d'inventaire
    $inventory_listing = generate_inventory_listing_function($furnitures);

    // Envoyer la réponse au client (par exemple, la liste d'inventaire générée)
    echo $inventory_listing;

    // Assurez-vous de terminer l'exécution après avoir envoyé la réponse
    wp_die();
}

// Enregistrement des actions  pour les fonctions de rappel
add_action('wp_ajax_volume_calculator', 'calculate_volume');
add_action('wp_ajax_nopriv_volume_calculator', 'calculate_volume');

add_action('wp_ajax_listing_generator', 'generate_inventory_listing');
add_action('wp_ajax_nopriv_listing_generator', 'generate_inventory_listing');
?>
