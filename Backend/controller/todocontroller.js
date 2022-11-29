const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Todo = require("../module/todoModel");
const { exists } = require("../module/todoModel"); 
exports.createtask = asyncHandler(async (req, res) => {
  const { task, active } = req.body;
  const todo = await Todo.create({ task, active });
  res.status(201).json({
    success: true,
    data: todo,
    message: "task is created sucessfully",
  });
});
//uptade
exports.updateTask = asyncHandler(async (req, res) => {
    console.log("ss", req.body);
  const { task, active } = req.body;
  // const exittask=await Todo.findOne ({_id:req.params.id})
  const existtask = await Todo.findOne({ _id: req.params.id });
  if (existtask) {
    existtask.task = task;
    existtask.active = active;
    const updateTask = await existtask.save();
    res.status(200).json({
      success: true,
      data: updateTask,
      message: `task is updated sucessfully`,
    });
  } else {
    res.status(401).json({
      success: true,
      data: updateTask,
      message: `task not found`,
    });
  }
});

exports.delTask = asyncHandler(async (req, res) => {
  const { task, active } = req.body;
  // const exittask=await Todo.findOne ({_id:req.params.id})
  
  const existtask = await Todo.findOne({ _id: req.params.id });
  if (existtask) {
    await existtask.remove();
    const alltasks = await Todo.find({});
    res.status(200).json({
      success: true,
      data: alltasks,
      message: "task deleted successfully",
    });
  } else {
    res.status(401).json({
      success: true,
      data: updateTask,
      message: `task not found`,
    });
  }
});

exports.singleTask = asyncHandler(async (req, res) => {
  const { task, active } = req.body;
  // const exittask=await Todo.findOne ({_id:req.params.id})
  const existtask = await Todo.findOne({ _id: req.params.id });
  if (existtask) {
    res.status(200).json({
      success: true,
      data: existtask,
      message: "task found ",
    });
  } else {
    res.status(401).json({
      success: true,
      data: updateTask,
      message: `task not found`,
    });
  }
});
exports.allTask = asyncHandler(async (req, res) => {
  console.log("ssss");
  const { task, active } = req.body;
  // const exittask=await Todo.findOne ({_id:req.params.id})
  const alltasks = await Todo.find({});
  console.log("all ytask", alltasks);
  if (alltasks) {
    res.status(200).json({
      success: true,
      data: alltasks,
      message: "task found ",
    });
  } else {
    res.status(401).json({
      success: true,
      data: updateTask,
      message: `task not found`,
    });
  }
});
