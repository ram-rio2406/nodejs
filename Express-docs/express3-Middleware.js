const express = require('express')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')

//app.use(['path'],function to be invoked)
//we set multiple path by using array ['/api','/api1'] 
//app.use(logger) 
//app.use('/api',logger)
//app.use('/api',authorize)
app.use('/api',[logger,authorize])

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/api/products',(req,res)=>{
    res.send("This is the product")
})

app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send("This is the items")
})



/*app.get('/',logger,(req,res)=>{
    res.send('Home')
})

app.get('/about',logger,(req,res)=>{
    res.send('About')
})

app.get('/api/products',logger,(req,res)=>{
    res.send("This is the product")
})

app.get('/api/items',logger,(req,res)=>{
    res.send("This is the items")
})*/

app.listen(8000,()=>{
    console.log("Server is listening on port 8000")
})