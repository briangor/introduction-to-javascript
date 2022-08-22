'use strict';

let todo_input;
let todos = [];
let todo;
let completeButton;
let editButton;
let deleteButton;
let li_id;
let toggleComplete = false;
let todo_input_el = document.getElementById('todo_input');

let addTodo = () => {
    let ul = document.getElementById('ul');
    let li = document.createElement('li');

    // create edit and delete buttons
    editButton = document.createElement('button');
    editButton.innerText = "edit";
    editButton.classList.add('text-blue-400', 'hover:text-blue-600', 'ml-2', 'col-span-2');
    deleteButton = document.createElement('button');
    deleteButton.innerText = "delete";
    deleteButton.classList.add('text-red-400', 'hover:text-red-600', 'ml-2', 'col-span-2');

    editButton.addEventListener('click', function () {
        let items = document.querySelectorAll("#ul li");
        let tab = [];
        let liIndex;

        // populate tab with li data
        for (let i = 0; i < items.length; i++) {
            tab.push(items[i].innerHTML);
        }

        // get li index using tab array on li click event
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function () {
                liIndex = tab.indexOf(this.innerHTML);
                updateTodo(liIndex);
            };
        }

    })

    deleteButton.addEventListener('click', function () {
        let items = document.querySelectorAll("#ul li");
        let tab = [];
        let liIndex;

        // populate tab with li data
        for (let i = 0; i < items.length; i++) {
            tab.push(items[i].innerHTML);
        }

        // get li index using tab array on li click event
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function () {
                liIndex = tab.indexOf(this.innerHTML);
                removeTodo(liIndex);
            };
        }
    })

    todo_input = todo_input_el.value;

    if (todo_input == '') {
        alert('Empty task! Please add a todo');
        return;
    }

    // set an id for the added todo using date
    let id = Date.now();

    // create an object for the todo 
    todo = {
        'id': id,
        'value': todo_input
    }

    // add the todo object to a todos array
    todos.push(todo);

    //localStorage.setItem('person', JSON.stringify(person));
    localStorage.setItem(todo.id, JSON.stringify(todo));

    fetchTodos(todo.id);

    let checkbox_span = document.createElement('span');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox_span.appendChild(checkbox);
    checkbox_span.classList.add('col-span-1');
    checkbox.addEventListener('click', function () {
        let items = document.querySelectorAll("#ul li");
        let tab = [];
        let liIndex;
        //console.log(items);

        // populate tab with li data
        for (let i = 0; i < items.length; i++) {
            tab.push(items[i].innerHTML);
        }

        // get li index using tab array on li click event
        for (let i = 0; i < items.length; i++) {

            items[i].onclick = function () {
                liIndex = tab.indexOf(this.innerHTML);
                completeTodo(liIndex);
            };
        }
    })

    // create a span tag to display the todo in the DOM
    let span = document.createElement('span');
    span.classList.add('col-span-7')
    span.innerText = todo_input;

    // apppend checkbox, span, edit and delete buttons 
    li.append(checkbox_span, span, editButton, deleteButton);

    // style li 
    li.classList.add('cursor-pointer', 'border', 'border-blue-300', 'hover:border-blue-400', 'mt-2', 'rounded-md', 'bg-gray-100', 'grid', 'grid-cols-12', 'px-2');

    ul.appendChild(li);
    ul.classList.add('px-2');
    todo_input_el.value = '';
}

// delete todo element
let removeTodo = (i) => {
    todos.splice(i, 1);
    ul.childNodes[i+1].className = 'hidden';
}

let updateTodo = (i) => {
    todo_input_el.value = todos[i].value;
    removeTodo(i);
}

let completeTodo = (i) => {
    toggleComplete = !toggleComplete;
    if (toggleComplete) {
        ul.childNodes[i+1].classList.add('bg-blue-400');
    } else if (!toggleComplete) {
        ul.childNodes[i+1].classList.remove('bg-blue-400');
    }

}

let fetchTodos = (id) => {
    let list = JSON.parse(localStorage.getItem(id));
    return list
}

let clearAllTodos = () => {
    window.localStorage.clear();
}