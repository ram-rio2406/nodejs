const userN=require('./user');
//userN('Ram');
const useN = new userN();
console.log("My file name:",__filename);
const path = require('path');

console.log(path.parse(__filename));

const file = require('fs');

file.readdir('./',(err,fileName)=>{
    if(err) console.log(err);
    else console.log(fileName);
});

const EventEmitter = require('events');

//Register a listener\
useN.on("logging",(data)=>{
    console.log("Logging by",data);
});

useN.userName("Ram");
/*
const emitter = new EventEmitter();

//Register a listener\
emitter.on("logging",(data)=>{
    console.log("Logging by",data.Username);
});


//Raise a event
emitter.emit("logging",{Username:"Ram"});
*/