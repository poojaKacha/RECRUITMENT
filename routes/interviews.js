var express = require('express');
var router = express.Router();
var INTERVIEW = require('../model/interview')
var interviewC = require('../controller/interview')


/* GET home page. */
router.post('/interview',interviewC.interview)
router.get('/',interviewC.interviewGET)
router.patch('/:id',interviewC.updateID)
router.delete('/:id',interviewC.deleteID)


module.exports = router;
