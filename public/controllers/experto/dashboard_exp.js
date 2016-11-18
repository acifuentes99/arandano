todoApp.controller('Dash_exp', function($rootScope,$http, $scope, $location, arandanoFactory, shareData, $route, Experto, Modulo, Curso){

    this.stu = {
		nombrecurso: '',
		desccurso: '',
		imgurl: ''
    };
	this.theExperto = {}; //Datos del Experto
	this.currCurso = {}; //Cursos del Experto
	this.currMods = {}; //Modulos de un Curso
	this.openMod = {}; //Modulo actualmente abierto
	this.content = {
		ad: 'Inserte para Adaptadores',
		as: 'Inserte para Asimiladores',
		di: 'Inserte para Divergentes',
		co: 'Inserte para Convergentes'
	};

	var that = this;
	//Shows, me define que vista se puede ver, y cual no
	//en este caso, el ver primero cursos, y luego modulos
	/*showType, muestra el tipo para el cual se esta editando
	 * el contenido.
	*/
	this.shows = [true, false, false];
	this.showType = [true, false, false, false];

	//console.log("En controlador, Data = "+this.theData);

    var that = this;
	this.bloqueChangeType = function(aux){
		that.showType = [false, false, false, false];
		that.showType[aux] = true;
	}

	/*
    this.loadExperto = function(){
		console.log("iniciando metodo getExperto");
		$http.get('/api/login/exp/')
            .then(function(res){
				console.log(res);
				if(res.data.status === -1){
					$location.path("/");	
				}
				else{
				   console.log(res);
					that.theExpert = res.data;
				}
            });
	}
	*/

	//this.theExperto = Experto.authExperto();

    this.submitCurso = function(){
        console.log("algo");
		that.stu.admin = that.theExperto.exp_id;
		$http.post('/api/curso', that.stu)
        .then(function(){
            $route.reload();
        });
    };

    this.submitModulo = function(){
        console.log("algo");
		that.stu.admin = that.theExperto.exp_id;
		Modulo.addModulo(that.currCurso.curso_id, that.mod, that.reloadPage);
    };
	this.getModulos = function(){
		Modulo.getModulos(that.currCurso.curso_id, that);
	}
	this.reloadPage = function(){
		$route.reload();
	};

	this.tryMe = function(){
		console.log("that.theExperto vale: ");
		console.log(that.theExperto);
	}

	/* Con esta supermegafuncion, hago el get al cargar la página
	 * (se llama el método con ng-init en la vista)
		* */
    this.verCursos = function(){
		console.log("en funcion init, lalala");
		Experto.authExperto(that);
		/*
        $http.get('/api/curso/'+this.theExperto.exp_id)
            .then(function(res){
               console.log(res);
				that.theCursos = res.data;
               //colocar variable para coloar en la pagina
			});*/
    }
	//Funcion que utilizo de callback al realizar el init
	//de la vista de cursos.
	this.verCursos2 = function(id){
		console.log("en verCusros2");
		$http.get('/api/curso/'+id)
            .then(function(res){
               console.log(res);
				that.theCursos = new Curso();
				that.theCursos = res.data;
			});
	}
	this.openCurso = function(curso){
		console.log(curso);
		that.currCurso = curso;
		Modulo.getModulos(curso.curso_id, that, that.change2Modulos);
	}


	this.change2Bloques = function(aux){
		that.shows[0] = false;
		that.shows[1] = false;
		that.shows[2] = true;
		that.openMod = that.currMods[aux]; //Modulo actualmente abierto
	}

	this.change2Modulos = function(){
		that.shows[0] = false;
		that.shows[1] = true;
		that.shows[2] = false;
	}
	this.change2Cursos = function(){
		that.shows[0] = true;
		that.shows[1] = false;
		that.shows[2] = false;
	}
    
	this.postBloques = function(){
		console.log(that.content);
		console.log("posteando");
		$http.post('/api/bloques/'+that.openMod.mod_id, that.content);
		that.change2Modulos();
	}

});
