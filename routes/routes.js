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
	/*Ruta api/curso: permite obtener info de cursos, e ingresar cursos*/
	app.route('/api/curso/:id')
	.get(isLoggedIn, function(req, res) {
		var experto = req.params.id;
                console.log(experto);
        connection.query("SELECT * FROM curso WHERE `exp_id_f` = '"+experto+"'", function(err, rows){
            console.log(rows);
            res.json(rows);
            
        });
    });
	app.route('/api/curso')
    .post(isLoggedIn, function(req, res){
        var f = req.body;
        console.log("agregando curso");
        connection.query("INSERT INTO curso (`nombre`, `imagen`, `descripcion`, `exp_id_f`) VALUES ( '"+f.nombrecurso+"','"+f.imgurl+"', '"+f.desccurso+"', '"+f.admin+"')", function(err, rows){
            res.json(rows);
        });
    });    

	/*API de los modulos
	 * Get: el "id" es el id del curso, del cual se quiere recolectar los modulos
	 * Post: el "id", es el del curso al cual se le coloca el curso.
	*/
	app.route('/api/modulo/:id')
		.get(isLoggedIn, function(req, res){
			var id = req.params.id;
			connection.query("SELECT * FROM modulo WHERE `curso_id_f` = '"+id+"'", function(err, rows){
				res.json(rows);
				
			});
		})
		.post(isLoggedIn, function(req, res){
			var f = req.body;
			var id = req.params.id;
			console.log("agregando modulo");
			connection.query("INSERT INTO modulo (`nombre_mod`, `img_mod`, `curso_id_f`) VALUES ( '"+f.nombremod+"','"+f.imgurl+"', '"+id+"')", function(err, rows){
				res.json(rows);
			});
		});

	/*
var sql = "INSERT INTO Test (name, email, n) VALUES ?";
var values = [
    ['demian', 'demian@gmail.com', 1],
    ['john', 'john@gmail.com', 2],
    ['mark', 'mark@gmail.com', 3],
    ['pete', 'pete@gmail.com', 4]
];
conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
bloque_id 	img_url 	content 	mod_id_f 	stu_id_f 
*/


	app.route('/api/bloques/:modid')
		.get(function(req, res){
		
		})
		.post(function(req, res){
			console.log("Estamos intentando postear en bloque");
			var modid = req.params.modid;
			var cont = req.body;
			console.log(modid);
			var values = [
				[cont.ad, 0, modid],
				[cont.di, 1, modid],
				[cont.co, 2, modid],
				[cont.as, 3, modid]
			];
			console.log(req.body);
			connection.query("INSERT INTO bloque (`content`,`tipo`,`mod_id_f`) VALUES ?", [values], function(err){
				if(err) console.log("algo no resulto");
				console.log("Posting Bloques in Database");
			});
			
		});
	app.route('/api/getbloque')
		.post(function(req, res){
			var modid = req.body.modid;
			var tipo = req.body.tipo;
			connection.query("SELECT * FROM bloque WHERE `mod_id_f` = '"+modid+"' AND `tipo` = '"+tipo+"'", function(err, rows){
				res.json(rows);
			});
		})
	;

	app.route('/api/cursos/:id')
		.get(function(req, res){
			console.log("ver el id :");
			var id = req.params.id;
			console.log(id);
			connection.query("SELECT * FROM curso WHERE curso.curso_id NOT IN (SELECT curso_id FROM (SELECT curso.curso_id,curso.nombre,curso.imagen,curso.descripcion,curso.exp_id_f,curso_estudiante.stu_id FROM `curso` LEFT JOIN curso_estudiante ON curso.curso_id=curso_estudiante.curso_id) as CE WHERE CE.stu_id='"+id+"')", function(err, rows){
				console.log(rows);
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

    app.route('/api/curso_estudiante/:id1/:id2')
	.get(function(req, res) {
		var curso = req.params.id1;
		var stu = req.params.id2;
        connection.query("INSERT INTO `curso_estudiante`(`curso_id`, `stu_id`) VALUES ("+curso+","+stu+") ", function(err, rows){
            res.json(rows);
        });
    });

	app.route('/api/curso_estudiante/:id')
		.get(function(req, res) {
			var est = req.params.id;
					console.log("mensaje importante");
					console.log(est);
			connection.query("SELECT * FROM (SELECT curso.curso_id,curso.nombre,curso.imagen,curso.descripcion,curso.exp_id_f,curso_estudiante.stu_id FROM `curso` LEFT JOIN curso_estudiante ON curso.curso_id=curso_estudiante.curso_id) as CE WHERE CE.stu_id='"+est+"'", function(err, rows){
				console.log(rows);
				res.json(rows);
				
			});
		});
		app.route('/api/curso_estudiante')
		.post(function(req, res){
			var f = req.body;
			console.log("curso a inscribir");
			console.log(f.curso);
			console.log(f.stu);
			console.log("agregando alumno a curso");
			connection.query("INSERT INTO `curso_estudiante`(`curso_id`, `stu_id`) VALUES ( '"+f.curso+"','"+f.stu+"')", function(err, rows){
				console.log(rows);
				res.json(rows);

			});

		});
		app.route('/api/estudiantes_curso/:curso_id')
		.get(function(req, res){
			
			console.log("curso a inscribir");
			var curso = req.params.curso_id;
			console.log(curso);
			connection.query("SELECT * FROM estudiante WHERE estudiante.stu_id IN (SELECT curso_estudiante.stu_id FROM curso_estudiante WHERE curso_estudiante.curso_id = '"+curso+"') ", function(err, rows){
				console.log(rows);
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
