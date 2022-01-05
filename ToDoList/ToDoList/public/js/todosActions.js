'use strict';

import * as connection from './serverConnect.js';
import { CreateLi, CreateLoadedTodoLi, CreateTodoLi } from './pageItemsActions.js';

function CreateTodos(listTodos) {
    listTodos.forEach((todo) => {
        let li = CreateLi();

        CreateTodoLi(todo, li);
    });
}

function AddTodo() {
    if ($('#todoText').val() && $('#todoDate').val()) {

        let li = CreateLoadedTodoLi();

        const [datepickerDate] = $('#todoDate');
        const todo = JSON.stringify({
            TodoDescription: $('#todoText').val(),
            TodoStatus: "In progress",
            TodoDate: datepickerDate.value
        });

        connection.CreateTodo(todo, li);

        $('#todoText').val('');
    }
}

function UpdateTodoStatus() {
    let todo = {
        TodoId: this.id,
        TodoDescription: this.textContent,
        TodoStatus: ''
    };

    if (this.classList.contains('in-progress')) {
        todo.TodoStatus = 'Done';
        connection.UpdateTodo(todo, this);
    } else if (this.classList.contains('done')) {
        todo.TodoStatus = 'In progress';
        connection.UpdateTodo(todo, this);
    }
}

function RemoveTodos() {
    $("#todos").html('');

    connection.RemoveTodos();
}

export { CreateTodos, AddTodo, UpdateTodoStatus, RemoveTodos };