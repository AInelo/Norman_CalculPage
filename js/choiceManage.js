// flatpickr("#datePicker", {
//   // enableTime: true,
//     altInput: true,
//   altFormat: "F j, Y",
//      dateFormat: "Y-m-d",
//      minDate: "today"
// });
//
// flatpickr("#dateSelect", {
//   altInput: true,
//   altFormat: "j F, Y",
//   dateFormat: "Y-m-d",
//   minDate: "today"
// });
(g => {
    var h, a, k, p = "The Google Maps JavaScript API",
        c = "google",
        l = "importLibrary",
        q = "__ib__",
        m = document,
        b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}),
        r = new Set,
        e = new URLSearchParams,
        u = () => h || (h = new Promise(async (f, n) => {
            await (a = m.createElement("script"));
            e.set("libraries", [...r] + "");
            for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
            e.set("callback", c + ".maps." + q);
            a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
            d[q] = f;
            a.onerror = () => h = n(Error(p + " could not load."));
            a.nonce = m.querySelector("script[nonce]")?.nonce || "";
            m.head.append(a)
        }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
})
({
    key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
    v: "weekly"
});


// POUR SOUVEGARDE DES CHOIX DU CLIENT




// Pour l'affichage de la choix de mode de déménagment
document.addEventListener("DOMContentLoaded", function() {
    // BUTTON A CLICKER
    const BtntypeDemenagement = document.querySelector('#typeDemenagement');
    // VOLET A AFFICHER OU CACHER
    const demenagementChoice = document.getElementById('demenagementChoice');
    const locationChoice = document.getElementById('locationChoice');
    const calculateur = document.getElementById('primary')
    // Ajoutez un gestionnaire d'événements pour le clic sur LE CLICK
    BtntypeDemenagement.addEventListener("click", function(event) {
        // Empêche le comportement par défaut du lien
        event.preventDefault();
        // Affiche le formulaire de contact
        demenagementChoice.style.display = 'block';

        locationChoice.style.display = 'none';

        calculateur.style.display = 'none';

    });
});
// POUR L'AFFICHAGE DU VOLET DE LIEU ET ARRIVE LOCATION
document.addEventListener("DOMContentLoaded", function() {
    const BtnlieuHeureDemenagement = document.querySelector('#lieuHeureDemenagement');
    // VOLET A AFFICHER OU CACHER
    const demenagementChoice = document.getElementById('demenagementChoice');
    const locationChoice = document.getElementById('locationChoice');
    const calculateur = document.getElementById('primary')
    // Ajoutez un gestionnaire d'événements pour le clic sur LE CLICK
    BtnlieuHeureDemenagement.addEventListener("click", function(event) {
        event.preventDefault();

        demenagementChoice.style.display = 'none';

        locationChoice.style.display = 'block';

        calculateur.style.display = 'none';

    })

})


// POUR L'AFFICHAGE DU VOLET DU CALCULATEUR
document.addEventListener('DOMContentLoaded', function() {
    const BtnfournitureDemenagement = document.querySelector('#fournitureDemenagement');
    // VOLET A AFFICHER OU CACHER
    const demenagementChoice = document.getElementById('demenagementChoice');
    const locationChoice = document.getElementById('locationChoice');
    const calculateur = document.getElementById('primary')
    // Ajoutez un gestionnaire d'événements pour le clic sur LE CLICK
    BtnfournitureDemenagement.addEventListener("click", function(event) {
        event.preventDefault();

        demenagementChoice.style.display = 'none';

        locationChoice.style.display = 'none';

        calculateur.style.display = 'block';

    })

})
