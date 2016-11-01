'use strict';
define(["angularAMD", "angular-route", "appController","userService"], function (angularAMD) {
  var app = angular.module('app', ['ngRoute']);
  app.config(function ($routeProvider) {
     $routeProvider.when("/dashboard", angularAMD.route({
       templateUrl: "scripts/components/dashboard/dashboard.html",
       controller: "dashboardController"
      }))
      .when("/about", angularAMD.route({
        templateUrl: "scripts/components/about/about.html",
        controller: "aboutController"
       }))
      .when("/", angularAMD.route({
        templateUrl: "scripts/components/root/root.html",
        controller: "rootController"

      }))



      .otherwise("/");
  });

  app.controller('appController', appController);

  angularAMD.bootstrap(app);

  return app;
});
