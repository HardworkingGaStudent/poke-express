const {ObjectId} = require('mongodb')
const model = require('../models/pokemon')
const pokemonModel = require('../models/pokemon')

const controller = {

    listPokemon: async (req, res) => {
        const pokemonData = await pokemonModel.listPokemon()

        res.render('index.ejs', {
            myPageTitle: "See All The Pokemon!",
            pokemon: pokemonData
        })
    },

    showPokemon: async (req, res) => {
        // get the pokemon id from route param
        const pokemonID = req.params.pokemon_id

        // validate valid object ID
        if (!ObjectId.isValid(pokemonID)) {
            res.render('show', {
                p: [],
                errMsg: "object id is not valid",
            })
            return
        }

        // get the pokemon with the id from the database
        let p = null
        try {
            p = await model.getPokemon(pokemonID)
        } catch(err) {
            res.render('show', {
                p: [],
                errMsg: "failed to retrieve pokemon",
            })
            return
        }

        // render the "show" ejs template
        res.render('show', {
            p: p, // or use short form -> p,
            errMsg: "",
        })
    },

    newPokemonForm: (req, res) => {
        res.render('new')
    },

    createPokemon: async (req, res) => {
        const data = req.body

        // validation
        if (!data.pokemon_name) {
            res.send('pokemon name is not set')
            return
        }

        // add the new pokemon to the database
        try {
            pokemonModel.createPokemon({name: data.pokemon_name, img: "http://img.pokemondb.net/artwork/" + data.pokemon_name})
        } catch(err) {
            res.send('failed to create pokemon')
            return
        }

        // redirect to list pokemon page
        res.redirect('/pokemon')
    },

}

module.exports = controller
