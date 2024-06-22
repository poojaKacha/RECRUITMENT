var express = require('express');
var router = express.Router();
var jobC = require('../controller/job')


/* GET home page. */
router.post('/addJOB',jobC.addJOB)
router.get('/',jobC.viewJOB)
router.patch('/:id',jobC.updateJOB)
router.delete('/:id',jobC.deleteJOB)



module.exports = router;
