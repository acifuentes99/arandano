todoApp.controller('Dash_pro', function($rootScope, $scope, $location, arandanoFactory, shareData, $http, Modulo, Bloque, Profesor){
    this.stu = shareData.get();
    this.algo = "un text";
	var that = this;
	//	this.show = [true, false, false];
	this.show = [true, false, false,false];
	this.theProfe = {
	}; //Informacion sobre el estudiante
	this.currCurso = {}; //informacion del curso Actrualmente Abierto
	this.currMods = {}; //Contiene los modulos de un curso
	this.currMod = {}; //Informacion del modulo actualmente abierto
	this.currBloque = [];

this.MisloadCursos = function(){
		
	console.log("cargando cursos del profe");
		$http.get('/api/curso_profe_load/'+ that.theProfe.prof_id)
			.then(function(res){
				console.log(res);
				that.MisCursos = res;
			});
	};

	this.loadCursos = function(){
		//$http.get('/api/cursos/')
		$http.get('/api/cursosprofe/'+that.theProfe.prof_id)
			.then(function(res){
				console.log("lo intento");
				that.theCursos = res;
				console.log(res);
			});
	};

	this.probando = function(){
		console.log("theCursos vale: ");
		console.log(that.theCursos);
	}

	this.inscribir = function(curid){
		console.log('curid = ');
		console.log(+curid);

		$http.post('/api/curso_profe/',{curso:curid , profe: that.theProfe.prof_id});	
		console.log("profesor inscrito");
		that.changeScreen(0);
		that.MisloadCursos();

	};

	this.openOtrosCursos= function (){
		that.loadCursos();
		that.changeScreen(3);
	};

    this.loadProfe = function(){
		//that.loadCursos();
		$http.get('/api/login/pro/')
            .then(function(res){
				console.log("Loading profe!!!, the user fecthed:")
				console.log(res);
				if(res.data.status === -1 || !res.data.prof_id){
					$location.path("/");	
				}
				else{
					//that.theProfe = res.data;
					that.theProfe = new Profesor();
					that.theProfe = res.data;
					that.MisloadCursos();
				}
            });
	}

	this.openCurso = function(curid, aux){
		that.currCurso = that.theCursos.data[aux];
		$http.get('/api/modulo/'+curid)
			.then(function(res){
				console.log("Info del get del modulo: ");
				console.log(res.data);
				that.currMods = res.data;
			});
		that.changeScreen(1);
	}

	this.misopenCurso = function(curid, aux){
		console.log("openCurso");
		that.currCurso = that.MisCursos.data[aux];
		$http.get('/api/modulo/'+curid)
			.then(function(res){
				console.log("Info del get del modulo: ");
				console.log(res.data);
				that.currMods = res.data;
			});
		that.changeScreen(1);
	}


	this.openBloque = function(module){
		that.currMod = module;
		var modid = module.mod_id;
				console.log("data from the get:");
		$http.post('/api/getbloque2', {modid: modid})
			.then(function(res){
				console.log(res);
				that.currBloque = res.data;
				//Los bloques se encuentran en el arreglo that.currBloque
				if(that.currBloque.doc != ''){that.currBloque.boolDoc = true;}
				else{ that.currBloque.boolDoc = false; }
				that.changeScreen(2);
			});
	}
	this.showBloque = [true, false, false, false];
	this.bloqueChangeType = function(num){
		that.showBloque = [false, false, false, false];
		that.showBloque[num] = true;
	}

	this.changeScreen = function(num){
		//that.show = [false, false, false];
		that.show = [false, false, false,false];
		that.show[num] = true;
	}

});

