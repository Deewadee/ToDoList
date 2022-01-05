'use strict';

import { GetTodos } from './serverConnect.js';

export function PageLoad() {
    $('.dot-loader').show();

    DatepickerInitialize();
    const [today] = $("#todoDate");
    const todo = {
        TodoDate: today.value
    };
    GetTodos(todo);

    $('.dot-loader').hide();
    $('#todosSection').show();
}

function DatepickerInitialize() {
    $.datepicker.setDefaults($.datepicker.regional["ru"]);

    $('#todoDate').datepicker({
        hideIfNoPrevNext: false,
        showButtonPanel: true,
        showOtherMonths: true,
        dateFormat: 'yy-mm-dd'
    });

    $('#todoDate').datepicker('setDate', new Date());
}
