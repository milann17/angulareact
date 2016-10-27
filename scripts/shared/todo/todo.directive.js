define(["angularAMD", "todoController"], function (app) {
  app.directive('todo', function() {
    return {
      templateUrl: 'scripts/shared/todo/todo.html',
      controller: 'todoController',
      replace: true
    }
  });
});
