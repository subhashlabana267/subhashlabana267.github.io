const ApiError = require("./ApiErros");
const ResponseModel = require("../helpers/response_model");


const errorConverter = (err, _req, _res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    var statusCode = 500;
    var _message = _messages[0];
    if (
      (error.statusCode && error.statusCode != 404) ||
      error instanceof sequelize.Error
    )
      statusCode = 400;
    else if (error.statusCode && error.statusCode == 404) {
      statusCode = error.statusCode;
      _message = _messages[1];
    }
    error = new ApiError(statusCode, _message, false, err.stack);
  }
  next(error);
};

const errorHandler = (err, _req, res, _next) => {
  let { statusCode, message } = err;
  if (res && res.locals && res.locals.errorMessage && err)
    res.locals.errorMessage = err.messsage;
  const errorResponse = new ResponseModel(false, statusCode, [], message);
  res.status(statusCode).send(errorResponse);
};

const logErrors = (err, _req, _res, next) => {
  console.error(err);
  next(err);
};

module.exports = {
  errorConverter,
  errorHandler,
  logErrors,
};
