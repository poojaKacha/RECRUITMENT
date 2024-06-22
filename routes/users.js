var express = require('express');
var router = express.Router();
var userC = require('../controller/users')

/* GET users listing. */
router.post('/employ/Register',userC.Register)
router.post('/employ/LogIn',userC.LogIn)
router.post('/candidate/Register',userC.candidate_register)
router.post('/candidate/LogIn', userC.candidate_LogIn)
router.patch('/:id',userC.sequre,userC.update)


module.exports = router;
