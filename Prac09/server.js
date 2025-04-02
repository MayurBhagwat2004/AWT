const {createServer} = require("node:http")
const port = 3000
const hostname = "127.0.0.1"

const server = createServer((req,res)=>{
    res.setHeader("Content-Type","text/plain")
    res.statusCode = 200
    if(req.url==="/")
    {
        res.end("Hello mayur")
    }
    else if(req.url==="/about")
    {
        res.end("About page")
    }
    else if(req.url==="contact")
    {
        res.end("Contact page")
    }
})

server.listen(port,hostname,()=>{
    console.log("Server running on "+hostname+":"+port);
    
})