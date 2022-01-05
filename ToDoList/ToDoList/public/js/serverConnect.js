'use strict';

import * as itemsActions from './pageItemsActions.js';
import { CreateTodos } from './todosActions.js';

const url = new URL('http://localhost/api/values');

export function GetTodos(todo) {
    const getByDateUrl = `${url}/date`;
    const response = $.getJSON(getByDateUrl, todo);

    response.done((todos) => {
        CreateTodos(todos);
    });
    response.fail((jqxhr, textStatus, errorThrown) => alert("Error: " + errorThrown));
}

export function CreateTodo(todo, item) {
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data: todo,
        async: true,
        success: (todo) => {
            CheckTodoDate(todo, item);
            itemsActions.ShowAlertSuccess();
        },
        error: () => {
            item.remove();
            itemsActions.ShowAlertError();
        }
    });
}

function CheckTodoDate(todo, item) {
    const todoDate = new Date(todo.todoDate);
    const today = new Date();

    if (todoDate.toLocaleDateString('en-US') === today.toLocaleDateString('en-US')) {
        itemsActions.CreateTodoLi(todo, item);
    } else {
        item.remove();
    }
}

export function UpdateTodo(todo, item) {
    $.ajax({
        url: url,
        type: 'put',
        contentType: 'application/json',
        data: JSON.stringify(todo),
        async: true,
        success: () => {
            itemsActions.AddDoneClass(item);
        },
        error: (jqxhr, textStatus, errorThrown) => {
            alert('Error: ' + errorThrown);
        }
    });
}

export function RemoveTodos() {
    $.ajax({
        url: url,
        type: 'delete',
        async: true,
        error: (jqxhr, textStatus, errorThrown) => {
            alert('Error: ' + errorThrown);
        }
    });
}