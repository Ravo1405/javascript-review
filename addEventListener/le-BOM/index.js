let ouvrir = document.getElementById("ouvrir");
let changer = document.getElementById("changer");
let fermer = document.getElementById("fermer");
let fenetre = "";

ouvrir.addEventListener("click", fOuvrir);
changer.addEventListener("click", fChanger);
fermer.addEventListener("click", fFermer);

function fOuvrir() {
  fenetre = window.open(
    "https://developer.mozilla.org/fr/",
    "_blank",
    "width = 500"
  );
}
function fChanger() {
  fenetre.resizeTo(300, 300);
}
function fFermer() {
  fenetre.close();
}
