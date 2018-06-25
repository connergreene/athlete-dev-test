'use strict'
app.controller('listCtrl', function ($scope, AthleteFactory) {
	AthleteFactory.fetchAll()
	.then(function(athletes){
		$scope.list=athletes;
	});

	$scope.sportOptions = [ { 'Id':0, 'Name':'Golf'},  { 'Id':1, 'Name':'Tennis'},  { 'Id':2, 'Name':'Cricket'},  { 'Id':3, 'Name':'Basketball'},  { 'Id':4, 'Name':'Baseball'},  { 'Id':5, 'Name':'American Football'},  { 'Id':6, 'Name':'Aquatics'},  { 'Id':7, 'Name':'Archery'},  { 'Id':8, 'Name':'Automobile Racing'},  { 'Id':9, 'Name':'Badminton'},  { 'Id':10, 'Name':'Beach Volleyball'},  { 'Id':11, 'Name':'Bobsleigh'},  { 'Id':12, 'Name':'Body Building'},  { 'Id':13, 'Name':'Boxing'},  { 'Id':14, 'Name':'Cross Country Running'},  { 'Id':15, 'Name':'Cross Country Skiing'},  { 'Id':16, 'Name':'Curling'},  { 'Id':17, 'Name':'Cycling'},  { 'Id':18, 'Name':'Darts'},  { 'Id':19, 'Name':'Decathlon'},  { 'Id':20, 'Name':'Down Hill Skiing'},  { 'Id':21, 'Name':'Equestrianism'},  { 'Id':22, 'Name':'eSports'},  { 'Id':23, 'Name':'Fencing'},  { 'Id':24, 'Name':'Field Hockey'},  { 'Id':25, 'Name':'Figure Skating'},  { 'Id':26, 'Name':'Gymnastics'},  { 'Id':27, 'Name':'Ice Hockey'},  { 'Id':28, 'Name':'Martial Arts'},  { 'Id':29, 'Name':'Mixed Martial Arts'},  { 'Id':30, 'Name':'Modern Pentathlon'},  { 'Id':31, 'Name':'Motorcycle Racing'},  { 'Id':32, 'Name':'Netball'},  { 'Id':33, 'Name':'Polo'},  { 'Id':34, 'Name':'Racquetball'},  { 'Id':35, 'Name':'Rowing'},  { 'Id':36, 'Name':'Rugby'},  { 'Id':37, 'Name':'Sailing'},  { 'Id':38, 'Name':'Softball'},  { 'Id':39, 'Name':'Shooting'},  { 'Id':40, 'Name':'Skateboarding'},  { 'Id':41, 'Name':'Skeet Shooting'},  { 'Id':42, 'Name':'Skeleton'},  { 'Id':43, 'Name':'Snow Boarding'},  { 'Id':44, 'Name':'Soccer (Football)'},  { 'Id':45, 'Name':'Squash'},  { 'Id':46, 'Name':'Surfing'},  { 'Id':47, 'Name':'Swimming'},  { 'Id':48, 'Name':'Track and Field'}];

	$scope.config = {
		displayBy: ['Name'],
		height: '200px',
		filter: true
	};
	
	$scope.editMode = false;
	$scope.edit = function(index){
		$scope.editAthlete = $scope.list[index];
		$scope.editMode = true;
	};
	$scope.save = function(mySelectedSports){
		$scope.editMode = false;
		mySelectedSports.forEach(function(selection){
			$scope.editAthlete.sports.push(selection.Name);
		});
		AthleteFactory.update($scope.editAthlete)
	};
	$scope.delete = function(index){
		$scope.deleteAthlete = $scope.list[index];
		AthleteFactory.destroy($scope.deleteAthlete._id)
		$scope.list.splice(index, 1);
	}
});