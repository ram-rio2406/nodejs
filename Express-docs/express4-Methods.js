const express = require('express')
const app = express()

const peopleRoute = require('./routes/route-people') 
const peopleLogin = require('./routes/login-people')

//static assets
//When we are using static assets the main folder should contain the index.html file,
//because the static fun will check for the main file only(index.html) 
app.use(express.static('../module_public'))
//parse the data
app.use(express.urlencoded({extended:false}))
//handles the json data from post method
app.use(express.json())

app.use('/api/postman/people',peopleRoute)
app.use('/login',peopleLogin)


app.listen(8000,() => {
    console.log("Server is lestening on port 8000")
})




/*
app.get('/api/people',(req,res) => {
    res.json(people)
})

app.post('/login',(req,res) => {
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(401).send('Please enter the credentials')
})


app.post('/api/postman/people',(req,res) => {
    const {name} = req.body

    if(!name){
        return res.status(401).json({success:false,msg:'Please provide the data crt'})
    }
    return res.status(200).json({success:true,data:people})

})

app.put('/api/postman/people/:ID',(req,res) => {
    const {ID} = req.params
    const {name} = req.body

    let person = people.find((person)=>{
        return person.id === Number(ID)
    })

    if(!person){
        return res.status(200).json({success:false,msg:'Please provide crt data'})
    }

    let newPerson = people.map((person) => {
        if(person.id === Number(ID)){
            person.name = name
        }
        return person
    })
    return res.status(200).json({success:true,data:newPerson})

})

app.delete('/api/postman/people/:ID',(req,res) => {
    let person = people.find((person) => {
        return person.id === Number(req.params.ID) 
    })
    
    if(!person){
        return res.status(200).json({success:false,msg:'Please provide crt data'})
    }

    let newPerson = people.filter((person) => {
        return person.id !== Number(req.params.ID)
    })

    return res.status(200).json({success:true,data:newPerson})



})*/