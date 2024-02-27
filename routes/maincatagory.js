var express = require('express');
var router = express.Router();
const maincatagoryController = require('../controllers/maincatagory');
const userController = require('../controllers/admin');


router.post("/adddata", userController.SECURE, maincatagoryController.adddata);

router.get("/alldata", maincatagoryController.alldata);

router.delete("/deldata/:id", userController.SECURE, maincatagoryController.deldata);

router.patch("/update/:id", userController.SECURE, maincatagoryController.updatdata);

module.exports = router;