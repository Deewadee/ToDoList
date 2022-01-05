'use strict';
const express = require("express");
const path = require("path");
const port = process.env.PORT || 1337;
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/ToDoList.html'));
});

app.listen(port);
