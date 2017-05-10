var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session=require('express-session');
var routes = require('./routes/index');
var users = require('./routes/users');
var cooker = require('./routes/cooker');
var cooker_detail= require('./routes/cooker_detail');
var search = require('./routes/search');
var arrange = require('./routes/arrange');
var arrange_two= require('./routes/arrangetwo');
var comment= require('./routes/comment');
var cooker_menu= require('./routes/cooker_menu');
var arrange_total= require('./routes/arrange_total');
var place_order= require('./routes/place_order');
var order_details= require('./routes/order_details');
var delete_dishes= require('./routes/delete_dishes');
var header= require('./routes/header');
var order= require('./routes/order');
var add_address= require('./routes/add_address');
var update_user_menu= require('./routes/update_user_menu');
var delete_menu= require('./routes/delete_menu');
var collect= require('./routes/collect');
var myAccount= require('./routes/myAccount');
var changePosition= require('./routes/change_position');
var order_private_menu=require('./routes/order_private_menu');
var arrange_position=require('./routes/arrange_position');
var change_header= require('./routes/change_header');
var change_password= require('./routes/change_password');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',require('ejs').__express);
app.set('view engine','html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
//app.use(session({secret:'private_cooker',key:'private_cooker',cookie:{maxAge:400000}}));
app.use('/', header);
app.use('/', routes);
app.use('/', users);
app.use('/', cooker);
app.use('/', cooker_detail);
app.use('/', search);
app.use('/', cooker_menu);
app.use('/', arrange);
app.use('/', arrange_two);
app.use('/', arrange_total);
app.use('/', comment);
app.use('/', cooker_menu);
app.use('/', place_order);
app.use('/', order_details);
app.use('/', delete_dishes);
app.use('/', add_address);
app.use('/', update_user_menu);
app.use('/', order);
app.use('/', delete_menu);
app.use('/', collect);
app.use('/', myAccount);
app.use('/', changePosition);
app.use('/', order_private_menu);
app.use('/', arrange_position);
app.use('/', change_header);
app.use('/', change_password);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
