app.controller('navbarCtrl', function ($scope, AthleteFactory) {
	$scope.viewEdit = false;
	$scope.view = function(){
		$scope.viewEdit = true;
	}

	$scope.addForm = function(){
		$scope.viewEdit = false;
	}
});