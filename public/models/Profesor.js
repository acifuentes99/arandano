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

	Profesor.addProfesor = function(data){
		data.query = "INSERT INTO `profesor` (`nickname`, `nombre`, `email`, `password`) VALUES ('"+data.nickname+"', '"+data.nombre+"', '"+data.email+"', '"+data.password+"')";
		return $http.post('/query/post', data);
	}

	Profesor.getProfesor = function(){
	
	}
	
	return Profesor;	
});
