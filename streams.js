/*const {createReadStream} = require('fs')

const stream = createReadStream('./txtFiles/big.txt',{
    highWaterMark:1000,
    encoding:'utf8'})

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>{
    console.log(err)
})
*/

const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    const fileRead = fs.createReadStream('./textFiles/big.txt','utf8')
    fileRead.on('open',()=>{
        //console.log(res);
        fileRead.pipe(res) //pipe will make the data to write stream in chunks
       // res.end()
    })
    fileRead.on('error',(err)=>{
        res.end(err)
    })
})
.listen(5000)