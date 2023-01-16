let div1 = document.getElementById("div1");
let p1 = document.getElementById("p1");
let div2 = document.getElementById("div2");
let p2 = document.getElementById("p2");

//Phase de BOUILLONNEMENT utilisée pour div1 et  p1
//p1 se déclenche avant div1
div1.addEventListener("click", MessageDiv1);
p1.addEventListener("click", MessageP1);
function MessageDiv1() {
  alert("Evènement du div1");
}
function MessageP1() {
  alert("Evènement du paragraphe p1");
}

//Phase de CAPTURE utilisée pour div2 et p2
//div2 se déclencle avant p2
div2.addEventListener("click", MessageDiv2, true);
p2.addEventListener("click", MessageP2, true);
function MessageDiv2() {
  alert("Evènement du div2");
}
function MessageP2() {
  alert("Evènement du paragraphe p2");
}
