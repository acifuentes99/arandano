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
