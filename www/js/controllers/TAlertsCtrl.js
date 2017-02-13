var app = angular.module('app-notifier')
.controller('TAlertsCtrl', function($scope, $stateParams) {
  $scope.msg = "Your TAlerts content goes here";
  $scope.teamAlertsDataToday = [
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
  $scope.teamAlertsDataTomorrow = [
    {
      name: 'Rakesh',
      status: '[LATE] By : 2:00 P.M.',
      description: 'Doctor\'s appointment ..'
    },
    {
      name: 'Nitin',
      status: '[Leaving-Early] By : 4:00 P.M',
      description: 'Room hunt...'
    }
  ];
  $scope.teamAlertsDataUpcoming = [
    {
      name: 'Rohit',
      status: '[WFH] on 16/02/2017',
      description: 'Need to take care some personal stuff'
    },
    {
      name: 'Nitin',
      status: '[PTO] on 17/02/2017',
      description: 'Room hunt...'
    }
  ];
});
