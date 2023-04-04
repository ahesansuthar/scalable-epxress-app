var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', (req, res, next) => UserController.index(req, res, next));
router.get('/error', (req, res, next) => UserController.error_response(req, res, next));

module.exports = router;
