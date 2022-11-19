const Card = require("./models/card");
const Manager = require("./models/manager");

const express           = require("express"),
        app             = express();
        bodyParser      = require('body-parser'),
        methodOverride  = require("method-override"),
        cors            = require("cors");
        //router        = require("./routes/index"),
        //config        = require("./config.json")


app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors);
//app.use("/api",router);

app.get((req,res)=>{
    console.log("get");
    res.status(200).send("hola holita")});

//let port = config.port;
app.listen(3000, ()=> console.log("Server running in localhost:3000"));
