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
