const express = require('express');
const TaskModel = require("../commons/Task.js");
// Creates a router object
const router = express.Router();

// POST endpoint, which posts a task in the database
router.post("/tasks", async (req, res) => {
    const task = new TaskModel(req.body);

    try{
        await task.save();
        res.send(task);
    } catch(error){
        res.status(500).send(error)
    }
});

// GET endpoint, which retrieves all of the tasks
router.get("/tasks", async (req, res) => {
    try{
        const tasks = await TaskModel.find({});
        res.send(tasks);
    } catch (error) {
        res.status(500).send( error)
    }
});

// GET endpoint, which retrieves a specific task by id
router.get("/tasks/:id", async (req, res) => {
    try {
        const task = await TaskModel.findOne({ _id: req.params.id});
        res.send(task)
    } catch(error) {
        res.status(500).send({error})
    }
});

// PATCH endpoint, which will update existing task data
router.patch("/tasks/:id", async (req, res) => {
    try {
        const task = await TaskModel.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        await task.save()
        res.send(task)
    } catch(error) {
        res.status(500).send({ error })
    }
});

//DELETE endpoint, which will delete a task
router.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await TaskModel.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).send("Task was not found")
        }
        res.status(204).send()
    } catch(error){
        res.status(500).send({error})
    }
});

module.exports = router;