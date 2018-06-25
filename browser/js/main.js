'use strict';

var app = angular.module('opensponsorship-dev-test', ['ui.router', 'ui.bootstrap', 'dropdown-multiselect']);

app.config(function ($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
});


