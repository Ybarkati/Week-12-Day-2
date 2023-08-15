const express = require("express")
const app= express()
const PORT=3000
const pokemon=require("./models/pokemon")
const jsxEngine = require('jsx-view-engine')

// Load the method override function

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', jsxEngine())
app.get("/",(req,res)=>{
    res.send("Welcome to the Pokemon App!")
})
app.get("/pokemon",(req,res)=>{
   res.render("Index",{pokemon})
})
app.listen(PORT,()=>{
    console.log("listen in : "+PORT)
})