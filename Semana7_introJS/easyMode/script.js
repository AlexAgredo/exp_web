let contenedor = document.getElementsByClassName("contenedor")[0];
let colores = ["orange", "green", "blue", "yellow"];

contenedor.addEventListener("click", function() {
    const i=0;
    for (let i = 0; i < colores.length; i++) {
        let color = colores[i];
        console.log(color)
    }
    this.style.backgroundColor = color;
  }); 

