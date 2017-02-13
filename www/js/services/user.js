'use strict';

/**
 * @ngdoc service
 * @name featureTrackerUiApp.NotifyService
 * @description
 * # NotifyService
 * Service in the starter.
 */
angular.module('app-notifier')
.service('UserService', function($http, $q) {
		var service = {};
		service.login = function() {
			return $http({
			url: './json/user.json',
			method: 'GET',
			cache: false,
			contentType: 'application/json',
			dataType: 'json'
			});
		};

		service.setUser = function(user) {
			window.localStorage['user'] = angular.toJson(user);
		};

		service.getUser = function(user) {
			var user = JSON.parse(window.localStorage['user']);
			return user;
		};

		service.logout = function() {
			return $http({
			url: './json/user',
			method: 'GET',
			cache: false,
			contentType: 'application/json',
			dataType: 'json'
			});
		};
		return service;
});
