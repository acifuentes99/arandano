 todoApp = angular.module('todoApp', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        //templateUrl: '/partials/todo.html',
        templateUrl: '/partials/front.html',
        //controller: 'TodoCtrl'
        controller: 'Practica'
      })
	  /* Estudiantes */
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
	  /* Expertos y Profesores */
      .when('/login2', {
        templateUrl: '/partials/log_in2.html',
        //controller: 'TodoCtrl'
        controller: 'Practica'
      })
      .when('/reg', {
        templateUrl: '/partials/registro2.html',
        //controller: 'TodoCtrl'
        controller: 'Practica'
      })
      .when('/regexitoso', {
        templateUrl: '/partials/registroExitoso.html',
        //controller: 'TodoCtrl'
        controller: 'Practica'
      })
      .when('/dash_exp', {
        templateUrl: '/partials/dashboard_exp.html',
        //controller: 'TodoCtrl'
        controller: 'Dash_exp',
		resolve: {
			cursosData: function(TheFactory){
				console.log('desde app');
				return TheFactory.getCursos();
			}
		}
      })
      .otherwise({
        redirectTo: '/'
      });
  });
