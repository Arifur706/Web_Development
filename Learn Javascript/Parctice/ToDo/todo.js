const container = document.querySelector(".container");
const form = document.querySelector(".form");
const input = document.querySelector("#input");
const button = document.querySelector("#btn1");
const lists = document.querySelector(".lists");
const messege = document.querySelector(".messege");

//Add local Storage(Do it last)
const gettoDoslocal = ()=>{
    return localStorage.getItem('myTodos') ? JSON.parse(localStorage.getItem('myTodos')) : [];
};

//Adding ToDo(1st do it)
const addTodo = (event) =>{
    event.preventDefault();
    const toDoValue = input.value;
    console.log(toDoValue);

    //generate unique id for each item
    const toDoId = Date.now().toString();
    createTodo(toDoId, toDoValue)
    //do it after 4th
    showMessege("Todo Added in List", 'success');

    //Add list is local Storage
    const toDos = gettoDoslocal();

    toDos.push({toDoId, toDoValue});
    localStorage.setItem('myTodos' , JSON.stringify(toDos));

    input.value = "";
};

//create Todo (3rd do it)
const createTodo = (toDoId, toDoValue) =>{
    const toDoElement = document.createElement("li")
    toDoElement.id = toDoId;
    toDoElement.classList.add('lists');
    toDoElement.innerHTML = `
    <span>${toDoValue}</span>
    <span><button id='done'"><i class="fa-regular fa-square-check"></i></button></span>
    `

    lists.appendChild(toDoElement);
    //do it after 4th
    const doneButton =toDoElement.querySelector("#done");
    doneButton.addEventListener("click",doneToDo);
};

//show messege(4th do it)
const showMessege = (text, status) =>{
    messege.textContent = text;
    messege.classList.add(`messege-${status}`);

    setTimeout(() => {
        messege.textContent = "";
        messege.classList.remove(`messege-${status}`);
    }, 1000);
};

//Remove after done(do it 5th)
const doneToDo = (event) =>{
    const selectedTodo = event.target.parentElement.parentElement.parentElement;
    
    lists.removeChild(selectedTodo);

    showMessege("Todo is Done", 'done');

    //after add local storage
    const doneId = selectedTodo.id;
    let toDos = gettoDoslocal();
    toDos  = toDos.filter((toDos) => toDos.toDoId != doneId)

    localStorage.setItem('myTodos', JSON.stringify(toDos));
};

//load Todos(finishing)
const loadTodos = () =>{
    const toDos = gettoDoslocal();
    toDos.map((toDos) => createTodo(toDos.toDoId, toDos.toDoValue));
};


//Adding Listener(2nd do it)
form.addEventListener('submit', addTodo);

window.addEventListener("DOMContentLoaded", loadTodos);