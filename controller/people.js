const res = require('express/lib/response')
let { people } = require('../data')

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: ' pro favor forneca o nome' })
  }

  res.status(201).send({ sucess: true, person: name })
}

const createPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ sucess: false, msg: ' por favor forneca o nome' })
  }
  res.status(201).send({ sucess: true, data: [...people, name] })
}

const updatePerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `Nennhuma pessoa com esse ID ${id}` })
  }

  const novaPessoa = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ sucess: true, data: novaPessoa })
}

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `Ninguem com esse ID ${req.params.id}` })
  }

  const novaPessoa = people.filter(
    (person) => person.id !== Number(req.params.id)
  )

  return res.status(200).json({ success: true, data: novaPessoa })
}

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
}
