var express = require('express');
var router = express.Router();
var userRoutes = require('./user');
var productRoutes = require('./products');

router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;
