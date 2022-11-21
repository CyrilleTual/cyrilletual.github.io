// mise à jour du prix en fonction de la quantité page product

let prix = 0;
const choix = document.getElementById("panier");
const affichage = document.getElementById("affPrix");

// ecoute du changement de quantité //
choix.addEventListener("change", function (e) {
  majPrix();
});

// fonction principale
function majPrix() {
  affichage.innerText = Number(choix.value).toFixed(2).replace(".", ",") + " €";
}

// lancement de la fonction au chargement  de la page
majPrix();

// ajout aux favoris

function pop() {
  alert("liste d'entrée mise à jour");
}
