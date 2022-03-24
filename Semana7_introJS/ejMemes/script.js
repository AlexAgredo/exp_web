var img = document.createElement("img");
var boton = document.getElementsByClassName("boton")[0];
var input = document.getElementById("input");
img.src = "./memes/1.jpeg";
var div = document.getElementById("imagen");
div.appendChild(img);

boton.addEventListener("click", cambiarMeme);

function cambiarMeme() {
    if (input.value === "AZNTY") {
        srcArray = new Array("./memes/2.jpg", "./memes/3.jpg", "./memes/4.jpeg", "./memes/5.jpeg", "./memes/6.jpg", "./memes/7.jpg", "./memes/8.jpg", "./memes/9.jpg", "./memes/10.jpg");
        img.src = srcArray[Math.floor(Math.random() * srcArray.length)];
    } else {
        console.log(input.value)
    }

}

