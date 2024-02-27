const NEWUSERS = require("../model/admin");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


exports.SECURE = async function (req,res,next) {
    try {
        //    console.log("mIDDLEWARE");
        // console.log(req.headers.token);
        let token = req.headers.token;
        if (!token) {
            throw new Error("Please attached token")
        }
        var decoded = jwt.verify(token, 'NEW');
        console.log(decoded.id);
        const checkUser = await NEWUSERS.findById(decoded.id)
        if (!checkUser) {
            throw new Error("User not found")
        }
        next()
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}



exports.signup = async function (req,res,next) {
    try {
        if(!req.body.name || !req.body.email || !req.body.password){
            throw new Error("plzz enter valid field")
        }
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const data = await NEWUSERS.create(req.body)
        res.status(201).json({
            status : "successfull",
            message : "user created",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.login = async function (req,res,next) {
    try {
        const checkUser = await NEWUSERS.findOne({ email: req.body.email })
        if (!checkUser) {
            throw new Error("Please enter valid fields ")
        }
        
        const checkPass = await bcrypt.compare(req.body.password, checkUser.password)
        if (!checkPass) {
            throw new Error("Please enter valid fields")
        }
        var token = jwt.sign({ id: checkUser._id  }, 'NEW');
        res.status(200).json({
            status : "successfull",
            message : "user found",
            token
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message 
        })
    }
}

exports.all = async function (req,res,next) {
    try {
        const data = await NEWUSERS.find()
        res.status(200).json({
            status : "successfull",
            message : "all user",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}