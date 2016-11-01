'use strict';
define(["app"], function(app) {
  app.register.controller('rootController', ['$scope',
    function($scope) {
      console.log('This is root controller.');
    }
  ]);
});
