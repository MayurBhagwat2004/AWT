const fs = require("fs")
const readLine = require("node:readline")
const EventEmitter = require("node:stream")
const { stdin, stdout } = require("node:process")
const { readFile } = require("node:fs")

eventEmitter = new EventEmitter()
const rl = readLine.createInterface({
    input:stdin,
    output:stdout
})

rl.question("Enter your name: ",(input)=>{
    try{
        fs.writeFile("writeFile.txt",input,"utf-8",(err)=>{
            if(err)
            {
                console.log("Error while inserting data");
                
            }
            else{
                console.log("Data inserted successfully");
                
            }
        })
    }
    catch(err){
        console.log(err);
        
    }
    rl.close()
})