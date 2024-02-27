const TOPIC = require("../model/topic");


exports.adddata = async function (req,res,next) {
    try {
        if(!req.body.name || !req.body.description ||!req.body.subcatagory ||!req.body.maincatagory ){
            throw new Error("plz enter valid fields")
        }
        const data = await TOPIC.create(req.body)
        res.status(201).json({
            status : "successfull",
            message : "topic added",
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
        const data = await TOPIC.find().populate("subcatagory").populate("maincatagory")
        res.status(200).json({
            status:"successful",
            message : "all topic found",
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
        await TOPIC.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status : "successfull",
            message : "topic deleted"
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
        const data = await TOPIC.findByIdAndUpdate(req.params.id , req.body)

        res.status(200).json({
            status : "successfull",
            message : "topic updated",
            data : data 
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}