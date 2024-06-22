var FEEDBACK = require('../model/feedback')

exports.feedback = async function(req, res, next) {
    try {
        let feedback = await FEEDBACK.create(req.body)
        res.status(201).json({
          status: "success..!!",
            message: "feedback add successfully",
          feedback
   }) 
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message:error.message
     }) 
    }
};
exports.getFEEDBACK = async function(req, res, next) {
    try {
        let feedback = await FEEDBACK.find().populate('userID')
        res.status(201).json({
          status: "success..!!",
          message: "feedback  successfully",
          feedback
   }) 
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message:error.message
     }) 
    }
};