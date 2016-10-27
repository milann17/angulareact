function appController($scope, userService) {
  userService.getUser().then(function(response) {
    $scope.user = response;
  });
};
