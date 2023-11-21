const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String
    }, 
    checked: {
        type: Boolean
    }
});

// mongoose.model() compiles a model given schema 
module.exports = mongoose.model("Task", TaskSchema)