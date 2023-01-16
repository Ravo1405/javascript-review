let p1 = document.querySelector("p");

p1.addEventListener("click", changeText); //Prend 2 paramètres: nom de l'évènement + nom de la fonction

function changeText() {
  this.innerHTML = "<strong>bravo!</strong>"; //On change le texte
  this.style.color = "orange"; //Mettre le texte en orange
  this.style.textTransform = "uppercase"; //Mettre le texte tout en majuscule
}
