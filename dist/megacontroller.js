 todoApp = angular.module('todoApp', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        //templateUrl: '/partials/todo.html',
        templateUrl: '/partials/front.html',
        //controller: 'TodoCtrl'
        controller: 'Practica'
      })
      .when('/encuesta', {
        templateUrl: '/partials/encuesta.html',
        //controller: 'TodoCtrl'
        controller: 'Practica'
      })
      .when('/dashboard', {
        templateUrl: '/partials/dashboard.html',
        //controller: 'TodoCtrl'
        controller: 'Practica'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

 todoApp.controller('TodoCtrl', function($rootScope, $scope, todosFactory) {
 
  $scope.todos = [];
  $scope.isEditable = [];
 
  // get all Todos on Load
  todosFactory.getTodos().then(function(data) {
    $scope.todos = data.data;
  });
 
  // Save a Todo to the server
  $scope.save = function($event) {
    if ($event.which == 13 && $scope.todoInput) {
 
      todosFactory.saveTodo({
        "todo": $scope.todoInput,
        "isCompleted": false
      }).then(function(data) {
        $scope.todos.push(data.data);
      });
      $scope.todoInput = '';
    }
  };
 
  //update the status of the Todo
  $scope.updateStatus = function($event, _id, i) {
    var cbk = $event.target.checked;
    var _t = $scope.todos[i];
    todosFactory.updateTodo({
      _id: _id,
      isCompleted: cbk,
      todo: _t.todo
    }).then(function(data) {
      if (data.data.updatedExisting) {
        _t.isCompleted = cbk;
      } else {
        alert('Oops something went wrong!');
      }
    });
  };
 
  // Update the edited Todo
  $scope.edit = function($event, i) {
    if ($event.which == 13 && $event.target.value.trim()) {
      var _t = $scope.todos[i];
      todosFactory.updateTodo({
        _id: _t._id,
        todo: $event.target.value.trim(),
        isCompleted: _t.isCompleted
      }).then(function(data) {
        if (data.data.updatedExisting) {
          _t.todo = $event.target.value.trim();
          $scope.isEditable[i] = false;
        } else {
          alert('Oops something went wrong!');
        }
      });
    }
  };

 
  // Delete a Todo
  $scope.delete = function(i) {
    todosFactory.deleteTodo($scope.todos[i]._id).then(function(data) {
      if (data.data) {
        $scope.todos.splice(i, 1);
      }
    });
  };
 
});

/*
todoApp.controller('Practica', function($rootScope, $scope) {

    var gem = {
        'value': 10
    };
 
    this.product = gem;     
 });
*/

 todoApp.controller('Practica', function($rootScope, $scope) {
 
    var gem = {
        'value': "Esto es el valor, lalala: 200",
        'show': true
    };

    this.login = {
        "user": "Nombre Usuario",
        "pass": "Contraseña"
    }
 
    this.product = gem;     
/*
  $scope.todos = [];
  $scope.isEditable = [];
*/
 
});


todoApp.controller('Dashboard', function($rootScope, $scope, $location, arandanoFactory, shareData){
    this.stu = shareData.get();
    this.algo = "un text";

});

todoApp.controller('Encuesta', function($rootScope, $scope, $location, arandanoFactory, shareData){

    this.stu = {
        'nombre': '',
        'nickname': '',
        'email': '',
        'password': '',
        'tipon': 0,
        'tipo': ''
    };

    this.getResults = function(){
        console.log('Holaa!');
        console.log($scope);
        console.log(this.respuestas);
        var ec = 0, or = 0, ca = 0; ea = 0;
        this.respuestas.forEach(function(asd){
          ec += asd.ec;  
          or += asd.or;  
          ca += asd.ca;  
          ea += asd.ea;  
        });
        var caec = ca - ec;
        var eaor = ea - or;

        if(eaor > 0 && caec < 0){
            this.stu.tipo = 'Adaptador';
            this.stu.tipon = 1;
        }
        else if(eaor < 0 && caec < 0){
            this.stu.tipo = 'Divergente'
            this.stu.tipon = 2;
        }
        else if(eaor > 0 && caec > 0){
            this.stu.tipo = 'Convergente'
            this.stu.tipon = 3;
        }
        else{
            this.stu.tipo = 'Asimilador'
            this.stu.tipo_n = 4;
        }
        console.log(ca+' '+ec+' '+or+' '+ea);
        console.log($scope);

        shareData.set(this.stu);
        arandanoFactory.saveData(this.stu)
        .then(function(){
            $location.path('/dashboard');
        });
    };
    

    this.results = {
        'ec': 0,
        'or': 0,
        'ca': 0,
        'ea': 0
    };

    this.respuestas = [];

    this.preguntas = [
        {
            'titulo': 'Cuando aprendo...' ,
            'ec': 'me gusta vivir sensaciones',
            'or': 'me gusta pensar sobre ideas',
            'ca': 'me gusta estar haciendo cosas',
            'ea': 'me gusta observar y escuchar'
        },
        {
            'titulo': 'Aprendo mejor cuando' ,
            'ec': 'escucho y observo cuidadosamente',
            'or': 'Confio en el pensamiento lógico',
            'ca': 'confio en mi intuición y sentimientos',
            'ea': 'trabajo duro para lograr hacer las cosas'
        },
        {
            'titulo': 'Cuando estoy aprendiendo..' ,
            'ec': 'tiendo a usar el razonamiento',
            'or': 'soy responsable con lo que hago',
            'ca': 'soy callado y reservado',
            'ea': 'tengo fuertes senaciones y reacciones'
        },
        {
            'titulo': 'Yo aprendo..' ,
            'ec': 'Sintiendo',
            'or': 'Haciendo',
            'ca': 'Observando',
            'ea': 'Pensando'
        },
        {
            'titulo': 'Cuando aprendo...' ,
            'ec': 'estoy abierto a nuevas experiencias',
            'or': 'observo todos los aspectos del asunto',
            'ca': 'me gusta analizar las cosas, descomponerlas en sus aprtes',
            'ea': 'me gusta probar e intentar hacer las cosas'
        },
        {
            'titulo': 'Cando estoy aprendiendo..' ,
            'ec': 'soy una persona observadora',
            'or': 'soy una persona activa ',
            'ca': 'soy una persona intuitiva',
            'ea': 'soy una persona lógica'
        },
        {
            'titulo': 'Yo aprendo mejor de...' ,
            'ec': 'la observacón',
            'or': 'la relacion con otras personas',
            'ca': 'las teorias racionales',
            'ea': 'la oportunidad de probar y practicar'
        },
        {
            'titulo': 'Cuando aprendo...' ,
            'ec': 'me gusta ver lso resultados de mi trabajo',
            'or': 'me gustan las ideas y las teorias',
            'ca': 'me tomo mi timepo antes de acutar',
            'ea': 'me siento personalmente involucrado en las cosas'
        },
        {
            'titulo': 'Aprendo mejor cuando...' ,
            'ec': 'confio en mis observciones',
            'or': 'confio en mis sentimientos',
            'ca': 'puedo probar por mi cuenta',
            'ea': 'confio en mis ideas'
        },
        {
            'titulo': 'cuando estoy aprendiendo...' ,
            'ec': 'soy una persona reservada',
            'or': 'soy una persona receptiva',
            'ca': 'soyuna persona responsable',
            'ea': 'soy una persona racional'
        },
        {
            'titulo': 'Cuanod aprendo...' ,
            'ec': 'me inolucro',
            'or': 'me gusta observar',
            'ca': 'evaluo las cosas',
            'ea': 'me gusta ser activo'
        },
        {
            'titulo': 'Aprendo mejor cuando..' ,
            'ec': 'analizo ideas',
            'or': 'soy receptivo y abierto',
            'ca': 'soy cuidadoso',
            'ea': 'soy practico'
        }
    ];
});


todoApp.controller('Header', function($rootScope, $scope, $location, arandanoFactory, shareData){
    var sidebar = false;
    this.url = "/partials/sidebar.html";
    this.toogle = function(){

        $(".sidebar-collapse").toggle();
        if(sidebar === false) {
            $(".thelogo_sm").attr("src","assets/arandano2_.svg");
            sidebar = true;
        }
        else{
            $(".thelogo_sm").attr("src","assets/arandano2.svg");
            sidebar = false;
        }
    }; 
});

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
