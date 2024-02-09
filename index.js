const express = require("express")
const app = express()
const port = 980
const newrouter = require("./router/index")
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use("/url",newrouter)



app.listen(port,(err)=>{
    console.log(err)
})