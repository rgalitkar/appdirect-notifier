var app = angular.module('app-notifier')
app.controller('ProfileCtrl', function($scope, $stateParams, $state, UserService, TeamService) {
	$scope.user = UserService.getUser();
	console.log('User: ', $scope.user);
	TeamService.getList().then(function(response){
		console.log('response', response);
		$scope.teamList = response.data.list;
	});
	$scope.onTeamSelected = function(team){
		console.log('Team', team);
		if($scope.user.teams.indexOf(team.name) < 0){
			$scope.user.teams.push(team.name);
		}
	};
  $scope.saveProfile = function(){
    UserService.saveUser($scope.user).then(function(response){
      window.localStorage['user'] = null;
      window.localStorage['user'] = angular.toJson($scope.user);
      $state.go('app.main');
    });
  };
});
