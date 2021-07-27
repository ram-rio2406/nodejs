const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const fileRead = fs.createReadStream('./textFiles/project1.html','utf8')
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.write("Home Page")
        res.end()
    }
    else if(req.url === '/about'){
        
        fileRead.on('open',()=>{
            res.writeHead(200,{'content-type':'text/html'})
            fileRead.pipe(res)
            //res.write(fileRead)
            //res.end()
        })

        fileRead.on('error',(err)=>{
            res.end(err)
        })
        
    }
    else
    {
        res.writeHead(404,{'content-type':'text/plain'})
        res.write("Page not found 404 error")
        res.end()
    }
})

server.listen(5000)

