var express = require('express');
var router = express.Router();
var FEEDBACK = require('../model/feedback')
var feedbackC = require('../controller/feedback')

/* GET home page. */
router.post('/feedback',feedbackC.feedback)
router.get('/',feedbackC.getFEEDBACK)

module.exports = router;
