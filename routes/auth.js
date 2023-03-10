const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Bem Vindo ${name}`)
  }

  res.status(401).send('Por favor Forneca as Credenciais')
})

module.exports = router
