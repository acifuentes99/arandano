 todoApp = angular.module('todoApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        //templateUrl: '/partials/todo.html',
        templateUrl: '/partials/front.html',
        //controller: 'TodoCtrl'
        controller: 'Practica'
      }).otherwise({
        redirectTo: '/'
      });
  });
