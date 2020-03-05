const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { db,User,Stock } = require('./models');

const PORT = process.env.PORT || 3001
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Database landing
app.get('/', async (request, response) => {
  try {
    response.json({
      msg: 'Welcome to TTP Stock App!'
    })
  } catch (e) {
    response.status(500).json({ msg: e.status })
  }
});

//


app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({ message: err.message })
})

app.listen(PORT, () => console.log(`Stock app listening on port ${PORT}!`))
