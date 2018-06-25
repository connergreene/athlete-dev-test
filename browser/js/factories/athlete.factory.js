app.factory('AthleteFactory', function($http) {

	return {
		create (newAthlete) {
			return $http({
				url: '/api/athletes/',
				method: 'POST',
				data: newAthlete
			})
			.then(res => res.data);
		},

		fetchById (athleteId) {
			return $http({
				url: '/api/athletes/' + athleteId,
				method: 'GET'
			})
			.then(res => res.data);
		},

		fetchAll () {
			return $http({
				url: '/api/athletes/',
				method: 'GET'
			})
			.then(res => res.data);
		},

		update (athlete) {
			return $http({
				url: '/api/athletes/' + athlete._id,
				method: 'PUT',
				data: athlete
			})
			.then(res => res.data);
		},

		destroy (athleteId) {
			return $http({
				url: '/api/athletes/' + athleteId,
				method: 'DELETE'
			})
			.then(res => res.data);
		}

	};
});