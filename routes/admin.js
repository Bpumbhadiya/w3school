var express = require('express');
var router = express.Router();
const userController = require('../controllers/admin')

router.post("/singup", userController.signup);

router.post("/login", userController.login);

router.get("/all", userController.SECURE, userController.all);

module.exports = router;