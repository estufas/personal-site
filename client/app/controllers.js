angular.module('HackathonCtrls', [])
.controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {
	if($location.path() === '/') {
		$scope.background = "http://res.cloudinary.com/estufas/image/upload/v1455144798/IMG_3505_kakctb.jpg"
	}
}]);
