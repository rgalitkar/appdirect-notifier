'use strict';

/**
 * @ngdoc service
 * @name featureTrackerUiApp.TeamService
 * @description
 * # TeamService
 * Service in the app-notifier.
 */
angular.module('app-notifier')
.service('TeamService', function($http, $q) {
		var service = {};

		service.getList = function() {
			return $http({
				url: './json/team.json',
				method: 'GET',
				cache: false,
				contentType: 'application/json',
				dataType: 'json'
			});
		};
		return service;
});
