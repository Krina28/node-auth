const express = require('express');
const router = express.Router();
//const path = require('path');
//const userController = require(path.join(__dirname,'./controllers'));
const userController = require('../controllers/userController');

router.get('/list', userController.getAllUsers);

module.exports = router;
