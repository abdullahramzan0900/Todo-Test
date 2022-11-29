const express=require("express")
const router=express.Router();
const {createtask,updateTask,delTask,singleTask,allTask}=require(`../controller/todocontroller`);
 router.route(`/`).post(createtask);
 router.route(`/:id`).delete(delTask);
 router.route(`/:id`).put(updateTask);
 router.route(`/:id`).get(singleTask);
 router.route('/').get(allTask);
 module.exports=router;
