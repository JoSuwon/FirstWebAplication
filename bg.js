const body = document.querySelector("body");

const IMG_NUMBER = 5;

init();

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

function getRandom() {
    return Math.floor(Math.random() * IMG_NUMBER) + 1;
}

function paintImage(imgNumber) {
    const div = document.createElement("div");
    div.classList.add("bgContainer");
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    div.appendChild(image);
    body.appendChild(div);
}
