const express = require('express')
const path = require('path')
const app = express()
const {products} = require('./data')


// app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products',(req,res)=>{

    const newProducts = products.map((product)=>{
        const {id,name,image}=product
        return {id,name,image}
    })

    res.json(newProducts)

})
app.get('/api/products/:productID',(req,res)=>{

 const {productID} = req.params
//  console.log(productID);
  
const singleProduct= products.find((product)=>product.id ===Number(productID))

 if(!singleProduct){
    return res.status(404).send('product not Found')
 }

 return res.json(singleProduct)

})

app.get('/api/vi/query',(req,res)=>{

    const {search,limit} =req.query;

    let sortedProducts = [...products]

  if(search){
    sortedProducts = sortedProducts.filter((products)=>{
        return products.name.startsWith(search)
    })
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0,Number(limit))
  }
    res.status(200).json(sortedProducts)
})




// app.all('/*splat',(req,res)=>{ 
// res.status(404).send('<h1>404 Page Not Found</h1>');
// })

app.listen(5000,()=>{
    console.log('listen in 5000');
    
})