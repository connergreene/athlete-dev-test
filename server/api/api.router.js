'use strict';

var router = require('express').Router();

router.use('/athletes', require('./athletes/athlete.router'));

module.exports = router;