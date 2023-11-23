const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1/taskListDB"

// Database connect function
function connectDB(){
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

module.exports = {connectDB};