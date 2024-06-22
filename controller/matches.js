var USER = require('../model/users')
var JOBS = require('../model/jobs')

exports.jobID = async function(req, res, next) {
    try {
      let findbyID = await JOBS.findById(req.params.id)
      res.status(201).json({
        status: "success..!!",
        message: "find suuceesfully",
        findbyID
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
     }) 
    }
}
  exports.employID = async function(req, res, next) {
    try {
      let findbyID = await USER.findById(req.params.id)
      res.status(201).json({
        status: "success..!!",
        message: "find suuceesfully",
        findbyID
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
     }) 
    }
}
  