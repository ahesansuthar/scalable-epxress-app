var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { MikroORM, RequestContext } = require("@mikro-orm/core");
const {initializeORM,DI} = require("./utils/bootstrap-micro-orm");
const { User } = require("./domain/models/User");

var indexRouter = require('./app/routes/index');
var usersRouter = require('./app/routes/users');

var app = express();
 init_database(app);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function init_database(app){
    DI.orm = await initializeORM(MikroORM);
    DI.em = DI.orm.em.fork();
    DI.userRepository = DI.orm.em.fork().getRepository(User);
    DI.server = app;
    
    app.use((req, res, next) => {
      RequestContext.create(DI.orm.em, next);
      req.di = DI;
    });
    console.log("Micro ORM initialized.")
}
module.exports = app;
