const greetingForm = document.querySelector(".js-form");
const greetingInput = greetingForm.querySelector("input");
const greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

init();

function init() {
    loadName();
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function askForName() {
    greetingForm.classList.add(SHOWING_CN);
    greetingForm.addEventListener("submit", formSubmit);
}

function formSubmit(e) {
    e.preventDefault();
    const inputValue = greetingInput.value;
    paintGreeting(inputValue);
    saveNameAtLocalStorage(inputValue);
}

function paintGreeting(inputValue) {
    greetingForm.classList.remove(SHOWING_CN);
    greetings.innerHTML = `안녕하세요. ${inputValue}님 `;
    greetings.classList.add(SHOWING_CN);
    const tagI = document.createElement("i");
    tagI.classList.add("fa");
    tagI.classList.add("fa-refresh");
    tagI.classList.add("fa-spin");
    tagI.classList.add("fa-3x");
    tagI.addEventListener("click", refreshName);
    const delBtn = document.createElement("button");
    delBtn.appendChild(tagI);
    greetings.appendChild(delBtn);
}

function saveNameAtLocalStorage(inputValue) {
    localStorage.setItem(USER_LS, inputValue);
}

function refreshName(e) {
    localStorage.removeItem(USER_LS);
    greetingInput.value = "";
    greetingForm.classList.add(SHOWING_CN);
    greetings.classList.remove(SHOWING_CN);
}