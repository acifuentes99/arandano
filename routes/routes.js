var path = process.cwd();
//var bcrypt = require('bcrypt');
//var salt = bcrypt.genSaltSync(10);
const util = require('util');

module.exports = function (app, connection, passport) {

    app.route('/')
    .get(function(req, res) {
        res.render('index.html');
    });

	/* Ingreso de Estudiantes a la plataforma*/
    app.route('/api')
    .get(function(req, res) {
        connection.query('SELECT * FROM estudiante ', function(err, rows){
            res.json(rows);
        });
    })
    .post(function(req, res){
        var f = req.body;
        connection.query("INSERT INTO `estudiante` (`nickname`, `nombre`, `email`, `password`, `tipo`) VALUES ('"+f.nickname+"', '"+f.nombre+"', '"+f.email+"', '"+f.password+"', '"+f.tipon+"')", function(err, rows){
            res.json(rows); 
        });
    });


	/*	AUTHENTIFICACION DE LOS 3 TIPOS DE USUARIOS
	 *		Usamos "/public/js/passport.js", para realizar los procedimientos
	 *		de obtener de la base de datos, los datos de los usuarios, y asi,
	 *		tambien tener el tipo del cual son.
	 *		Los privilegios, y accesos a páginas, es un tema que hay que
	 *		trabajarlo en angular routes.
	 */

	app.route('/api/login/est')
		.get(isLoggedIn, function(req, res){
			console.log("fetching student data");
			res.json(req.user);
		})
		.post(function(req, res, next) {
		  passport.authenticate('est-login', function(err, user, info) {
			if (err) { return next(err); }
			if (!user) { return res.redirect('/login'); }
			req.logIn(user, function(err) {
			  if (err) { return next(err); }
				//			  return res.redirect('/users/' + user.username);
				return res.json({login: 1});
			});
		  })(req, res, next);
		});

	app.route('/api/login/exp')
		.get(isLoggedIn, function(req, res){
			console.log("fetching experto data");
			res.json(req.user);
		})
		.post(function(req, res, next) {
		  passport.authenticate('exp-login', function(err, user, info) {
			  //console.log(util.inspect(user, false, null));
			if (err) { return next(err); }
			if (!user) { return res.redirect('/login'); }
			req.logIn(user, function(err) {
			  if (err) { return next(err); }
				//			  return res.redirect('/users/' + user.username);
				return res.json({login: 1});
			});
		  })(req, res, next);
		});

	app.route('/api/login/pro')
		.get(isLoggedIn, function(req, res){
			console.log("fetching professor data");
			res.json(req.user);
		})
		.post(function(req, res, next) {
		  passport.authenticate('pro-login', function(err, user, info) {
			if (err) { return next(err); }
			if (!user) { return res.redirect('/login'); }
			req.logIn(user, function(err) {
			  if (err) { return next(err); }
				//			  return res.redirect('/users/' + user.username);
				return res.json({login: 1});
			});
		  })(req, res, next);
		});

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect("/");
	});

	/* FIN AUTENTIFICACION DE LOS 3 TIPOS DE USUARIOS */

	app.route('/api/experto')
    .get(function(req, res) {
		var f = req.params.id;
		//var f = req.params.body;
        connection.query("SELECT * FROM experto WHERE nombre_exp='"+f+"'", function(err, rows){
			if(err){ }
			//if(bcrypt.hashSync(passwordEnteredByUser, salt) === rows[0].exp_pass){
				//return "success";
				res.json(rows);
			//}
			//console.log(rows[0].exp_pass);
			//res.send(rows);
        });
    })
    .post(function(req, res){
        var f = req.body;
		//var encPass = bcrypt.hashSync(f.password, salt);
		connection.query("INSERT INTO experto (`exp_pass`, `nombre_exp`) VALUES ('"+f.password+"', '"+f.nickname+"')", function(err, rows){
            res.json(rows); 
        });
    });




	app.route('/cursos/:id')
	.get(function(req, res) {
		var curso = req.params.id;
        connection.query("SELECT * FROM curso WHERE 'exp_id_f' = "+experto+" ", function(err, rows){
            res.json(rows);
        });
    });

/* Insertar Cursos, y obtneer lista de cursos de un profesor/experto */
	app.route('/api/curso/:id')
	.get(function(req, res) {
		var experto = req.params.id;
                console.log(experto);
        connection.query("SELECT * FROM curso WHERE `exp_id_f` = '"+experto+"'", function(err, rows){
            console.log(rows);
            res.json(rows);
            
        });
    });
	app.route('/api/curso')
    .post(function(req, res){
        var f = req.body;
        console.log("agregando curso");
        connection.query("INSERT INTO curso (`nombre`, `imagen`, `descripcion`, `exp_id_f`) VALUES ( '"+f.nombrecurso+"','"+f.imgurl+"', '"+f.desccurso+"', '"+f.admin+"')", function(err, rows){
            res.json(rows);

        });
    });    


	app.route('/api/contenido')
    .get(function(req, res) {
        connection.query('SELECT * FROM estudiante ', function(err, rows){
            res.json(rows);
        });
    })
    .post(function(req, res){
        var f = req.body;
        connection.query("INSERT INTO `estudiante` (`nickname`, `nombre`, `email`, `password`, `tipo`) VALUES ('"+f.nickname+"', '"+f.nombre+"', '"+f.email+"', '"+f.pass+"', '"+f.tipon+"')", function(err, rows){
            res.json(rows); 
        });
    });

};


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
	console.log("Getting auth dat failed");
	res.json({status: -1});
	//    res.redirect('/');
}


/*Codigo Por si acaso
 *
 *
		.post(function(req, res) {
			var f = req.body;	
			console.log("el body: "+f);
			console.log(util.inspect(f, false, null))
			connection.query("SELECT * FROM estudiante WHERE nickname ='"+f.user+"'", function(err, rows){
				console.log("Query : "+rows);
				if(err){ 
					throw err;
				}
				if(rows[0]){
				if(f.pass === rows[0].password){
						console.log("login successful");
						res.json({login: 1});
					}
					else{
						console.log("login failed, wrong password");
						res.json({login: 0});
					}
				}
				else{
					console.log("not in database");
					res.json({login: 0});
				}
			});
		})
		
		*/
