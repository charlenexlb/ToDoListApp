import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

// mongoose.model() compiles a model given schema 
export default mongoose.model("Task", TaskSchema)