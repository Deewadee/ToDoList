'use strict';

import { PageLoad } from './pageLoading.js';
import { AddTodo } from './todosActions.js';
import { RemoveTodos } from './serverConnect.js';

PageLoad();

$('#todoDate').bind("keyup", (keyPressed) => {
    if (keyPressed.key == "Escape") {
        $('#todoDate').val('');
        $('#todoDate').blur();
    }
});

$("#todoText").bind("keyup", (keyPressed) => {
    if (keyPressed.key == "Escape") {
        $("#todoText").val('');
        $("#todoText").blur();
    }
});

$("#todoText").keypress((keyPressed) => {
    if (keyPressed.key == "Enter") {
        AddTodo();
    }
});

$('#addTodo').click(() => {
    AddTodo();
});

$('#removeTodos').click(() => {
    RemoveTodos();
});