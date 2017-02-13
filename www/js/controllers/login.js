var app = angular.module('app-notifier')
.controller('LoginCtrl', function($scope, $state, $location, UserService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.loginWithOpenID = function() {
    UserService.login().then(function(response){
      UserService.setUser(response.data);
      console.log(UserService.getUser());
      $state.go('app.profile', {}, {reload: true});
      //$location.path = "/app/profile";
    })
  };
});
