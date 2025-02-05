const express = require('express');
const app = express();
const port = 3000;

const blogRouter = require('./routes/blogRoute')
const errorHandlers = require('./middlewares/errorHand')
const notFoundHandlers = require('./middlewares/notFoundHandlers')

app.use(express.static('Public'))

app.use(errorHandlers)

app.use(notFoundHandlers)

app.use(express.json())

app.get('/', (req, res) =>{
  res.send('I miei post')
})

app.use('/posts', blogRouter)

app.listen(port, ()=>{
  console.log(`Sono in ascolto sulla porta ${port}`);
  
})