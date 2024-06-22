var INTERVIEW = require('../model/interview')

exports.interview = async function(req, res, next) {
    try {
      let interview = await INTERVIEW.create(req.body)
      res.status(201).json({
        status: "success..!!",
        message: "successfully..!!",
        interview
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
};
  exports.interviewGET = async function(req, res, next) {
    try {
      let interview = await INTERVIEW.find().populate('userID')
      res.status(201).json({
        status: "success..!!",
        message: "successfully..!!",
        interview
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
};
  exports.updateID = async function(req, res, next) {
    try {
      let update = await INTERVIEW.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.status(200).json({
        status: "success..!!",
        message: "update successfully..!!",
        update
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
};
  exports.deleteID = async function(req, res, next) {
    try {
      let deleteID = await INTERVIEW.findByIdAndDelete(req.params.id)
      res.status(201).json({
        status: "success..!!",
        message: "delete successfully..!!",
        deleteID
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message:error.message
      })
    }
};
  