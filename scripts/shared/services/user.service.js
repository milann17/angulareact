'use strict';

define(["angularAMD"], function (app) {
  app.service('userService', ['$q',
    function($q) {
      var user = {
        name: 'Milan',
        image : "http://www.quicksortindia.com/img/user/3.png"
      }
      this.getUser = function() {
        var deferred = $q.defer()
        deferred.resolve(user);
        return deferred.promise;
      };
    }
  ]);
});
