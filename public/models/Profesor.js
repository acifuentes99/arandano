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
	var Profesor = {};

	Profesor.addProfesor = function(){
	
	}

	Profesor.getProfesor = function(){
	
	}
	
	return Profesor;	
});
