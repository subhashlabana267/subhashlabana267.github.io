const express = require('express');
const ResponseModel = require('../helpers/response_model');
const router = express.Router();

router.get('/users', function (_req, res, _next) {
   res.send(new ResponseModel(true, 200, [], _messages[2]));
});

module.exports = router;