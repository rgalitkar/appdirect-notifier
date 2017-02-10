controllerModule.controller('MainCtrl', function($scope, $state, $stateParams, $ionicModal) {

  $scope.notify = {
    isCabAvailed: false,
    showCabOption:false,
    availableOptions: [
      {id: '', name: 'Select Option'},
      {id: '1', name: 'Coming Late'},
      {id: '2', name: 'Leaving Early'},
      {id: '3', name: 'Work From Home'},
      {id: '4', name: 'Out Of Office'},
      {id: '5', name: 'PTO (Pre Approved)'},
      {id: '6', name: 'Sick Leave'},
      {id: '7', name: 'Working Late'}
    ],
    listOption: null,
  };



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
  };

  $scope.$watch('notify.listOption', function(n){
      $scope.notify.showCabOption = (n && n == '7');
  });



  $scope.submitForm = function(){
      $scope.selectedOption = $scope.notify.availableOptions.filter(function(e) {
        return e.id == $scope.notify.listOption;
      });
      if($scope.selectedOption.length){
        $scope.selectedOption = $scope.selectedOption[0];
      }

      if($scope.notify.isCabAvailed){
        $state.go("app.cab");
      }else{
         //submit form
        $scope.openModal();
      }

  };

});
