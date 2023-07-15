const todoForm = document.querySelector(".toDo-Form")
const todoInput = document.querySelector(".toDo-Form input")
const todoList = document.querySelector(".toDo-List")

let todos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(event){
    const li = event.target.parentElement
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveToDos();
}

function CheckedTodo(event){
    const todoDone = event.target.nextSibling;
    if(event.target.checked){
        todoDone.style.textDecoration = "line-through";
        todoDone.style.color = "rgb(179, 179, 179)";
    } else {
        todoDone.style.textDecoration = "none";
        todoDone.style.color = "black";
    }
}

function paintToDo(newToDo){
    const li = document.createElement("li")
    li.id = newToDo.id;
    const span = document.createElement("span")
    span.innerText = newToDo.text;
    const button = document.createElement("button")
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    const checkBox = document.createElement("input")
    checkBox.type = 'checkbox';
    checkBox.addEventListener("change", CheckedTodo);
    saveToDos();
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function SubmitToDo(event){
    event.preventDefault();
    const newToDo = todoInput.value
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    }
    todoInput.value = "";
    todos.push(newToDoObj);
    paintToDo(newToDoObj);
}

todoForm.addEventListener("submit", SubmitToDo);

const GetToDo = localStorage.getItem(TODOS_KEY)

if(GetToDo !== null){
    const parsedToDos = JSON.parse(GetToDo);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}