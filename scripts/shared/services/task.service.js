'use strict';
define(["angularAMD"], function (app) {
  app.service('taskService', ['$q',
    function($q) {

      var todos = [
        {"name": "ocisti kucu"},
        {"name": "nahrani kera"},
        {"name": "pokosi travnjak"},
        {"name": "plati lopovima"},
        {"name": "trcanje"},
        {"name": "kendo"}
      ];

      this.helloWorld = function() {
        console.log("This is the data service's method!!");
      };

      this.getTodos = function() {
        var deferred = $q.defer();

        deferred.resolve(todos);

        return deferred.promise;
      };

      this.deleteTodo = function(todo) {
        console.log("The " + todo.name + " todo has been deleted!")
        // other logic
      };

      this.saveTodos = function(todos) {
        console.log(todos.length + " todos have been saved!");
        // other logic...
      };
    }
  ]);
});
