const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public")) //?

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true}) //what is unifiedTopology?
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(3000, function() {
    console.log("Server started on port 3000")
});


