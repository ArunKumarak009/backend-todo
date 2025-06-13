const express = require("express") 

const port = 5000

const app = express()

app.get("/todo" , (req,res)=>{
    res.send("happy")
})

app.listen(port, () =>{
    console.log("running")
})


