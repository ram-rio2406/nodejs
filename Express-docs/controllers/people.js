const {people} = require('../data')


const getPeople = (req,res) => {
    res.json(people)
}

const postNewPeople = (req,res) => {
    const {name} = req.body

    if(!name){
        return res.status(401).json({success:false,msg:'Please provide the data crt'})
    }
    return res.status(200).json({success:true,data:[name,people]})

}

const putUpdatePeople = (req,res) => {
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

}

const deletePeople = (req,res) => {
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

}


module.exports = {
    getPeople,
    postNewPeople,
    putUpdatePeople,
    deletePeople
}
