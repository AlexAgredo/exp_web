class Persona {
    nombre;
}

const alex = new Persona();
alex.nombre = "Alexander";
console.log(alex.nombre);

class Persona2 {
    saludo() {
        console.log("Entonces manito");
    }
}
const andres = new Persona2();
andres.saludo();

class Persona3 {
    constructor(nombre, edad, estatura) {
        this.nombre = nombre;
        this.edad = edad;
        this.estatura = estatura;
    }
    saludo() {
        console.log(`Hablame, ${this.nombre}, tengo ${this.edad} años y mido ${this.estatura} cm`);
    }
}
const jaime = new Persona3("Jaime", 19, "1.78");
jaime.saludo();