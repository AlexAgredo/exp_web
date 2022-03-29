var img = document.createElement("img");
var boton = document.getElementsByClassName("boton")[0];
var input = document.getElementById("input");
var error = document.getElementById("error");
img.src = "./memes/1.jpg";
var div = document.getElementById("imagen");
div.appendChild(img);

boton.addEventListener("click", cambiarMeme);

function cambiarMeme() {
    if (input.value === "AZNTYR") {
        srcArray = new Array("./memes/2.jpg", "./memes/3.jpg", "./memes/4.jpeg", "./memes/5.jpeg", "./memes/6.jpg", "./memes/7.jpg", "./memes/8.jpg", "./memes/9.jpg", "./memes/10.jpg");
        img.src = srcArray[Math.floor(Math.random() * srcArray.length)];
        error.style.display = "none";
    } else {
        console.log(input.value)
        error.style.display = "block";
    }

}

