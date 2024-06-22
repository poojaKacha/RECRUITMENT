var JOBS = require('../model/jobs')

exports.addJOB = async function(req, res, next) {
    try {
        let addjob = await JOBS.create(req.body)
        res.status(201).json({
            status: "add job successfully",
            addjob
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message:error.message
        })
    }
};
exports.viewJOB = async function(req, res, next) {
    try {
        let findjob = await JOBS.find().populate('userID')
        res.status(201).json({
            status: "view data",
            findjob
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message:error.message
        })
    }
};
exports.updateJOB = async function(req, res, next) {
    try {
        let updateJOB = await JOBS.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json({
            status: "successfully",
            message: "update job",
            updateJOB
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message:error.message
        })
    }
};
exports.deleteJOB = async function(req, res, next) {
    try {
        let deletejob = await JOBS.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status: "delete data",
            deletejob
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message:error.message
        })
    }
};