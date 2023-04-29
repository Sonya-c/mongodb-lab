
require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;

async function main() {
  try {
    // Create the client
    const client = new MongoClient(uri);
   
    // Create database
    const db = client.db("mongodb_lab");
    
    // Create a collection 
    const superherosCollection = await db.collection("superheros");

    let results = await superherosCollection.find({}).limit(1);
    console.log(results);
    
    client.close();

  } catch (error) {
    console.log("Error: " + error);
  }
}
main();