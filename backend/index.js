const express = require("express");
const{ connection } = require("./config/db");
const { router } = require("./routes/apiendpoint.routes");
const cors = require("cors")
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.json({msg:"This is the home route"})
})
app.use("/", router)

app.listen(process.env.port, async()=>{
    try{
        console.log(`server running on port http://localhost:${process.env.port}`)

        await connection
        console.log("connection to database is complete")
        
    }
    catch(err){
        console.log(err)
    }
})