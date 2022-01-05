'use strict';

import * as todosActions from './todosActions.js';

function AddDoneClass(elem) {
    if (elem.classList.contains('done')) {
        elem.classList.remove('done');
        elem.classList.add('in-progress');
    } else {
        elem.classList.remove('in-progress');
        elem.classList.add('done');
    }
}

function CreateTodoLi({ todoId, todoDescription, todoStatus }, li) {
    li.id = todoId;
    li.textContent = todoDescription;

    if (todoStatus == "In progress") {
        li.classList.add('in-progress');
    } else if (todoStatus == "Done") {
        li.classList.add('done');
    }

    li.onclick = todosActions.UpdateTodoStatus;
}

function CreateLoadedTodoLi() {
    let li = CreateLi();
    let div = document.createElement('div');

    li.id = 'loadedTodoLi';
    div.classList.add('dot-loader');
    li.appendChild(div);

    return li;
}

function CreateLi() {
    let li = document.createElement('li');

    $('#todos').prepend(li);

    return li;
}

function ShowAlertSuccess() {
    $('#alertSuccess').show();
    setTimeout(() => { $('#alertSuccess').hide() }, 2000);
}

function ShowAlertError() {
    $('#alertError').show();
    setTimeout(() => { $('#alertError').hide() }, 2000);
}

export { AddDoneClass, CreateTodoLi, CreateLoadedTodoLi, CreateLi, ShowAlertError, ShowAlertSuccess };