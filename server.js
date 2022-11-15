const express = require('express')
const pokemonController = require('./controllers/pokemon_controller')

const app = express()
const port = 3000

// tell express which template engine to use
app.set('view engine', 'ejs')

// tell express to use the request parsing middleware
app.use(express.urlencoded({extended: true}))
// app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Pokemon Routes

// index action
app.get('/pokemon', pokemonController.listPokemon)

// new action: to display form to create a new pokemon
app.get('/pokemon/new', pokemonController.newPokemonForm)

// show action
app.get('/pokemon/:pokemon_id', pokemonController.showPokemon)

// create action
app.post('/pokemon', pokemonController.createPokemon)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
