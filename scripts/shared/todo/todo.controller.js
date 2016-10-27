define(["app", "taskService"], function(app) {
  app.register.controller("todoController", ['$scope', 'taskService',
    function($scope, todoService) {
      $scope.addTodo = function() {
        var todo = {name: "This is a new todo."};
        $scope.todos.unshift(todo);
      };

      $scope.helloWorld = todoService.helloWorld;

      todoService.getTodos().then(function(response) {
        $scope.todos = response;
      });

      $scope.deleteTodo = function(todo, $index) {
        todoService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
      };

      $scope.saveTodos = function() {
        var filteredTodos = $scope.todos.filter(function(todo) {
          if(todo.edited) {
            return todo;
          };
        });
        todoService.saveTodos(filteredTodos);
      };
    }
  ]);
});
