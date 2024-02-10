const container = document.querySelector(".container");

const form = document.querySelector(".form");

const input = document.querySelector("#input");

const button = document.querySelector("#button");

const lists = document.querySelector("#list");

const messege = document.querySelector("#messege");

//create Todo

const createTodo = (todovId, todov) => {
  const todoEelement = document.createElement("li");
  todoEelement.id = todovId;
  todoEelement.classList.add('list');
  todoEelement.innerHTML = `
    <span> ${todov} </span>
    <span><button class="button" id ="delete">
    <i class ="fa fa-trash"></i></button></span>
    `;
    lists.appendChild(todoEelement);

    const deleteb = todoEelement.querySelector('#delete');
    deleteb.addEventListener('click', deleteTodo)
};

const showMessege =(text, status) =>{
    messege.textContent = text;
    messege.classList.add(`messege-${status}`);

    setTimeout(() => {
        messege.textContent = "";
        messege.classList.remove(`messege-${status}`);
    }, 1000);
};

const gettodoslocal = ()=>{
    return localStorage.getItem('mytodos') ? 
    JSON.parse(localStorage.getItem('mytodos')) : [];
};

//add todo
const addtodo = (event) => {
  event.preventDefault();
  const todov = input.value;

  //unique id
  const todovId = Date.now().toString();
  createTodo(todovId, todov);
  showMessege("Todo is added", "success");

  //Add Todo in local Storage
    const todos = gettodoslocal();

    todos.push({todovId, todov});
    localStorage.setItem('mytodos', JSON.stringify(todos));

    input.value = "";
};

//delete todo

const deleteTodo = (event) =>{
    const selectedTodo = event.target.parentElement.parentElement.parentElement;
    
    lists.removeChild(selectedTodo);

    showMessege("Todo is Deleted", 'delete');

    //remove from local storage
    const todoId = selectedTodo.id;
    let todos  = gettodoslocal();
    todos = todos.filter((todos) => todos.todovId != todoId)

    localStorage.setItem('mytodos', JSON.stringify(todos));

};

//load Todos
const loadTodos = () =>{
    const todos = gettodoslocal();
    todos.map((todos) => createTodo(todos.todovId, todos.todov));
};



//Adding Listener
form.addEventListener("submit", addtodo);
window.addEventListener("DOMContentLoaded", loadTodos);
