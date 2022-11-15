const mongodb = require('../mongodb')
const pokemonData = require('./pokemon')

async function run() {

  try {

    const insertResult = await mongodb.db.collection('pokemon').insertMany(pokemonData)
    console.log(insertResult)

  } catch(err) {

    console.log(err)

  } finally {

    mongodb.client.close()
    
  }
  
}

run();
