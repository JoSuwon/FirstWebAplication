const body = document.querySelector("body");

const IMG_NUMBER = 6;

init();

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

function getRandom() {
    return Math.floor(Math.random() * IMG_NUMBER) + 1;
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}
