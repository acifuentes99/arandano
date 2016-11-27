todoApp.controller('Dash_exp', function($rootScope,$http, $scope, $location, arandanoFactory, shareData, $route, Experto, Modulo, Curso, Bloque){

    this.stu = {
		nombrecurso: '',
		desccurso: '',
		imgurl: ''
    };
	this.students={};
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
	/*Ad: 0; Di: 1; Co: 2; As: 3*/
	//Shows, me define que vista se puede ver, y cual no
	//en este caso, el ver primero cursos, y luego modulos
	/*showType, muestra el tipo para el cual se esta editando
	 * el contenido.
	*/
	this.shows = [true, false, false, false];
	this.showsSheets = [true, false, false, false, false];
	this.showType = [true, false, false, false];
	
	//console.log("En controlador, Data = "+this.theData);

    var that = this;
	this.bloqueChangeType = function(aux){
		that.showType = [false, false, false, false];
		that.showType[aux] = true;
	}

	this.addBloqueData = function(bloques){
		bloques.forEach(function(aux){
			if(aux.tipo === 0) that.content.ad = aux.content;
			else if(aux.tipo === 1)  that.content.di = aux.content;
			else if(aux.tipo === 2)  that.content.co = aux.content;
			else  that.content.as = aux.content;
		});
	}

	this.upMaterial = {show: false, msj: 'Material subido correctamente.'};
	this.postMaterial = function(file){
		   console.log(file);
		   var fd = new FormData();
			fd.append('file', file);

			$http.post('/files', fd, {
				transformRequest: angular.identity,
				headers: {
					'Content-Type': undefined},
				enctype: 'multipart/form-data'
			});
		};

	$scope.uploadFile = function(file) {
	   var fd = new FormData();
		fd.append('file', file);
		$http.post('/files', fd, {
			transformRequest: angular.identity,
			headers: {
				'Content-Type': undefined},
				enctype: 'multipart/form-data'
			}
		 )
			.then(function(res){
				console.log("en then, valor de res:")
				console.log(res)
				var data = {
					filename: res.data.filename,
					modid: that.openMod.mod_id
				};
				Bloque.addDoc(data);
				console.log("Material Subido");
				that.upMaterial.show = true;	
			});
	 };

	$scope.readFile = function(elem) {
		var file= elem.files[0];
		console.log("file received ");
		var reader = new FileReader();
	   reader.onload = function() {
		   $scope.$apply(function(){
			   $scope.file = file;
			   $scope.imageUrl = reader.result // to display         image via ng-Src
		   })
	   }
	   reader.readAsDataURL(file);
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

	this.openBloques = function(index){
		var auxMod = that.currMods[index];
		Bloque.getBloques(auxMod.mod_id, index, that.change2Bloques,that.addBloqueData);
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
    
this.changeScreen = function(num){
		that.shows = [false, false, false, false];
		that.shows[num] = true;
	}

	this.verlista = function(){
		console.log("ver lista");
		that.showSheets = [true, false,false,false,false];
		console.log(that.currCurso.curso_id);
			$http.get('/api/estudiantes_curso/'+that.currCurso.curso_id)
			.then(function(res){
				console.log("Info del get estuduantes: ");
				console.log(res.data);
			
				that.students = that.renderData(res.data);
			});	
		that.changeScreen(3);
	}

	this.renderData = function(arreglo){
		var variable = [];
		arreglo.forEach(function(aux){
		variable.push({
			usuario: aux.nickname,
			nombre: aux.nombre,
			email: aux.email,
			tipo: that.getTipo(aux.tipo),
			num: (aux.tipo+1)
			});
		});
		return variable;
	}

	this.getTipo = function(in_){
		if(in_ === 0) return 'Adaptador';
		else if(in_ === 1)  return 'Divergente';
		else if(in_ === 2) return 'Convergente'; 
		else   return 'Asimilador';
	}


	this.postBloques = function(){
		console.log(that.content);
		console.log("posteando");
		var obj = {
			content: that.content,  
			modid: that.openMod.mod_id
		};
		Bloque.updateBloques(obj, that.change2Modulos);
		//$http.post('/api/bloques/'+that.openMod.mod_id, that.content);
		//that.change2Modulos();
	}

	this.changeScreenSheets = function(num){
		that.showsSheets = [false, false, false, false, false];
		that.showsSheets[num] = true;
	}


});
