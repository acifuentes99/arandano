/* Archivo de las Rutas del lado del cliente
 * Aqui definimos cuando se abren las vistas en una determinada url
 *
* */
/*
angular.module('todoApp', [
]).
config(['markdownConverterProvider', function (markdownConverterProvider) {
  // options to be passed to Showdown
  // see: https://github.com/coreyti/showdown#extensions
  markdownConverterProvider.config({
    extensions: ['twitter']
  });
}])
*/

todoApp = angular.module('todoApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'btford.markdown'
])
//.config(['markdownConverterProvider', function($routeProvider, markdownConverterProvider) {
  .config(function($routeProvider) {
	  /*
	markdownConverterProvider.config({
	});*/
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
		  templateUrl: '/partials/estudiante/dashboard.html',
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
		  templateUrl: '/partials/experto/dashboard_exp.html',
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
