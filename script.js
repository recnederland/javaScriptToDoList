
let title = document.getElementById("title");
title.style.color="red";


let addTodoButton = document.getElementById("addToDo");
addTodoButton.style.color.hover = "red";

let todoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let deleteText = document.getElementById('clearToDo');
let clearToDo = document.getElementById('clearToDo');

addTodoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    
    paragraph.classList.add('paragraph-styling');
    todoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";
    // tiklayinca uzerini ciz
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        todoContainer.removeChild(paragraph);
    });
    clearToDo.addEventListener('click', function(){
        // paragraph.style.display = 'none';
        paragraph.remove();
    })


})


