 todoApp.controller('TodoCtrl', function($rootScope, $scope, todosFactory) {
 
  $scope.todos = [];
  $scope.isEditable = [];
 
  // get all Todos on Load
  todosFactory.getTodos().then(function(data) {
    $scope.todos = data.data;
  });
 
  // Save a Todo to the server
  $scope.save = function($event) {
    if ($event.which == 13 && $scope.todoInput) {
 
      todosFactory.saveTodo({
        "todo": $scope.todoInput,
        "isCompleted": false
      }).then(function(data) {
        $scope.todos.push(data.data);
      });
      $scope.todoInput = '';
    }
  };
 
  //update the status of the Todo
  $scope.updateStatus = function($event, _id, i) {
    var cbk = $event.target.checked;
    var _t = $scope.todos[i];
    todosFactory.updateTodo({
      _id: _id,
      isCompleted: cbk,
      todo: _t.todo
    }).then(function(data) {
      if (data.data.updatedExisting) {
        _t.isCompleted = cbk;
      } else {
        alert('Oops something went wrong!');
      }
    });
  };
 
  // Update the edited Todo
  $scope.edit = function($event, i) {
    if ($event.which == 13 && $event.target.value.trim()) {
      var _t = $scope.todos[i];
      todosFactory.updateTodo({
        _id: _t._id,
        todo: $event.target.value.trim(),
        isCompleted: _t.isCompleted
      }).then(function(data) {
        if (data.data.updatedExisting) {
          _t.todo = $event.target.value.trim();
          $scope.isEditable[i] = false;
        } else {
          alert('Oops something went wrong!');
        }
      });
    }
  };

 
  // Delete a Todo
  $scope.delete = function(i) {
    todosFactory.deleteTodo($scope.todos[i]._id).then(function(data) {
      if (data.data) {
        $scope.todos.splice(i, 1);
      }
    });
  };
 
});


 todoApp.controller('Practica', function($rootScope, $scope) {
 
    var gem = {
        'value': "Esto es el valor, lalala: 200",
        'show': true
    };

    this.login = {
        "user": "Nombre Usuario",
        "pass": "Contraseña"
    }
 
    this.product = gem;     

 
});





todoApp.controller('Encuesta', function($rootScope, $scope, $location, arandanoFactory, shareData){

    this.stu = {
        'nombre': '',
        'nickname': '',
        'email': ' ',
        'password': '',
        'tipon': 0,
        'tipo': ''
    };

	this.checkResp = function(resp, index){
		console.log("changing resp");
		var ec = resp.ec;
		var or = resp.or;
		var ca = resp.ca;
		var ea = resp.ea;
		console.log("ec: "+ec+"; or: "+or+"; ca: "+ca+"; ea: "+ea);
		if(resp.ec && resp.or && resp.ca && resp.ea){
			if(
				ec===or || ec===ca || ec===ea ||
				or===ca || or===ea || ca===ea 	){
				resp.check = false;
				$("#incom"+index).css("display", "block")
					//console.log("bad!");
			}
			else{
				//console.log("good!");
				$("#incom"+index).css("display", "none")
				resp.check = true;	
			}
		}
	}
	this.checkPass = function(){
		var aux = this.stu;
		if(aux.password !== aux.password2){
			$("pass2").css("display", "block")
			console.log("password dosent match");	
		}
		else{
			$("#pass2").css("display", "block")
			console.log("password matches!");
		}	
	}

    this.submitEncuesta = function(){
        console.log('Holaa!');
        console.log($scope);
        console.log(this.respuestas);
        var ec = 0, or = 0, ca = 0; ea = 0;
        this.respuestas.forEach(function(asd){
			  ec += asd.ec;  
			  or += asd.or;  
			  ca += asd.ca;  
			  ea += asd.ea;
			if(!asd.check){
				return false;
			}
        });
        var caec = ca - ec;
        var eaor = ea - or;

        if(eaor > 0 && caec < 0){
            this.stu.tipo = 'Adaptador';
            this.stu.tipon = 1;
        }
        else if(eaor < 0 && caec < 0){
            this.stu.tipo = 'Divergente'
            this.stu.tipon = 2;
        }
        else if(eaor > 0 && caec > 0){
            this.stu.tipo = 'Convergente'
            this.stu.tipon = 3;
        }
        else{
            this.stu.tipo = 'Asimilador'
            this.stu.tipo_n = 4;
        }
        console.log(ca+' '+ec+' '+or+' '+ea);
        console.log($scope);

        shareData.set(this.stu);
        arandanoFactory.saveData(this.stu)
        .then(function(){
            $location.path('/dashboard');
        });
    };
    

    this.results = {
        'ec': 0,
        'or': 0,
        'ca': 0,
        'ea': 0
    };

    this.respuestas = [];

    this.preguntas = [
        {
            'titulo': 'Cuando aprendo...' ,
            'ec': 'me gusta vivir sensaciones',
            'or': 'me gusta pensar sobre ideas',
            'ca': 'me gusta estar haciendo cosas',
            'ea': 'me gusta observar y escuchar'
        },

        {
            'titulo': 'Aprendo mejor cuando' ,
            'ec': 'escucho y observo cuidadosamente',
            'or': 'Confío en el pensamiento lógico',
            'ca': 'confío en mi intuición y sentimientos',
            'ea': 'trabajo duro para lograr hacer las cosas'
        },
        {
            'titulo': 'Cuando estoy aprendiendo..' ,
            'ec': 'tiendo a usar el razonamiento',
            'or': 'soy responsable con lo que hago',
            'ca': 'soy callado y reservado',
            'ea': 'tengo fuertes sensaciones y reacciones'
        },
        {
            'titulo': 'Yo aprendo..' ,
            'ec': 'Sintiendo',
            'or': 'Haciendo',
            'ca': 'Observando',
            'ea': 'Pensando'
        },
        {
            'titulo': 'Cuando aprendo...' ,
            'ec': 'Estoy abierto a nuevas experiencias',
            'or': 'Observo todos los aspectos del asunto',
            'ca': 'Me gusta analizar las cosas, descomponerlas en sus partes',
            'ea': 'Me gusta probar e intentar hacer las cosas'
        },
        {
            'titulo': 'Cuando estoy aprendiendo..' ,
            'ec': 'soy una persona observadora',
            'or': 'soy una persona activa ',
            'ca': 'soy una persona intuitiva',
            'ea': 'soy una persona lógica'
        },
        {
            'titulo': 'Yo aprendo mejor de...' ,
            'ec': 'la observación',
            'or': 'la relación con otras personas',
            'ca': 'las teorías racionales',
            'ea': 'la oportunidad de probar y practicar'
        },
        {
            'titulo': 'Cuando aprendo...' ,
            'ec': 'me gusta ver los resultados de mi trabajo',
            'or': 'me gustan las ideas y las teorías',
            'ca': 'me tomo mi tiempo antes de actuar',
            'ea': 'me siento personalmente involucrado en las cosas'
        },
        {
            'titulo': 'Aprendo mejor cuando...' ,
            'ec': 'confío en mis observaciones',
            'or': 'confío en mis sentimientos',
            'ca': 'puedo probar por mi cuenta',
            'ea': 'confío en mis ideas'
        },
        {
            'titulo': 'Cuando estoy aprendiendo...' ,
            'ec': 'soy una persona reservada',
            'or': 'soy una persona receptiva',
            'ca': 'soy una persona responsable',
            'ea': 'soy una persona racional'
        },
        {
            'titulo': 'Cuando aprendo...' ,
            'ec': 'me involucro',
            'or': 'me gusta observar',
            'ca': 'evaluó las cosas',
            'ea': 'me gusta ser activo'
        },
        {
            'titulo': 'Aprendo mejor cuando..' ,
            'ec': 'analizo ideas',
            'or': 'soy receptivo y abierto',
            'ca': 'soy cuidadoso',
            'ea': 'soy practico'
        }
    ];
});

 todoApp.factory('todosFactory', function($http) {
  var urlBase = '/api';
  var _todoService = {};
 
  _todoService.getTodos = function() {
    return $http.get(urlBase);
  };
 
  _todoService.saveTodo = function(todo) {
    return $http.post(urlBase, todo);
  };
 
  _todoService.updateTodo = function(todo) {
    return $http.put(urlBase, todo);
  };
 
  _todoService.deleteTodo = function(id) {
    return $http.delete(urlBase + '/' + id);
  };
 
  return _todoService;
});

 todoApp.factory('arandanoFactory', function($http) {
  var urlBase = '/api';
  var _todoService = {};
 
  _todoService.getData= function() {
    return $http.get(urlBase);
  };
 
  _todoService.saveData = function(todo) {
    return $http.post(urlBase, todo);
  };
 
  _todoService.updateData = function(todo) {
    return $http.put(urlBase, todo);
  };
 
  _todoService.deleteData = function(id) {
    return $http.delete(urlBase + '/' + id);
  };
 
  return _todoService;
});


todoApp.factory('TheFactory', function($http, $window) {
	var theResult = {
		getCursos: function(){
			var promise = $http({
				method: 'GET',
				url: 'http://localhost:8080/api/curso/1'
			})
			.success(function(data, status, headers, config){
				console.log('desde factory: '+data[0].curso_id);
				return data;
			})
			;
			return promise;
		}
	};
	//console.log(theResult.getCursos());
	return theResult; 
 
 });

 todoApp.factory('arandanoBDExperto', function($http) {
	var urlBase = '/api/experto';
	var _todoService = {};
 

  _todoService.getData = function(data, callbackData) {
	  $http.get(urlBase+'/'+data)
		  .then(function(response){
		  	callbackData(response);
		  });

  _todoService.sendLogin = function(data) {
	  return $http.post('/api/login', data);
  };


  _todoService.consol = function() {
	  console.log("si existo");
	  return true;
  };
	  /*
app.controller('PoniesCtrl', function($scope, ponyService) {
  ponyService.getPonies(function(ponies) {
    $scope.ponies = ponies;
  });
});

app.factory('ponyService', function($http) {
  var getPonies = function(callbackFn) {
    $http.get('/api/ponies').success(function(data) {
      callbackFn(data);
    });
  };

  return {
    getPonies: getPonies
  };
});
	  */

	  /*
	  $http.get(urlBase+'/'+data)
		  .then(function(arr){
		  	return arr.nombre_exp;
		  }, function(err){alert("fail");})*/
  };
 
  _todoService.saveData = function(data) {
    return $http.post(urlBase, data);
  };
 
  _todoService.updateData = function(data) {
    return $http.put(urlBase, data);
  };
 
  _todoService.deleteData = function(id) {
    return $http.delete(urlBase + '/' + id);
  };
 
  return _todoService;
});


todoApp.factory('shareData', function(){
    var savedData = {};
     function set(data) {
       savedData = data;
     }
     function get() {
      return savedData;
     }
     return {
      set: set,
      get: get
     }
});

todoApp.controller('Header', function($rootScope, $scope, $location, arandanoFactory, shareData){
    var sidebar = false;
    this.url = "/partials/sidebar.html";
    this.toogle = function(){

        $(".sidebar-collapse").toggle();
        if(sidebar === false) {
            $(".thelogo_sm").attr("src","assets/arandano2_.svg");
            sidebar = true;
        }
        else{
            $(".thelogo_sm").attr("src","assets/arandano2.svg");
            sidebar = false;
        }
    }; 
});

todoApp.controller('Login', function($rootScope,$http, $scope, $location, arandanoBDExperto, shareData, Experto){

	this.data = {};
	var aux;
	var that = this;


	this.submitLoginEstudiante = function(){
		console.log(that.est.data);
		$http.post('/api/login/est', that.est.data)
			.then(function(res){
				if(res.data.login === 1){
					$location.path('/dashboard');
				}
		});
	};

	$http.post("/query", {query: "SELECT * FROM estudiante"})
		.then(function(res){
			console.log(res);
		});

	/*
    this.submitLoginExperto = function(){
		console.log(that.exp.data);
		$http.post('/api/login/exp', that.exp.data)
			.then(function(res){
				if(res.data.login === 1){
					$location.path('/dash_exp');
				}
			});
	};
	*/
	console.log(Experto);
	this.submitLoginExperto = function(){
		Experto.loadExperto(that.exp.data);
	}

    this.submitLoginProfesor = function(){
		console.log("profesor data: "+that.pro.data);
		$http.post('/api/login/pro', that.pro.data)
			.then(function(res){
				if(res.data.login === 1){
					$location.path('/dash_exp');
				}
			});
    };
    
});


/*
 * aloja
 * 1234
 *
 *
 * andrew123
 * 1234
 * */



		/*
		 //Intento con .get , que es inseguro para passwords
		arandanoBDExperto.getData(this.data.user, function(data){
			aux = data;
			//console.log(aux.data[0].exp_pass);
			if(that.data.pass === aux.data[0].exp_pass) $location.path('/dashboard');
			else{
				$("#wrongpass").fadeIn(1000).css("display","block");
			}

		}); 
		*/

todoApp.controller('Registro', function($rootScope, $scope, $location, arandanoBDExperto, shareData){

    this.stu = {
        'nombre': '',
        'nickname': '',
        'email': ' ',
        'password': '',
        'tipon': 0,
        'tipo': ''
    };

	this.checkPass = function(){
		var aux = this.stu;
		if(aux.password !== aux.password2){
			$("pass2").css("display", "block")
			console.log("password dosent match");	
		}
		else{
			$("#pass2").css("display", "block")
			console.log("password matches!");
		}	
	}

    this.submitReg = function(){
        console.log('Holaa!');
        console.log($scope);

		//shareData.set(this.stu);
        arandanoBDExperto.saveData(this.stu)
        .then(function(){
            $location.path('/regexitoso');
        });
    };
    
});

todoApp.controller('Dashboard', function($rootScope, $scope, $location, arandanoFactory, shareData, $http, Estudiante, Modulo, Bloque){
    this.stu = shareData.get();
    this.algo = "un text";
	var that = this;
	this.show = [true, false, false,false,false];
	this.theStudent = {}; //Informacion sobre el estudiante
	this.currCurso = {}; //informacion del curso Actrualmente Abierto
	this.currMods = {}; //Contiene los modulos de un curso
	this.currMod = {}; //Informacion del modulo actualmente abierto

this.MisloadCursos = function(){
		

		console.log(that.theStudent.stu_id);
		$http.get('/api/curso_estudiante/'+ that.theStudent.stu_id)
			.then(function(res){
			
				that.MisCursos = res;
			});
	};

	this.MisloadCursos = function(){
		

		console.log(that.theStudent.stu_id);
		$http.get('/api/curso_estudiante/'+ that.theStudent.stu_id)
			.then(function(res){
			
				that.MisCursos = res;
			});
	};

	this.loadCursos = function(){

		$http.get('/api/cursos/'+that.theStudent.stu_id)
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


		$http.post('/api/curso_estudiante/',{curso:curid , stu: that.theStudent.stu_id});	
		console.log("alumno inscrito");
		that.changeScreen(0);
		that.MisloadCursos();

	};

	this.openOtrosCursos= function (){
		that.loadCursos();
		that.changeScreen(3);
	};

    this.loadEstudiante = function(){
		console.log("iniciando metodo getstudent");
		
		$http.get('/api/login/est/')
            .then(function(res){
				console.log("In student!!!, the user fecthed:")
				console.log(res);
				if(res.data.status === -1 || !res.data.stu_id){
					$location.path("/");	
				}
				else{
					//that.theStudent = res.data;
					that.theStudent = new Estudiante();
					that.theStudent = res.data;
					that.MisloadCursos();
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

	this.desinscribir = function(curid){
		
		
		that.changeScreen(0);
		that.MisloadCursos();
	}

	this.openCurso = function(curid, aux){
		console.log("openCurso");
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

	this.goBack = function(){

		that.loadEstudiante();
		that.changeScreen(0);

	}

	this.openPerfil = function(){
		that.loadEstudiante();
		console.log("en edicion de perfil");
		that.changeScreen(4);
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
		$http.post('/api/getbloque', {modid: modid, tipo: that.theStudent.tipo})
			.then(function(res){
				console.log(res);
				that.currBloque = res.data[0];
				if(that.currBloque.doc != ''){that.currBloque.boolDoc = true;}
				else{ that.currBloque.boolDoc = false; }
				that.changeScreen(2);
			});
	}

	this.changeScreen = function(num){
		that.show = [ false, false, false, false, false];
		that.show[num] = true;
	}

});


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
	this.shows = [true, false, false , false];
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
		console.log(that.currCurso.curso_id);
			$http.get('/api/estudiantes_curso/'+that.currCurso.curso_id)
			.then(function(res){
				console.log("Info del get estuduantes: ");
				console.log(res.data);
			
				that.students = that.renderData(res.data);
			});	
		that.changeScreen(3);
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

/*
var bloque = {
	bloque_id: int(11),
	img_url: varchar(256),
	content: text,
	mod_id_f: int(11),
	stu_id_f: int(11)
};
*/

todoApp.factory('Bloque', function($http, $location){
	var urlBase = '/api';
	var Bloque = function(){
		return{
			bloque_id: "",
			img_url: "",
			content: "",
			mod_id_f: "",
			tipo: ""
		}
	};

	Bloque.getBloques = function(modid, index, changeScreen, addBloqueData){
		var obj = {query : "SELECT * FROM bloque WHERE mod_id_f='"+modid+"'" };
		$http.post('/query/get', obj)
			.then(function(res){
				console.log("resultado de query:");
				console.log(res.data);
				addBloqueData(res.data);
				changeScreen(index);
			});
	}

	Bloque.updateBloques = function(obj, changeScreen){
		obj.query = "UPDATE bloque SET content = (CASE tipo WHEN 0 THEN '"+obj.content.ad+"' WHEN 1 THEN '"+obj.content.di+"' WHEN 2 THEN '"+obj.content.co+"' WHEN 3 THEN '"+obj.content.as+"' END) WHERE tipo IN ('0','1','2','3') AND mod_id_f='"+obj.modid+"';";
		$http.post('/query/post', obj)
			.then(function(res){
				changeScreen();
			});
	
	}

	Bloque.addDoc = function(aux){
		var obj = aux;
		obj.query = "UPDATE bloque SET doc='"+obj.filename+"' WHERE mod_id_f='"+obj.modid+"'";
		$http.post('/query/post', obj);
	}

	Bloque.openBloque = function(){
	
	}
	
	return Bloque;	
	//
});

/*
var curso = {
	curso_id: int(11),
	nombre: varchar(256),
	imagen: varchar(512),
	descripcion: text,
	exp_id_f: int(11),
	stu_id_f: int(11)
};
*/

todoApp.factory('Curso', function($http, $location){
	var urlBase = '/api';
	var Curso = function(){
		return{
			curso_id: "",
			nombre: "",
			imagen: "",
			descripcion: "",
			exp_id_f: ""
		}
	};

	Curso.addCurso = function(){
	
	}

	Curso.getCurso = function(){
	
	}
	
	return Curso;	
});

/*
var estudiante = {
	stu_id: int(11),
	nickname: varchar(64),
	nombre: varchar(128),
	email: varchar(256),
	password: varchar(128),
	tipo: int(1)
};
*/


todoApp.factory('Estudiante', function($http, $location){
	var urlBase = '/api';

	var Estudiante = function(){
		return {
			stu_id: "",
			nickname: "",
			nombre: "",
			email: "",
			password: "",
			tipo: ""
		}
	}

	Estudiante.addEstudiante = function(){
	
	}

	Estudiante.getEstudiante = function(){
	
	}
	
	return Estudiante;	
});

todoApp.factory('Experto', function($http, $location) {
  var urlBase = '/api';
	//Creo el objeto "Experto, donde se van a colocar las funciones
	//y ademas, va los datos en si del experto.

	//Constructor, crea un experto desde 0, el cual luego hay que añadirlo
	//con addExperto
	var Experto = function(){
		return{
			exp_id: "",
			nombre_exp: "",
			exp_pass: ""
		}
	}

	//Otro tipo de funcion constructor, pero en este caso, carga de la
	//base de datos los datos del experto, ademas de dejarlo logueado
	//en la página.
	Experto.loadExperto = function(formdata){
		$http.post('/api/login/exp', formdata)
			.then(function(res){
				if(res.data.login === 1){
					$location.path('/dash_exp');
				}
			});
	}

	//Obtener del backend, los datos del experto, los cuales
	//Passport.Js tiene guardados en el backend.
	Experto.authExperto = function(aux){
		$http.get('/api/login/exp')
			.then(function(res){
				console.log("En dashboard de experto, el usuario es:");
				//console.log(res);
				if(res.data.status === -1 || !res.data.exp_id){
					$location.path("/");	
					return {};
				}
				else{
					aux.theExperto = res.data;
					aux.verCursos2(res.data.exp_id);
				}
			});	
	}

	//Añade un experto a la base de datos, comprobando si este
	//anteriormente existia
	function addExperto(exp_id, nombre_exp, exp_pass){
		/* Tengo que agregar aqui la funcionalidad de ingresar
		 * un experto a la base de datos.
		 * Aqui puedo comprobar si efectivamente su nickname es diferente,
		 * entre otras cosas, sin enredar tanto el controlador.
		 *
		 * (No esta todavia, por que S.O. me tiene para la caga :(...,
		 * ajedrez de mierda)
			* */
	}

	return Experto;
});




/*
var modulo = {
	mod_id: int(11),
	nombre_mod: varchar(256),
	img_mod: varchar(256),
	curso_if_f: int(11)
};
*/


todoApp.factory('Modulo', function($http, $location){
	var urlBase = '/api';
	var Modulo = function(){
		return{
			mod_id: "",
			nombre_mod: "",
			img_mod: "",
			curso_id_f: ""
		}
	};

	Modulo.addModulo = function(cursoId, formdata, reloadPage){
		$http.post('/api/modulo/'+cursoId, formdata)
			.then(function(res){
				//if(res.data.login === 1){
					console.log("Posted!");
					reloadPage();
				//}
			});
	}

	/*Obtener los modulos de un curso*/
	Modulo.getModulos = function(cursoId, aux, changeView){
		$http.get('/api/modulo/'+cursoId)
			.then(function(res){
				console.log("si lo cambie");
				aux.currMods = res.data;	
				changeView();
			});
	}
	
	return Modulo;	
});

/*
var profesor = {
	prof_id: int(11),
	nickname: varchar(64),
	nombre: varchar(128),
	password: varchar(128),
	email: varchar(256)
};*/


todoApp.factory('Profesor', function($http, $location){
	var urlBase = '/api';
	var Profesor = function(){
		return{
			prof_id: "",
			nickname: "",
			nombre: "",
			password: "",
			email: ""
		}
	};

	Profesor.addProfesor = function(){
	
	}

	Profesor.getProfesor = function(){
	
	}
	
	return Profesor;	
});


todoApp.factory('Progreso', function($http, $location){
	var urlBase = '/api';
	var Progreso = function(){
		return{
			Nivel: "",
			fecha: "",
			mod_id_f: "",
			stu_id_f: ""
		}
	};

	Progreso.addProgreso = function(){
	
	}

	Progreso.getProgreso = function(){
	
	}
	
	return Progreso;	
});
