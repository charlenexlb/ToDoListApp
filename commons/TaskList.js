const mongoose = require('mongoose')

const TaskListSchema = new mongoose.Schema({
    tasks: {
        type: Array
    }
});

module.exports = mongoose.model("TaskList", TaskListSchema)