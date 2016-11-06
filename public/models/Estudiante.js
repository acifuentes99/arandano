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
	var Estudiante = {};

	Estudiante.addEstudiante = function(){
	
	}

	Estudiante.getEstudiante = function(){
	
	}
	
	return Estudiante;	
});
