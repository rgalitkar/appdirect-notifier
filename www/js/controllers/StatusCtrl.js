var app = angular.module('app-notifier')
.controller('StatusCtrl', function($scope, $stateParams) {
  $scope.msg = "Your Status content goes here";
  $scope.teamAlertsDataToday= [
    {
      name: 'Rakesh',
      status: '[LATE] By : 2:00 P.M.',
      description: 'Doctor\'s appointment ..'
    },
    {
      name: 'Prashant',
      status: '[OOO] 12:00 To 2:00 P.M.',
      description: 'Stepping out for lunch'
    },
    {
      name: 'Rohit',
      status: '[WFH]',
      description: 'Need to take care some personal stuff'
    },
    {
      name: 'Nitin',
      status: '[Leaving-Early] By : 4:00 P.M',
      description: 'Room hunt...'
    }
  ];
});
