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

	Bloque.addBloque = function(){
	
	}

	Bloque.getBloque = function(){
	
	}
	
	return Bloque;	
});
