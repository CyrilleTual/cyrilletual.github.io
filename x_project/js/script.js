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
  switch (choix.value) {
    case "100g":
      prix = 9;
      break;
    case "500g":
      prix = 40;
      break;
    case "1kg":
      prix = 75;
      break;
  }
  affichage.innerText = `${prix.toFixed(2)}€`;
}

// lancement de la fonction au chargement  de la page
majPrix();
