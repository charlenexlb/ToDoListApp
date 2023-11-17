import express from 'express';
import TaskModel from '../commons/Task.js';
// Creates a router object
const router = express.Router();

// Post endpoint, which posts a task in the database
router.post("/tasks", async (req, res) => {
    const task = new TaskModel(req.body);

    try{
        await task.save();
        res.send(task);
    } catch(error){
        res.status(500).send(error)
    }
});

// Get endpoint, which retrieves all of the tasks
router.get("/tasks", async (req, res) => {
    try{
        const tasks = await TaskModel.find({});
        res.send(tasks);
    } catch (error) {
        res.status(500).send( error)
    }
});

export default router;