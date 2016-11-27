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
      .when('/dash_pro', {
		  templateUrl: '/partials/profesor/dashboard.html',
        //controller: 'TodoCtrl'
        controller: 'Dash_pro',
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

  todoApp.directive("markdownEditor", function () {
    return {
      restrict: "A",
		require:  'ngModel',
      link:     function (scope, element, attrs, ngModel) {
        $(element).markdown({
          savable:false,
			hiddenButtons: 'Preview',
			fullscreen: {enable: false},
			width: '600',
			resize: 'both',
          onChange: function(e){
            ngModel.$setViewValue(e.getContent());
          }
        });
      }
    }
  });

/*

todoApp.directive('fileModel', ['$parse', function ($parse) {
	return {
	   restrict: 'A',
	   link: function(scope, element, attrs) {
		  var model = $parse(attrs.fileModel);
		  var modelSetter = model.assign;

		  element.bind('change', function(){
			 scope.$apply(function(){
				modelSetter(scope, element[0].files[0]);
			 });
		  });
	   }
	};
 }]);

 todoApp.service('fileUpload', ['$http', function ($http) {
	this.uploadFileToUrl = function(file, uploadUrl){
	   var fd = new FormData();
	   fd.append('file', file);

	   $http.post(uploadUrl, fd, {
		  transformRequest: angular.identity,
		   headers: {'Content-Type': undefined},
			enctype: 'multipart/form-data'
	   })

	   .success(function(){
	   })

	   .error(function(){
	   });
	}
 }]);
 */
