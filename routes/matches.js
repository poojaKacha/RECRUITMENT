var express = require('express');
var router = express.Router();
var USER = require('../model/users')
var JOBS = require('../model/jobs')
var matchesC = require('../controller/matches')

/* GET home page. */
router.get('/:id',matchesC.jobID);
router.get('/:id',matchesC.employID);

module.exports = router;
