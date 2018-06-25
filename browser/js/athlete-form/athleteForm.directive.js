app.directive('athleteForm', function ($state) {
	return {
		restrict: 'E',
		templateUrl: '/browser/js/templates/athleteForm.html',
		controller: 'formCtrl'
	}
});