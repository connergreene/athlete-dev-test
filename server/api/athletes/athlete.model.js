'use strict'; 

var mongoose = require('mongoose'),
	shortid = require('shortid'),
	crypto = require('crypto'),
	_ = require('lodash');

var db = require('../../db');

var Athlete = new mongoose.Schema({
	_id: {
		type: String,
		unique: true,
		default: shortid.generate
	},
	name: {
		type: String
	},
	birthDate: {
		type: Date
	},
	nationality: {
		type: String
	},
	location: {
		type: String
	},
	association: {
		type: String
	},
	team: {
		type: String
	},
	gender: {
		type: String
	},
	sports: [{
		type: String
	}],
	about: {
		type: String
	},
	interests: [{
		type: String
	}],
	charities: [{
		type: String
	}],
	socialMedia: [{
		type: String
	}],
	pets: [{
		type: String
	}],
	alcoholCons: {
		type: Boolean
	},
	married: {
		type: Boolean
	}
});


module.exports = mongoose.model('Athlete', Athlete);