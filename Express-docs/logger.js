const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getDate()
    console.log(method,url,time)
    //it will transfers from middleware to response
    next() 
}


module.exports = logger