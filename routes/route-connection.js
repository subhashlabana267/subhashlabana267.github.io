const express = require('express');
const app = express();

const usersRouter = require('./users');

app.use('/', usersRouter);

module.exports = app;