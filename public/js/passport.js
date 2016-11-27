var LocalStrategy   = require('passport-local').Strategy;
const util = require('util');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

module.exports = function(passport, connection) {

	console.log("passport imported");
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(username, done) {
		//Estudiante
		if(username.stu_id){
			connection.query("SELECT * FROM `estudiante` WHERE nickname='"+username.nickname+"'", function(err,rows){
				done(null, rows[0]);
			});
		}
		//Experto
		else if(username.exp_id){
			connection.query("SELECT * FROM `experto` WHERE nombre_exp='"+username.nombre_exp+"'", function(err,rows){
				done(null, rows[0]);
			});
		}
		//Profesor
		else{
			connection.query("SELECT * FROM `profesor` WHERE nickname='"+username.nickname+"'", function(err,rows){
				done(null, rows[0]);
			});
		}

    });

	passport.use('est-login', new LocalStrategy({
			usernameField : 'user',
			passwordField : 'pass',
			passReqToCallback : true 
		},
		function(req, username, password, done) { 

				connection.query("SELECT * FROM `estudiante` WHERE nickname='"+username+"'", function(err,rows){

				if (err)
					return done(err);
				if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'Usuario no encontrado')); // create the loginMessage and save it to session as flashdata
					return done(null, false); // req.flash is the way to set flashdata using connect-flash
				}
				// if the user is found but the password is wrong
				//if (!( rows[0].password == password)){
				if (!(bcrypt.compareSync(password, rows[0].password))){
                return done(null, false, req.flash('loginMessage', 'Oh!, contraseña incorrecta!')); // create the loginMessage and save it to session as flashdata
					return done(null, false); 
				}
				// all is well, return successful user
				console.log('loged');
				return done(null, rows[0]);
			});

		}));


	passport.use('exp-login', new LocalStrategy({
			usernameField : 'user',
			passwordField : 'pass',
			passReqToCallback : true 
		},
		function(req, username, password, done) { 
			//			console.log("lo que llega al experto: "+util.inspect(user, false, null) );
			/*TIP QUE ME PASO
			 * cuidado con el nombre de los campos de SQL, y los que usas aca, ya que en rows[0], es precisamente ese
			 * el que toma la variable (el de la base de datos, me paso con "password" y "exp_password".
				* */
				connection.query("SELECT * FROM `experto` WHERE nombre_exp='"+username+"'", function(err,rows){

				if (err)
					return done(err);
				if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'Usuario no encontrado')); // create the loginMessage and save it to session as flashdata
				}
				// if the user is found but the password is wrong
					//if (!( rows[0].exp_pass == password)){
				if (!(bcrypt.compareSync(password, rows[0].exp_pass))){
					return done(null, false, req.flash('loginMessage', 'Oh!, contraseña incorrecta!')); // create the loginMessage and save it to session as flashdata
					return done(null, false); 
				}
				// all is well, return successful user
				console.log('loged');
				return done(null, rows[0]);
			});

		}));


	passport.use('pro-login', new LocalStrategy({
			usernameField : 'user',
			passwordField : 'pass',
			passReqToCallback : true 
		},
		function(req, username, password, done) { 

				connection.query("SELECT * FROM `profesor` WHERE nickname='"+username+"'", function(err,rows){

				if (err)
					return done(err);
				if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'Usuario no encontrado')); // create the loginMessage and save it to session as flashdata
				}
				// if the user is found but the password is wrong
					//if (!( rows[0].password == password)){
				if (!(bcrypt.compareSync(password, rows[0].password))){
					return done(null, false, req.flash('loginMessage', 'Oh!, contraseña incorrecta!')); // create the loginMessage and save it to session as flashdata
					return done(null, false); 
				}
				// all is well, return successful user
					console.log('loged');
				return done(null, rows[0]);
			});

		}));
	
};
