todoApp.controller('Dashboard', function($rootScope, $scope, $location, arandanoFactory, shareData, $http){
    this.stu = shareData.get();
    this.algo = "un text";
	var that = this;
	this.show = [true, false, false];
	this.theStudent = {}; //Informacion sobre el estudiante
	this.currCurso = {}; //informacion del curso Actrualmente Abierto
	this.currMods = {}; //Contiene los modulos de un curso
	this.currMod = {}; //Informacion del modulo actualmente abierto


	this.loadCursos = function(){
		$http.get('/api/cursos/')
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

    this.loadEstudiante = function(){
		console.log("iniciando metodo getstudent");
		that.loadCursos();
		$http.get('/api/login/est/')
            .then(function(res){
				console.log("In student!!!, the user fecthed:")
				console.log(res);
				if(res.data.status === -1 || !res.data.stu_id){
					$location.path("/");	
				}
				else{
					that.theStudent = res.data;
					switch(that.theStudent.tipo){
						case 0:
							that.stu.tipo = "Adaptador";
							break;
						case 1:
							that.stu.tipo = "Divergente";
							break;
						case 2:
							that.stu.tipo = "Convergente";
							break;
						case 3:
							that.stu.tipo = "Asimilador";
							break;
					}
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

	this.openBloque = function(module){
		that.currMod = module;
		var modid = module.mod_id;
				console.log("data from the get:");
		$http.post('/api/getbloque', {modid: modid, tipo: that.theStudent.tipo})
			.then(function(res){
				console.log(res);
				that.currBloque = res.data[0];
				that.changeScreen(2);
			});
	}

	this.changeScreen = function(num){
		that.show = [false, false, false];
		that.show[num] = true;
	}

});

