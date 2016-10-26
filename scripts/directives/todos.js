angular.module('todoListApp')
app.directive('todos', function() {
  return {
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: true
  }
})
