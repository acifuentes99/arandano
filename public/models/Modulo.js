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
