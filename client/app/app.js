var app = angular.module('HackathonApp', ['ngRoute', 'HackathonCtrls']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when(
				'/', {
					templateUrl: 'app/views/index.html'
					// controller: 'HomeCtrl'
				}
			)
			.otherwise ({
				templateUrl: 'views/404.html'
			});

			//$locationProvider.html5Mode(true);
}]);