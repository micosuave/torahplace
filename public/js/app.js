var app = angular.module('fileBrowserApp',['mini']);

app.controller('UploadCtrl', function ($scope, $http, $location) {
	$scope.getphd = function (appnum) {
		var request = {
			method: 'SEARCH',
			url: '/getphd',
			params: {
				id: appnum
			}
		};


		$http(request).then(function (resp) { $scope.appnum = resp.status });
	};
});