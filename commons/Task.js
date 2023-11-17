import mongoose from "mongoose"

const TaskSchema = mongoose.Schema({
    title: String,
    description: String,
})

export default mongoose.model("Task", TaskSchema)