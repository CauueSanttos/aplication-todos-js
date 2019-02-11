var lisElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    lisElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'removeTodo('+ pos +')');

        linkElement.setAttribute('href', '#');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        lisElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage()
}

buttonElement.onclick = addTodo;

function removeTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}