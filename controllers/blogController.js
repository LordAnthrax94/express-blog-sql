const connection = require('../data/db')

const index = (req, res) =>{
  const sql = 'SELECT * FROM posts'

  connection.query(sql, (err, results) =>{
    if(err) return res.status(500).json({error: 'Query sul database non riuscita'})
      res.json(results)
  });
};

const show = (req, res) =>{
  const id = req.params.id
  
  const sql = 'SELECT * FROM posts WHERE id = ?';
  connection.query(sql, [id], (err, results) =>{
    if(err) return res.status(500).json({error: 'Richiesta query fallita'});
    if (results.length === 0) return res.status(404).json({error: 'Post non trovato'});
    res.json(results[0]);
  });
};

const store = (req, res) =>{
  res.send('Creazione post')
};

const update = (req, res) =>{
  const id = req.params.id
  res.send(`Modifica post ${id}`)
};

const modify = (req, res) =>{
  const id = req.params.id
  res.send(`Modifica post ${id}`)
};

const destroy = (req, res) =>{
  const id = req.params.id
  connection.query('DELETE FROM posts WHERE id = ?', [id], (err) =>{
    if(err) return res.status(500).json({ error: 'Cancellazione post non riuscita' });
    res.sendStatus(204)
  });
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}