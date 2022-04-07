const button = document.querySelector('button')
const scoreElement = document.getElementById('scoreElement')

/*
setItem('clave','valor')
getItem('clave') => regresa el valor
removeItem('clave')
*/

if (typeof (localStorage) === 'undefined') {
    console.log("no lo tienes")
}

if (localStorage.getItem('score')) {
    scoreElement.innerText = localStorage.getItem('score')
} else {
    localStorage.setItem('score', '0')
}

button.onclick = () => {
    const currentScore = localStorage.getItem('score')

    localStorage.setItem('score', parseInt(currentScore) + 1) //localstorage solo recibe strings

    scoreElement.innerText = localStorage.getItem('score')
}

function guardar_localstorage() {
    const persona = {
        nombre: "Alex Agredo",
        edad: 22,
        correo: "nomelose@uao.edu.co"
    }

    localStorage.setItem('persona', JSON.stringify(persona))
}

guardar_localstorage()

function obtener_localstorage() {
    if (localStorage.getItem('persona')) {
        const persona = JSON.parse(localStorage.getItem('persona'))
        console.log(persona);
    }

}

obtener_localstorage()