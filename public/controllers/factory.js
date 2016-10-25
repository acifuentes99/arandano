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
