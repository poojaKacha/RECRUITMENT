var USER = require('../model/users')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

exports.sequre = async function(req, res, next) {
  try {
    let token = req.headers.authorization
    if (!token) {
      throw new Error('token invaild')
    }
    let decoded = jwt.verify(token, 'USER')
    
    let usercheck = await USER.findById(decoded.id)
    if (!usercheck) {
      throw new Error('user not found')
    }
    next()

   
 } catch (error) {
   res.status(404).json({
     status: "fail",
     message:error.message
  })
 }
};
exports.Register = async function(req, res, next) {
    try {
     req.body.password = await bcrypt.hash(req.body.password,10)
      let Register = await USER.create(req.body)
      var token = jwt.sign({ id: Register._id }, 'USER');

      res.status(201).json({
        status: "success..!!",
        message: "Register successfully",
        Register,
        token
        
      })
     
   } catch (error) {
     res.status(404).json({
       status: "fail",
       message:error.message
    })
   }
};
  exports.LogIn= async function(req, res, next) {
    try {
      
      
      let logIN = await USER.findOne({ email: req.body.email })
      if (!logIN) {
        throw new Error('user not LogIn')
      }
      let passverify = await bcrypt.compare(req.body.password, logIN.password)
      if (!passverify) {
        throw new Error('invaild password')
      }
      var token = jwt.sign({ id: logIN._id }, 'USER');

      res.status(201).json({
        status: "success..!!",
        message: "login successfully",
        logIN,
        token
        
      })
     
   } catch (error) {
     res.status(404).json({
       status: "fail",
       message:error.message
    })
   }
};
  exports.candidate_register = async function(req, res, next) {
    try {
     req.body.password = await bcrypt.hash(req.body.password,10)
      let Register = await USER.create(req.body)
      var token = jwt.sign({ id: Register._id }, 'USER');
      
      res.status(201).json({
        status: "success..!!",
        message: "Register successfully",
        Register,
        token
        
      })
     
   } catch (error) {
     res.status(404).json({
       status: "fail",
       message:error.message
    })
   }
};
exports.candidate_LogIn = async function (req, res, next) {
  try {
      
      
    let logIN = await USER.findOne({ email: req.body.email })
    if (!logIN) {
      throw new Error('user not LogIn')
    }
    let passverify = await bcrypt.compare(req.body.password, logIN.password)
    if (!passverify) {
      throw new Error('invaild password')
    }
    var token = jwt.sign({ id: logIN._id }, 'USER');

    res.status(201).json({
      status: "success..!!",
      message: "login successfully",
      logIN,
      token
        
    })
     
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
};
exports.update = async function (req, res, next) {
  try {
    let update = await USER.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({
        status: "success",
        message: "update successfully",
        update
    })
   } catch (error) {
     res.status(404).json({
       status: "fail",
       message:error.message
    })
   }
};

  