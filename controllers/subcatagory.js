const SUBCATAGORY = require("../model/subcatagory");

exports.adddata = async function (req,res,next) {
    try {
        if(!req.body.name || !req.body.maincatagory){
            throw new Error("plz enter valid fields")
        }
        const data = await SUBCATAGORY.create(req.body)
        res.status(201).json({
            status : " successfull",
            message : "subcatagory created",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.alldat = async function (req,res,next) {
    try {
        const data = await SUBCATAGORY.find().populate('maincatagory')
        res.status(200).json({
            status : "successfull",
            message : "all subcatagory found",
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
        await SUBCATAGORY.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status : "successfull",
            message : "subcatagory deleted"
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.updatedata = async function (req,res,next) {
    try {
        const data = await SUBCATAGORY.findByIdAndUpdate(req.params.id , req.body)
        res.status(200).json({
            status : "successfull",
            message : "SUBCATAGORY updated",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}