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
