const express = require('express')
const route = express.Router()


route.post('/',(req,res) => {
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(401).send('Please enter the credentials')
})


module.exports = route