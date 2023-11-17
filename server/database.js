import mongoose from "mongoose"
const url = "mongodb://127.0.0.1/taskListDB"

// https://blog.appsignal.com/2023/08/09/how-to-use-mongodb-and-mongoose-for-nodejs.html
// Database connect function
export default function connectDB(){
    try{
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('MongoDB connected')
        })
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}