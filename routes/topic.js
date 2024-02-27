var express = require('express');
var router = express.Router();
const topicController = require("../controllers/topic")

router.post("/adddata", topicController.adddata);

router.get("/alldata", topicController.alldata);

router.delete("/delete/:id", topicController.deldata);

router.patch("/update/:id", topicController.updatedata);

module.exports = router;