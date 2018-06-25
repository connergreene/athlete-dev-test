'use strict';

app.directive('navbar', function ($state, $location) {
	return {
		restrict: 'E',
		templateUrl: '/browser/js/templates/navbar.html',
		controller: 'navbarCtrl',
		link: function (scope) {
			scope.pathStartsWithStatePath = function (state) {
				var partial = $state.href(state);
				var path = $location.path();
				return path.startsWith(partial);
			};

			scope.isHome = function(){
				if ($location.path() === '/'){
					return true;
				}
				else{
					return false;
				}
			}
		}
	}
});