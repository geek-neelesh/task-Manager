const express=require("express")
const router=express.Router();
const Task=require('../models/task');

const {getalltasks,createtask,gettask,updatetask,deletetask} =require("../controllers/task");

router.route("/getalltasks").get(getalltasks);
router.route("/createtask").post(createtask);
router.route("/gettask/:id").get(gettask);
router.route("/updatetask/:id").patch(updatetask);
router.route("/deletetask/:id").delete(deletetask);

module.exports= router;