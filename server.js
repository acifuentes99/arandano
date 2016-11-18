var express     = require('express'),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    cookieParser= require('cookie-parser'),
    mysql       = require('mysql2'),
    passport    = require('passport'),
	session		= require('express-session'),
    routes      = require('./routes/routes.js');
   // angular = require('angular'),
   // angularDragula = require('angular-dragula');

//var app = angular.module('my-app', [angularDragula(angular)]);

var app = express();

var connection = mysql.createConnection({ 
    user: 'aliwen', 
    database: 'arandano',
    password: 'arandano'
    
});
var db = mysql;

/*
connection.query('SELECT * FROM customers', function(err, rows) {
    console.log(rows);
});
*/

//app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

//app.use('/views', express.static(process.cwd() + '../server/views'));
app.use('/node_modules', express.static(process.cwd() + '/node_modules'));
app.use(express.static(path.join(__dirname, './public')));
//app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(session({ secret: 'arandanorules' ,cookie: { maxAge: 6000 }, resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


require('./public/js/passport.js')(passport, connection); // pass passport for configuration
routes(app, connection, passport);

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening in port : '+port+'...');
});
