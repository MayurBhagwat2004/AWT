const {read} = require("fs")
const fs = require("fs/promises");

async function readFile(){
    try{
        const data = await fs.readFile("readFile.txt","utf-8")
        console.log(data);
    }
    catch(err){
        console.log(err);
        
    }


}

readFile()