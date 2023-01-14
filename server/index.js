const express = require('express');
const cors = require('cors')
const app = express();
const MongoDB = require('./db/db-config');
const activityController = require("./controllers/activityController")

app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Exercise Tracker");
})

app.use('/activites', activityController);




app.listen(8080, () => {
    console.log("Server starting at 8080 port")
})



