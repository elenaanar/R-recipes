const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path: "./config.env"});
const port = process.env.PORT || 5010;
app.use(cors());
app.use(exppress.json())
//routes go here


const dbo = require("./db/conn");

app.listen(port, () => {
    //perform database connection when server starts
    dbo.connectToServer(function (err){
        if(err) console.error(err);
    });
    console.log("Server is running on port: ${port}");
});
