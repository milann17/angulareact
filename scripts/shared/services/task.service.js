'use strict';
define(["angularAMD"], function (app) {
  app.service('taskService', ['$q',
    function($q) {

      var todos = [
        {"name": "Ocisti kucu"},
        {"name": "Nahrani kera"},
        {"name": "Pokosi travnjak"},
        {"name": "Rucaj"},
        {"name": "Idi na trening"},
        {"name": "Posao"}
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

      };

      this.saveTodos = function(todos) {
        console.log(todos.length + " todos have been saved!");
        
      };
    }
  ]);
});
