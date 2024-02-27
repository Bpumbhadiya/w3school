var express = require('express');
var router = express.Router();
const subcatagoryController = require("../controllers/subcatagory")

router.post("/adddata",subcatagoryController.adddata);

router.get("/alldata",subcatagoryController.alldat);

router.delete("/delete/:id",subcatagoryController.deldata);

router.patch("/update/:id",subcatagoryController.updatedata);

module.exports = router;