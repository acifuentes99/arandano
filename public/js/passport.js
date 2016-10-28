var LocalStrategy   = require('passport-local').Strategy;
const util = require('util');

module.exports = function(passport, connection) {

	console.log("passport imported");
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(username, done) {
		//Estudiante
		if(username.stu_id){
			connection.query("SELECT * FROM `estudiante` WHERE nickname='"+username.nickname+"'", function(err,rows){
				console.log("resultado deserialize: "+rows[0]);
				console.log("el username: "+util.inspect(username, false, null));
				done(null, rows[0]);
			});
		}
		//Experto
		else if(username.exp_id){
			connection.query("SELECT * FROM `experto` WHERE nombre_exp='"+username.nombre_exp+"'", function(err,rows){
				console.log("resultado deserialize: "+rows[0]);
				console.log("el username: "+util.inspect(username, false, null));
				done(null, rows[0]);
			});
		}
		//Profesor
		else{
			connection.query("SELECT * FROM `profesor` WHERE nickname='"+username.nickname+"'", function(err,rows){
				console.log("resultado deserialize: "+rows[0]);
				console.log("el username: "+util.inspect(username, false, null));
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

			console.log("hola, pase la functino, user estudiante: "+username);
				connection.query("SELECT * FROM `estudiante` WHERE nickname='"+username+"'", function(err,rows){
					console.log("hicimos la query!");

				if (err)
					return done(err);
				if (!rows.length) {
					return done(null, false); // req.flash is the way to set flashdata using connect-flash
				}
				// if the user is found but the password is wrong
				if (!( rows[0].password == password)){
					console.log("Wrong Password");
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
			console.log("hola, pase la functino, user experto: "+username);
				connection.query("SELECT * FROM `experto` WHERE nombre_exp='"+username+"'", function(err,rows){
					console.log("hicimos la query!");
					console.log("pass del experto: "+rows[0].exp_pass)
					console.log("el username que llega: "+rows[0].exp_pass);

				if (err)
					return done(err);
				if (!rows.length) {
					return done(null, false); // req.flash is the way to set flashdata using connect-flash
				}
				// if the user is found but the password is wrong
				if (!( rows[0].exp_pass == password)){
					console.log("Wrong Password");
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

			console.log("hola, pase la functino");
				connection.query("SELECT * FROM `profesor` WHERE nickname='"+username+"'", function(err,rows){
					console.log("hicimos la query!");

				if (err)
					return done(err);
				if (!rows.length) {
					return done(null, false); // req.flash is the way to set flashdata using connect-flash
				}
				// if the user is found but the password is wrong
				if (!( rows[0].password == password)){
					console.log("Wrong Password");
					return done(null, false); 
				}
				// all is well, return successful user
				console.log('loged');
				return done(null, rows[0]);
			});

		}));
	
};
