const {readFile,writeFile} = require('fs').promises
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const { reject } = require('lodash')
const { resolve } = require('path')

const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
};


const writeText = (path,data)=>{
    return new Promise((resolve,reject)=>{
        writeFile(path,data,(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}
const execute = async(path)=>{
    
    //const result = await getText(path)
    //await writeText(path,`${'I am async writeFile'.toLocaleUpperCase()} ${result}`,{flag:'a'})

    //const result = await readFilePromise(path)
    //await writeFilePromise(path,`${'I am async writeFile'.toLocaleUpperCase()} ${result}`,{flag:'a'})
    
    const result = await readFile(path)
    await writeFile(path,`${'I am async writeFile'.toLocaleUpperCase()} ${result}`,{flag:'a'})
    
}

execute('./textFiles/second.txt');