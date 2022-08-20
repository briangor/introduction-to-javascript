'use strict';

let todo_input;
let todos = [];
let todo;
let deleteButton;
let li_id;

let addTodo = () => {
    let todo_input_el = document.getElementById('todo_input');
    let ul = document.getElementById('ul');
    let li = document.createElement('li');

    // create edit and delete buttons
    let editButton = document.createElement('button');
    editButton.innerText = "edit";
    editButton.classList.add('text-blue-400', 'hover:text-blue-500', 'ml-2');
    deleteButton = document.createElement('button');
    deleteButton.innerText = "delete";
    deleteButton.classList.add('text-red-400', 'hover:text-red-500', 'ml-2');

    deleteButton.addEventListener('click', function () {
        removeTodo();
    })

    todo_input = todo_input_el.value;

    if (todo_input == '') {
        console.log('Empty task');
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

    // create a span tag to display the todo in the DOM
    let span = document.createElement('span');
    span.classList.add('h-12','w-96')
    span.innerText = todo_input;

    li.appendChild(span);

    // apppend edit and delete buttons
    li.append(editButton, deleteButton);

    // style li 
    li.classList.add('cursor-pointer');


    ul.appendChild(li);

    console.log(ul);
    console.log(li);
    todo_input_el.value = '';


    let items = document.querySelectorAll("#ul li");
    let tab = [];
    let liIndex;
    console.log(items);

    // populate tab with li data
    for (let i = 0; i < items.length; i++) {
        tab.push(items[i].innerHTML);
    }
    //console.log(tab);
    // get li index using tab array on li click event
    for (let i = 0; i < items.length; i++) {

        items[i].onclick = function () {
            liIndex = tab.indexOf(this.innerHTML);
            console.log(this.innerHTML + " INDEX = " + liIndex);
            getLi_id(liIndex);
        };
    }
}

// get the index of the selected list element
let getLi_id = (id) => {
    console.log(id);
    li_id = id;
    
}

// delete todo element
let removeTodo = (i) => {
console.log(li_id);
    console.log(ul);
}
