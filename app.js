const express = require("express");
const ApiError = require("./utils/APIErros");
const app = express();
const sequelize = require("sequelize");
const { errorConverter, errorHandler, logErrors } = require("./utils/error");
const routes = require('./routes/route-connection');

global.dotenv = require("dotenv").config({
  path: `./env-files/${process.env.NODE_ENV.trim() || "development"}.env`,
});
global.sequelize = sequelize;
global._messages = require('./helpers/messages');

// Routes of Root
app.use('/', routes);

// Handling error.
app.use((_req, _res, next) => {
  next(new ApiError(404, "Not Found"));
});
app.use(logErrors);
app.use(errorConverter);
app.use(errorHandler);

app.listen(process.env.port, process.env.hostname, function () {
  console.log(`Server running at http://${process.env.hostname}:${process.env.port}/`);
});
