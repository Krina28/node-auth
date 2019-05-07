const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
var morgan = require('morgan')
const index = require('./src/routes/index');

const app = express();

//app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

app.use('/', index);

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'jade');

// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

app.listen(process.env.PORT || 4000)

module.exports = app;