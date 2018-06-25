app.directive('athleteList', function ($state) {
	return {
		restrict: 'E',
		templateUrl: '/browser/js/templates/athleteList.html',
		controller: 'listCtrl'
	}
});