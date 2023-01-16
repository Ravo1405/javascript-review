let p1 = document.querySelector("p");

p1.addEventListener("mouseover", Function1); //Quand on passe le souri sur le texte
p1.addEventListener("mouseout", Reset1); //Quand l'utilisateur sort de lélément
p1.addEventListener("mousedown", Function2); //Quand on clicque mais on ne relâche pas
p1.addEventListener("mouseup", Reset2); //Quand on relâche le clic

function Function1() {
  this.innerHTML = "Cliquez sur moi maintenant"; //On change le texte
  this.style.backgroundColor = "orange"; //Remettre la couleur de fond d'origine
}
function Reset1() {
  this.innerHTML = "Passez sur moi"; //On remet le texte d'origine
  this.style.backgroundColor = ""; //On remet la couleur de fond d'origine
}
function Function2() {
  this.innerHTML = "bravo"; //On change le texte
  this.style.color = "black"; //Mettre le texte en orange
  this.style.textTransform = "uppercase"; //Mettre le texte tout en majuscule
  this.style.fontWeight = "bold"; //Mettre le texte en gras
  this.style.fontSize = "36px"; //changer la taille
}
function Reset2() {
  this.innerHTML = "Passez sur moi"; //On remet le texte d'origine
  this.style.color = ""; //On remet la couleur d'origine
  this.style.textTransform = ""; //On remet en minuscule
  this.style.fontWeight = ""; //On remet le poids d'origine
  this.style.fontSize = ""; //On remet la taille d'origine
}
