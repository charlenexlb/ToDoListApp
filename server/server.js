const express = require("express");
const { connectDB } = require("./database.js");
const TaskController = require("./TaskController.js");
const cors = require('cors');

//Connect to Express server
const app = express();

app.use(cors())

app.use(express.urlencoded({ extended: true}))

app.use(express.json());

app.use("/api", TaskController)

// Makes connection to the MongoDB
connectDB();

app.listen(3000, function() {
        console.log("Server started on port 3000")
});
