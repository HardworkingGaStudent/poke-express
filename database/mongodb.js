const { MongoClient } = require("mongodb")

// const uri = "mongodb://127.0.0.1:27017"
const uri = "mongodb+srv://smellycat:Password123@pokeexpress.gudmy.mongodb.net/?retryWrites=true&w=majority";
const dbName = "PokeExpress"

const Client = new MongoClient(uri)
const Db = Client.db(dbName)

module.exports = {
    client: Client,
    db: Db,
}


// ### How to Start Mongol DB
// run the unbuntu command to start the DB
// $ sudo mongod --db ~/data/db
// open new window and type mongosh - to initialize the mongo CLI environment
// More reading - data design, two-way referencing and denormalization