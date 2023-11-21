const express = require("express");
const bodyParser = require("body-parser");
const {connectDB} = require("./database.js");
// import connectDB from './database.js';
const TaskController = require("./TaskController.js");

//Connect to Express server
const app = express();

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(express.urlencoded({ extended: true}))

app.use("/api", TaskController)

// Makes connection to the MongoDB
connectDB()

app.listen(3000, function() {
        console.log("Server started on port 3000")
});
