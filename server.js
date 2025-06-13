const express = require("express") 

const port = 5000

const app = express()

app.get("/" , (req,res)=>{
    res.send("hello")
})

app.listen(port, () =>{
    console.log("running")
})