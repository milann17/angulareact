'use strict';
define(["app"], function(app) {
  app.register.controller('loginController', ['$scope',
    function($scope) {
      console.log('This is root controller.');
    }
  ]);
});
