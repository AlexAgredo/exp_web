//Hay 3 formas de inicializar un objeto en javascript
// // 1
// const carro1 = {
// }
// //2
// const carro2 = new Object();
// //3
// const carro3 = Object.create();

// iniciar objeto con new antes de una funcion
function Carro(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}
const miCarro = new Carro('Renault', 'Sandero', 'Gris')
miCarro.marca;
miCarro.modelo;
miCarro.color;
console.log("El carro es un " + miCarro.marca + " " + miCarro.modelo + " " + "de color " + miCarro.color);

// Cómo crear y llamar arreglos (objetos dentro de un objeto)
const vehiculo = {
    tipo: ["Caro", "Moto", "Pirata"],
    marca: {
        nombre: "Kia"
    },
    motor: "1200HP",
}
console.log(vehiculo.tipo[2]);
console.log(vehiculo.marca.nombre);
console.log(vehiculo.motor)

// Otra forma de llamar datos del objeto
const car = {
    marca: "Susuki",
    model: "Swift",
    start: function () {
        console.log("Car started " + `${this.marca}` + " " + `${this.model}`);
    }
}
car.start();