const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { db,User,Stock } = require('./models');

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
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

// Create user
app.post('/signup', async (request, response) => {

  try {

    const user = await User.create(request.body)
    response.json(user)

  } catch (e) {
    response.status(400).json({ msg: e.status })
  }
})

//Log on
app.post('/login', async (request, response) => {
  const { email, password } = request.body;
  try {
      let user = await User.findAll({
        where: {
          email: email,
          password: password
        }
      })
      response.json(user[0])

  } catch (e) {
    response.status(400).json({ msg: e.status });
  }
})

//update user (wallet)
app.put('/user/:id', async (request, response) => {
  try {
    const who = await User.findByPk(request.params.id)
    await who.update(request.body)

    response.json(who)
  } catch (e) {
    response.status(400).json({ msg: e.status });
  }
})

//create stock for a user
app.post('/user/:id/stock', async (request, response) => {

  try {
      const stock = await Stock.create(request.body);
      const who = await User.findByPk(request.params.id)

      await stock.setUser(who);

      response.json(stock)

  } catch (e) {
    response.status(400).json({ msg: e.status });
  }
})

//get all stocks for a user
app.get('/user/:id/stocks', async(request,response)=>{
  try{
    const allStocks = await Stock.findAll({
      where:{
        user_id: request.params.id
      }
    });
    response.json(allStocks);
  }
  catch(e){
    response.status(400).json({ msg: e.status });
  }
})



app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({ message: err.message })
})

app.listen(PORT, () => console.log(`Stock app listening on port ${PORT}!`))
