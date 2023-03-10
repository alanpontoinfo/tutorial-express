const express = require('express')
const router = express.Router()

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controller/people')

//route.get('/', getPeole)
// router.post('/', createPerson)
//router.post('/postman', createPersonPostman)
// routr.put('/:id', updatePerson)
//router.delete('/:id', deltePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router
