const fs = require("fs/promises")

async function writeFileSync()
{
    try
    {
        const data = await fs.readFile("writeFile.txt","utf-8")
        console.log(data);
        await fs.writeFile("writeFile.txt","new data","utf-8")
        await fs.appendFile("writeFile.txt","new data2","utf-8")
        const newData = await fs.readFile("writeFile.txt","utf-8")
        console.log(newData);
        

    }
    catch(err)
    {
        console.log(err);
        
    }

}
writeFileSync()