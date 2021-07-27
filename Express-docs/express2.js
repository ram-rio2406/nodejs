const express = require('express')
const app = express()
const {products} = require('./data')

//console.log(products)
app.get('/',(req,res)=>{
    return res.send('Home page')
    
})

app.get('/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,price} = product
        return {id,name,price}
    })

    return res.json(newProducts)
})

app.get('/products/:productID',(req,res)=>{
    //setting up a params 
    //console.log(req)
    console.log('Route Params',req.params)
    const {productID} = req.params

    const firstProd = products.find((product)=>  product.id === Number(productID) )

    return res.json(firstProd)
})
//Route Params 
app.get('/products/:productID/view/:imageID',(req,res)=>{
    console.log('Route Params',req.params);
    return res.status(200).send('This is the Image ID Page')
})

//Query Strings
app.get('/products/id/query',(req,res)=>{
    console.log('Query Params: ',req.query)
    const {search,limit} = req.query
    let someProduct = products
    if(search){
        someProduct = products.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        someProduct = someProduct.slice(0,Number(limit))
    }
    //console.log(someProduct)
    if(someProduct.length < 1){
        return res.status(200).send("Product not found")
    }
    return res.status(200).json(someProduct)

})


app.listen(8000,()=>{
    return console.log("Server is listening on port 8000....")
})