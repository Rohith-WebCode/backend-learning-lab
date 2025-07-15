const express = require('express')
const app = express()
const middle = require('./middleware')
const  morgan = require('morgan')
const {people} = require('./data')

// app.use(morgan('tiny'))
// app.use(middle)

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
  res.status(200).json({success:true,data:people})
})
app.post('/login', (req, res) => {
  console.log(req.body);
 const {name} = req.body
 if(name){
 res.status(200).send(`hi ${name}`); 
 }
  res.status(401).send('enter name')
})
// app.get('/api/products', (req, res) => {
//   res.send('Products')
// })
// app.get('/api/items', (req, res) => {
//   console.log(req.user)
//   res.send('Items')
// })
app.listen(5000,()=>{
  console.log('listen in 5000');
  
})