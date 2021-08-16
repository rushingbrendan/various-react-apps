var express = require('Express');
var app = express();

var routes = require('./routes.js');

app.use('/', routes);

app.listen(3000);