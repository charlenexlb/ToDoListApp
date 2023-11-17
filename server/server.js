import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './database.js';
import TaskController from "./TaskController.js";

//Connect to Express server
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public")) //?

app.use("/api", TaskController)

// Makes connection to the MongoDB
connectDB()

// app.get("/", (req, res) => {
//     res.send({ message: "Hello!"})
// })

app.listen(3000, function() {
        console.log("Server started on port 3000")
});
