var app = angular.module('app-notifier')
.controller('StatusCtrl', function($scope, $stateParams) {
  $scope.msg = "Your Status content goes here";
  $scope.individualAlerts= [
    {
      name: 'Today',
      data: [
        {
          status: '[LATE] By : 2:00 P.M.',
          description: 'Doctor\'s appointment ..'
        }
      ]
    },
    {
      name: 'Upcoming',
      data: [
        {
          status: '[WFH] on 17/02/2017',
          description: 'Need to take care some personal stuff'
        }
      ]
    }
  ];
});
