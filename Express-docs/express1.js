const express = require('express')
const path = require('path')

const app = express()

//set up a static asset and middleware
app.use(express.static('../public'))


app.get('/RegistrationPage',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'../textFiles/project1.html'))
})

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send("This is about page")
})

app.all('*',(req,res)=>{
    res.status(404).send("Page not found 404 error")
})
app.listen(8000)