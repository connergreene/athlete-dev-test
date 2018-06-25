'use strict';

var Athlete = require('./athlete.model.js');
var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');

router.param('id', function (req, res, next, id) {
	Athlete.findById(id).exec()
	.then(athlete => {
		if (!athlete) throw HttpError(404);
		req.requestedAthlete = athlete;
		next();
	})
	.then(null, next);
});

router.get('/', function (req, res, next) {
	Athlete.find({}).exec()
	.then(athletes => {
		res.status(200).json(athletes);
	})
	.then(null, next);
});

router.get('/:id', (req, res, next) => {
    res.status(200).json(req.returnedAthlete);
});

router.post('/', function (req, res, next) {
	Athlete.create(req.body)
	.then(athlete => {
		res.status(200).send();
	})
	.then(null, next);
});

router.put('/:id', function (req, res, next) {
	_.extend(req.requestedAthlete, req.body);
	req.requestedAthlete.save()
	.then(athlete => {
		res.status(200).json(athlete);
	})
	.then(null, next);
});

router.delete('/:id', function (req, res, next) {
	req.requestedAthlete.remove()
	.then(function () {
		res.status(204).end();
	})
	.then(null, next);
});

module.exports = router;