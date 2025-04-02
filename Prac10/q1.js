const { error } = require("console")
const express = require("express")
const port = 3000
const fs = require("fs")
const { json } = require("stream/consumers")
const app = express()


// const userFile = JSON.parse(fs.readFileSync("user.json"))
// app.get('/users',(req,res)=>{
//     res.json(userFile)
// })

const userFile = JSON.parse(fs.readFileSync("user.json"))

app.get("/users",(req,res)=>{
    fs.readFile("user.json",'utf-8',(err,data)=>{
        if(err)
        {
            res.status(500).json({error:"Failed to read data"})
        }
        try
        {
            const user = JSON.parse(data)
            res.json(user)
        }
        catch(err)
        {
            res.status(500).json({error:"Invalid json format"})
        }

    })
})

app.get("/users/:id",(req,res)=>{
    const userId = req.params.id
    const user = userFile.find(user=>user.id===parseInt(userId))
    if(!user)
    {
        res.status(404).send("User not found")
    }
    else
    {
        res.json(user)
    }
})

app.patch("/users/:id",(req,res)=>{
    const userId = req.params.id
    const new_user = userFile.find(user=>user.id===parseInt((userId)))
    if(new_user)
    {
        new_user.name = "Mayur"
        res.status(200).send("Updated user")
    }
})

app.listen(port,()=>{
    console.log("Listening");
    
})