'use strict';
define(["app", "todoDirective"], function(app) {
  app.register.controller('dashboardController', ['$scope',
    function($scope) {
      console.log('Dashboard controller.');
    }
  ]);
});
