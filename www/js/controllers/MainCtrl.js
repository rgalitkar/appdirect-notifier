controllerModule.controller('MainCtrl', function($scope, $stateParams) {

  $scope.notify = {
    isCabAvailed: false,
    showCabOption:false,
    listOption: null,
    availableOptions: [
      {id: '', name: 'Select Option'},
      {id: '1', name: 'Coming Late'},
      {id: '2', name: 'Leaving Early'},
      {id: '3', name: 'Work From Home'},
      {id: '4', name: 'Out Of Office'},
      {id: '5', name: 'PTO (Pre Approved)'},
      {id: '6', name: 'Sick Leave'},
      {id: '7', name: 'Working Late'},
    ]
  };

  $scope.$watch('notify.listOption', function(n){
      $scope.notify.showCabOption = (n && n == '7');
  });


});
