
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
