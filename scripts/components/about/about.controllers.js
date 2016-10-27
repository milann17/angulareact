'use strict';
define(["app", "todoDirective"], function(app) {
  app.register.controller('aboutController', ['$scope',
    function($scope) {
      console.log('This is my about controller!!!');
    }
  ]);
});
