const MAINCAT = require("../model/maincatagory");


exports.adddata = async function (req,res,next) {
    try {
        if(!req.body.title || !req.body.colorcode || !req.body.tagline){
            throw new Error("plz enter valied fields")
        }
        const data = await MAINCAT.create(req.body)
        res.status(201).json({
            status : "successfull",
            message : "maincatagory created",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.alldata = async function (req,res,next) {
    try {
        const data = await MAINCAT.find()

        res.status(200).json({
            status : "successfull",
            message : "all main catagory found",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}


exports.deldata = async function (req,res,next) {
    try {
        await MAINCAT.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status : "successful",
            message : "main catagory deleted"
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.updatdata = async function (req,res,next) {
    try {
        const data = await MAINCAT.findByIdAndUpdate(req.params.id , req.body)
        res.status(200).json({
            status : "successfull",
            message : "update successfull",
            data : data
        })      
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}