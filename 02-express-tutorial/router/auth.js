const router = require('express').Router()

router.post('/', (req, res) => {
  console.log(req.body);
 const {name} = req.body
 if(name){
 res.status(200).send(`hi ${name}`); 
 }
  res.status(401).send('enter name')
})

module.exports  = router