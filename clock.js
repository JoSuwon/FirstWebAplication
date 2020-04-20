const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

init();

function init() {
    getTime();
    setInterval(getTime, 1000);    
}
//<h1><i class="fa fa-moon-o"></i></h1>
function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    if(hours > 12) {
        clockTitle.innerHTML = `PM ${hours < 10 ? `0${hours}` : hours-12}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    } else {
        clockTitle.innerHTML = `AM ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
}