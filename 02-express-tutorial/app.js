const express = require('express')
const app = express()
const middle = require('./middleware')
const  morgan = require('morgan')
const people =require('./router/people')
const login =require('./router/auth')
// const {people} = require('./data')

// app.use(morgan('tiny'))
// app.use(middle)
app.use(express.json())

app.use('/api/people',people)
app.use('/login',login)

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))








app.listen(5000,()=>{
  console.log('listen in 5000');
  
})