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
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly"});


        const BtntypeDemenagement = document.querySelector('#typeDemenagement');
        const BtnlieuHeureDemenagement = document.querySelector('#lieuHeureDemenagement');
        const BtnfournitureDemenagement = document.querySelector('#fournitureDemenagement');


// Pour l'affichage de la choix de mode de déménagment
document.addEventListener("DOMContentLoaded", function() {
          // Obtenez une référence à l'élément de lien "contact-link"
          const BtntypeDemenagement = document.querySelector('#typeDemenagement');
          // Obtenez une référence à l'élément de formulaire de contact
          const sitedezan = document.querySelector('.sitedezan')



          // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
          historiqueLink.addEventListener("click", function(event) {
            // Empêche le comportement par défaut du lien
           event.preventDefault();
            // Affiche le formulaire de contact
              // sitedezan.style.display = "block";

              // choix.style.display = "block";
              // arch2021.style.display = "none";
              // arch2022.style.display = "block";
              // arch2023.style.display = "none";

              // footer.style.display = "block";

          });
        });
