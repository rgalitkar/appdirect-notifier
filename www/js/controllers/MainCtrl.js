var app = angular.module('app-notifier')

.controller('MainCtrl', function($scope, $state, $stateParams, $ionicModal, NotifyService) {

  $scope.notify = {
    isCabAvailed: false,
    showCabOption: false,
    availableOptions: [
      {id: '0', name: 'Select Option'},
      {id: '1', name: 'Coming Late'},
      {id: '2', name: 'Leaving Early'},
      {id: '3', name: 'Work From Home'},
      {id: '4', name: 'Out Of Office'},
      {id: '5', name: 'PTO (Pre Approved)'},
      {id: '6', name: 'Sick Leave'},
      {id: '7', name: 'Working Late'}
    ],
    maxDate: new Date(2020, 12, 31),
    minDate: new Date(),
    request: {
      type: {},
      description: '',
      date: new Date(),
      time: ''
    },
    listOption: null,
  };

  $scope.notify.request.type = $scope.notify.availableOptions[0];
   
  $scope.datePickerCallback = function (val) {
      if (!val) { 
          console.log('Date not selected');
      } else {
          console.log('Selected date is : ', val);
      }
  };

  var user = {
    name: 'Rohit Dhore',
    gender: 'Male'
  };//later replace this with persisted user;

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

  $scope.onOptionChange = function(option) {
    if(option.id == '7' && user.gender == 'Female'){
      $scope.notify.showCabOption = true;
    }
  }

  $scope.submitForm = function(cabBooking){
      console.log('notify: ', $scope.notify.request);
      NotifyService.sendNotification($scope.notify.request, true).then(function(response) {
        if(cabBooking){
          $state.go("app.cab");
        }else{
           //submit form
          $scope.openModal();
        }
      });
  };

});
