const EventEmitter = require('events');

console.log(__filename);
console.log(__dirname);

class User extends EventEmitter{
    userName(name){
        console.log(name);

        //Raise a event
        this.emit("logging",name);
    }

    
}
/*
const f = (user)=>{
    console.log(user);
}*/

module.exports = User;