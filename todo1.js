const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];
let listIndex = 1;

init();

function init() {
    loadStorage();
    toDoForm.addEventListener("submit", toDoSubmit);
}

function loadStorage() {
    const localStorageToDos = localStorage.getItem(TODOS_LS);
    if(localStorageToDos != null) {
        const parsedToDos = JSON.parse(localStorageToDos);
        for(var i=0; i<parsedToDos.length; i++) {
            addList(parsedToDos[i].text);
        }
    }
}

function toDoSubmit(e) {
    e.preventDefault();
    const inputValue = toDoInput.value;
    toDoInput.value = "";
    addList(inputValue);
}
//<i class="fa fa-trash"></i> 
function addList(listValue) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const tagI = document.createElement("i");
    tagI.classList.add("fa");
    tagI.classList.add("fa-trash");
    tagI.classList.add("fa-2x");
    const span = document.createElement("span");
    const liId = listIndex++;
    delBtn.appendChild(tagI);
    tagI.addEventListener("click", deleteList);
    span.innerHTML = listValue;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = liId;
    toDoList.appendChild(li);
    const toDo = {
        text: listValue,
        id: liId
    };
    toDos.push(toDo);
    saveLocalStorage();
}

function saveLocalStorage() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteList(e) {
    const li = e.target.parentNode;
    const lili = e.target.parentNode.parentNode;
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id != lili.id;
    });
    toDoList.removeChild(lili);
    toDos = cleanToDos;
    saveLocalStorage();
}