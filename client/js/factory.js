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
