let role = "Student";
console.log("Hola soy " + role + " de la UAO")

// Ahora hagamos lo mismo pero llmando la variable directamente en el sring
console.log(`Hola, soy ${role} de la GUAO`)

let numero = 1;
let cadena = "1";

if (numero === cadena) { /*el doble igual casi no se usa, se usa el triple porque compara no solo que haya igualdad en contenido (uno igual a uno) sino que el tipo de variable también sea la misma(no s lo mismo un string a un double)*/
    console.log("iguales")
} else {
    console.log("no iguales")
}

// operador AND
if (cadena == numero && numero === cadena) {
    console.log("iguales")
} else {
    console.log("no iguales")
}

// operador OR
if (cadena == numero || numero === cadena) {
    console.log("iguales")
} else {
    console.log("no iguales")
}

//Usando uno de los operadores Math(ver documentacion porque hay muchos)
let a = 35;
let b = 6;

let result = a / b;
console.log(result)
console.log(Math.round(result))


