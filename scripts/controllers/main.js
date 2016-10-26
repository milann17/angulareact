'use strict';

angular.module('todoListApp')
app.controller('mainCtrl', function($scope, dataService) {
  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.unshift(todo);
  };

  $scope.helloWorld = dataService.helloWorld;

  $scope.todos = [

    {"name": "ocisti kucu"},
    {"name": "nahrani kera"},
    {"name": "pokosi travnjak"},
    {"name": "plati lopovima"},
    {"name": "trcanje"},
    {"name": "kendo"}

  ]

  dataService.getTodos(function(response) {
      console.log(response.data);
      $scope.todos = response.data;
    });

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo) {
      if(todo.edited) {
        return todo;
      };
    });
    dataService.saveTodos(filteredTodos);
  };
})
app.register.controller('todoCtrl', function($scope, dataService) {
  $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    dataService.deleteTodo(todo);
  };

  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited) {
        return todo
      };
    })
    dataService.saveTodos(filteredTodos);
  };
});
