const autorizar = (req, res, next) => {
  const { user } = req.query

  if (user === 'alan') {
    console.log('autorize o usuario')
    req.user = { name: 'alan', id: 8 }
    next()
  } else {
    res.status(401).send('Usuario não autorizado')
  }
}

module.exports = autorizar
