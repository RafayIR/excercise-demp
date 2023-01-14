require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();


//  mondodb connect
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

