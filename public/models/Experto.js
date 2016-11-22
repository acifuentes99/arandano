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



