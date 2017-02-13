'use strict';

/**
 * @ngdoc service
 * @name featureTrackerUiApp.NotifyService
 * @description
 * # NotifyService
 * Service in the starter.
 */
angular.module('app-notifier')
.service('NotifyService', function($http, $q) {
		var dataService = {};
		dataService.sendNotification = function(req, isSuccessful) {
			var deferred = $q.defer()
			if (isSuccessful === true) {
				deferred.resolve("Successfully resolved the fake $http call")
			}
			else {
				deferred.reject("Oh no! Something went terribly wrong in you fake $http call")
			}
			return deferred.promise
			 //  return $http({
				// url: 'api/notify/',
				// method: 'POST',
				// cache: false,
				// contentType: 'application/json',
				// dataType: 'json',
				// data: req
			 //  });
		};
		return dataService;
});
