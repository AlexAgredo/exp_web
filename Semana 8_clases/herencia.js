class Vehiculo {
    constructor(tipo, dueño, costo) {
        this.tipo = tipo;
        this.dueño = dueño;
        this.costo = costo;
    }
}

class venta extends Vehiculo {
    constructor(tipo, dueño, costo, marca, kilometraje, cilindraje) {
        super(tipo, dueño, costo);
        this.marca = marca;
        this.kilometraje = kilometraje;
        this.cilindraje = cilindraje;
    }
    reporte() {
        console.log(`El vehiculo es un ${this.tipo} de marca ${this.marca} con ${this.kilometraje} km de uso, tiene un motor ${this.cilindraje}cc.
        Su anterior dueño se llamaba ${this.dueño} y el costo es de ${this.costo} pesos.`)
    }
}

const venta1 = new venta("Carro", "Juan", 38000000, "Mazda", 5000, "1000");
venta1.reporte();
