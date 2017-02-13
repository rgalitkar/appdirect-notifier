var app = angular.module('app-notifier')
.controller('CabCtrl', function($scope, $state, $stateParams, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/notify-confirmation-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
    $state.go('app.main');
  };



  $scope.submitForm = function(){
    $scope.selectedOption = {name: "Working Late"};
    $scope.openModal();
  };

});
