const { ObjectId } = require('mongodb')
const mongodb = require('../database/mongodb')
const collectionName = 'pokemon'
const collection = mongodb.db.collection(collectionName)

const model = {

    listPokemon: () => {
        const cursor = collection.find()
        return cursor.toArray()
    },

    getPokemon: pokemonID => {
        return collection.findOne(ObjectId(pokemonID))
    },

    createPokemon: fields => {
        return collection.insertOne(fields)
    },

    deletePokemon: (docID) => {
        collection.deleteOne(docID)
    }

}

module.exports = model
