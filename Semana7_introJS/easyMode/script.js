// let contenedor = document.getElementsByClassName("contenedor");
let boton = document.getElementsByClassName("boton");
let element;
// let colores = ["orange", "green", "blue", "yellow"];
const i = 0;

for (let i = 0; i < boton.length; i++) {
  let botonObj = boton[i];
  botonObj.addEventListener("click", cambiarColor);
}

window.onload = function () {
todosColor();
}

function cambiarColor(){
  coloresHexa = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
  cutIn= 0;
  var myRandone = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];
  var myRandtwo = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];
  var myRandthree = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];
  var myRandfour = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];
  var myRandfive = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];
  var myRandsix = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];

  var sixDigitRandom =  myRandone + myRandtwo + myRandthree + myRandfour + myRandfive + myRandsix; /*se hace la union de los elementos(string) del hexadecimal*/
  console.log(sixDigitRandom)

  // const indice = Math.floor((Math.random() * colores.length));
  const contenedor = this.parentNode; /*accedo al nodo padre que vendría siendo el div*/
  contenedor.style.backgroundColor = "#"+sixDigitRandom;
  const texto = this.parentNode.childNodes[1]; /* acceso al element texto*/
  texto.innerHTML = "#"+sixDigitRandom;
}

function todosColor() { 
    coloresHexa = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
    
    var unoRandom = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];
    var dosRandom = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];
    var tresRandom = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];
    var cuatroRandom = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];
    var cincoRandom = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];
    var seisRandom = coloresHexa[Math.floor(Math.random() * coloresHexa.length)];

    var azar1 = unoRandom + dosRandom + tresRandom + cuatroRandom + cincoRandom + seisRandom;
    var azar2 =  cuatroRandom + cincoRandom + seisRandom + tresRandom + unoRandom+dosRandom;
    var azar3 =  cincoRandom + dosRandom +tresRandom+ seisRandom + unoRandom + cuatroRandom;
    var azar4 = cincoRandom + cuatroRandom + seisRandom + unoRandom + dosRandom + tresRandom ;

    const Div1 = (document.getElementById("div1").style.backgroundColor = "#" + azar1);
    const text1 = (document.getElementById("text1").innerHTML = "#"+azar1);

    const Div2 = (document.getElementById("div2").style.backgroundColor = "#" + azar2);
    const text2 = (document.getElementById("text2").innerHTML = "#"+azar2);

    const Div3 = (document.getElementById("div3").style.backgroundColor = "#" + azar3);
    const text3 = (document.getElementById("text3").innerHTML = "#"+azar3);
    
    const Div4 = (document.getElementById("div4").style.backgroundColor = "#" + azar4);
    const text4 = (document.getElementById("text4").innerHTML = "#"+azar4);
}


