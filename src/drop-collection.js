
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
    const tempCollection = await db.createCollection("tempCollection");
    let collections = await db.listCollections();

    console.log("all collection")
    console.log(collections);

    let results = await tempCollection.drop();
    console.log(results);

    collections = await db.listCollections();
    console.log("all collection")
    console.log(collections);

    client.close();

  } catch (error) {
    console.log("Error: " + error);
  }
}
main();