var express = require('express');
var path = require('path');
var app = express();
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug'); //pug = jade

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('listening on 3000')
}); 
