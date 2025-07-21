const router = require('express').Router()
// app.use(express.json())
const {getPeople,postPerson,putPerson,deletePerson} = require('../Controllers/people')

router.get('/',getPeople )
router.post('/',postPerson)
router.put('/:id',putPerson)
router.delete('/:id',deletePerson)

module.exports  = router