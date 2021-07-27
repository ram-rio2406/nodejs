const os = require('os');

//info about the current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`My system uptime is ${os.uptime()} sec`)

const myComputer = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(myComputer);

///////////////////////////////////////////////////////////

const path = require('path');

console.log(path.sep);
const diir =path.join('/textFiles','first.txt');//teturns the full path
console.log(diir);
console.log(path.basename(diir));//returns the base file

console.log(path.resolve(__dirname,'textFiles','first.txt'));

//////////////////////////////////////////////////////////

const {readFile,writeFile} = require('fs');

readFile('./textFiles/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log(result);
    writeFile('./textFiles/second.txt',`Hi i am second file ${result}`,(err,result)=>{
        if(err)
        {
            console.log(err);
            return
        }
        console.log(result);
    })
})

//////////////////////////////////////////////////////////

const http = require('http')

const server  = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('This home page');
    }
    if(req.url === '/about')
    {
    res.end('Hello all this is my first web page');
    }
    res.end(`
    <a href="/">BAck to home</a>`);
})

server.listen(5000);

//////////////////////////////////////////////////////////

const npm = require('lodash')

const arr = [1,[2,[3,[4]]]];
console.log('AD',npm.flattenDeep(arr));