const {Router} = require("express");

const adminRouter = Router();

adminRouter.post("/signup",(req,res) =>{
    res.json({
        message:"admin signup"
    })
})
adminRouter.post("/login",(req,res) =>{
    res.json({
        message:"admin loggedin"
    })
})
adminRouter.post("/course",(req,res) =>{
    res.json({
        message:"courses"
    })
})
adminRouter.put("/course",(req,res) =>{
    res.json({
        message:"courses"
    })
})
adminRouter.get("/course/bulk",(req,res) =>{
    res.json({
        message:"admin signup"
    })
})

module.exorts = {
    adminRouter:adminRouter
}