const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes")
const url = "mongodb://127.0.0.1/taskListDB"

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public")) //?

app.use(bodyParser.urlencoded({
extended: true
}));

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

app.get("/", (req, res) => {
    res.send({ message: "Hello!"})
})

app.listen(3000, function() {
        console.log("Server started on port 3000")
});


// Connect to MongoDB database
//https://rahmanfadhil.com/express-rest-api/
// mongoose.connect('mongodb://localhost:27017/taskList', { useNewUrlParser: true}) //what is unifiedTopology?
//   .then(() => {

//     //create Express server
//     const app = express()

//     app.use("/api", routes)

//     app.listen(3000, function() {
//         console.log("Server started on port 3000")
//     });
    
//     console.log('MongoDB connected')
// })
// .catch((err) => console.log(err));
