

const index = (req, res) =>{
  res.send('Elenco post')
}

const show = (req, res) =>{
  const id = req.params.id
  res.send(`Dettaglio Post ${id}`)
}

const store = (req, res) =>{
  res.send('Creazione post')
}

const update = (req, res) =>{
  const id = req.params.id
  res.send(`Modifica post ${id}`)
}

const modify = (req, res) =>{
  const id = req.params.id
  res.send(`Modifica post ${id}`)
}

const destroy = (req, res) =>{
  const id = req.params.id
  res.send(`Elimina post ${id}`)
}

module.export={
  index,
  show,
  store,
  update,
  modify,
  destroy
}