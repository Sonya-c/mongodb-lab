
require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

const custumers = [
  {
    name: "Peter",
    lastname: "Paker",
    job: "Photographer"
  },
  {
    name: "Tony",
    lastname: "Stark",
    job: "Genius, Billionaire, Playboy, Philanthropist"
  },
  {
    name: "Bruce",
    lastname: "Baner",
    job: "Scientist"
  },
  {
    name: "Thor",
    lastname: "of Asgar",
    job: "Price"
  },
  {
    name: "Steve",
    lastname: "Rogers",
    job: "Captain"
  }
]
async function main() {
  let results;

  try {
    // Create the client
    const client = new MongoClient(uri);

    // Create database
    const db = client.db("mongodb_lab");
    
    // Create a collection 
    const custumersCollection = db.collection("custumers");

    // Insert
    // await custumersCollection.insertMany(custumers)

    // Find
    results = await custumersCollection.findOne({name: "Peter"});
    console.log(results);

    client.close();

  } catch (error) {
    console.log("Error: " + error);
  }
}
main();