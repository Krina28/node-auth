const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
var morgan = require('morgan')
const index = require('./src/routes/index');
var fs = require('fs');
var mailer = require('nodemailer');
var dotenv = require('dotenv');

const app = express();

app.use(morgan('dev'));

// create a write Usersstream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

//json parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "2.7mb", extended: false }));
// app.use(fileUpload({
//     limits: {
//         fileSize: 10 * 1024 * 1024
//     }
// }));

//Load env file
dotenv.config();

app.all('/*', function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,Client-Key');
    if (req.method == 'OPTIONS') {
        res
            .status(200)
            .end();
    } else {
        next();
    }
});

app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//view engine Setting
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'jade');

app.set('port', process.env.PORT);

app.listen(app.get('port'), function () {
    console.log("Application is running on " + app.get('port') + " port....");
})

module.exports = app;
