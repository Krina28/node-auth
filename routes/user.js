const router = express.router();
const path = require('path');
//const userController = require(path.join(__dirname,'./controllers'));
const userController = require('./controllers/userController');

// router.post('/users/create', userController.create)
// router.put('/users/:userId', userController.update)
router.get('/users', userController.getAllUsers);
