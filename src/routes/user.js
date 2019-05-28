const express = require('express');
const router = express.Router();
//const path = require('path');
//const userController = require(path.join(__dirname,'./controllers'));
const UserController = require('../controllers/userController');
const Authentication = require('../middleware/validate');

router.get('/list', Authentication, UserController.getAllUsers);

module.exports = router;
