'use strict'; 

var app = require('express')();
var path = require('path');
var Athlete = require('../api/athletes/athlete.model');
var request = require('request');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var _ = require('lodash');
var mongoose = require('mongoose');
var passport = require('passport'); 
var session = require('express-session');
var server = require('http').Server(app);
var MongoStore = require('connect-mongo')(session);

app.use(cookieParser());

app.use(require('./logging.middleware'));

app.use(require('./requestState.middleware'));

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(require('./statics.middleware'));

app.use('/api', require('../api/api.router'));


var validFrontendRoutes = ['/', '/athletes', '/athletes/:id',];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');

validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
});

app.use(require('./error.middleware'));

module.exports = {
  app : app,
  server : server
}



