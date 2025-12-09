const express = require("express");

const app = express();

app.post("/user/signup",(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})
app.post("/user/signin",(req,res)=>{
    res.json({
        message:"signin endpoint"
    })
})
app.post("/user/purchases",(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})
app.post("/course/purchase",(req,res)=>{
    res.json({
        message:"course purchase endpoint"
    })
})

app.post("/courses",(req,res)=>{
    res.json({
        message:"courses endpoint"
    })
})

app.listen(3000)