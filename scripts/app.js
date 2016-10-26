'use strict';

define(["angular", "angularAMD", "angular-route", "app", "directiveTodos", "serviceData", "controllerMain", "controllerAbout"], function (angularAMD) {
  var app = angular.module('todoListApp', ['ngRoute']);
  app.config(function ($routeProvider) {
     $routeProvider.when("/", angularAMD.route({
       templateUrl: "scripts/templates/todos.html",
       controller: 'mainCtrl',
       controllerUrl : 'scripts/controllers/main.js'
      }));
  });

return angularAMD.bootstrap(app);


});
