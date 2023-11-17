const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes")

// const app = express();

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(express.static("public")) //?

// app.use(bodyParser.urlencoded({
// extended: true
// }));

// Connect to MongoDB database
//https://rahmanfadhil.com/express-rest-api/
mongoose.connect('mongodb://localhost:27017/taskList', { useNewUrlParser: true}) //what is unifiedTopology?
  .then(() => {

    //create Express server
    const app = express()

    app.use("/api", routes)

    app.listen(3000, function() {
        console.log("Server started on port 3000")
    });
    
    console.log('MongoDB connected')
})
.catch((err) => console.log(err));