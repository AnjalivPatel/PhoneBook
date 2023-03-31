const bodyParser = require("body-parser");
const express = require("express");
const mongoose =require("mongoose");
const homeRouter = require("./routers/homeRouter")

const port = process.env.port || 3005

const app = express();

//database connection
// mongoose.connect("mongodb://0.0.0.0:27017/tutorial").then(()=>{console.log("Mongodb Connected");}).catch(()=>{console.log("error");})  
mongoose.connect('mongodb://127.0.0.1:27017/UniqueDT').then(()=>{console.log("Mongodb Connected");}).catch(()=>{console.log("error");})  
const db = mongoose.connection;

db.on("error", ()=>{console.log("error in connection");})
db.once("open", ()=>{console.log("connected");})



app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "ejs")
app.use(bodyParser.json())
app.use("/", homeRouter)
app.use(express.static('public'));







app.listen(port)