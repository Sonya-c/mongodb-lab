
require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const databaseName = "mongodb_lab";
const uri = process.env.MONGO_URI;

async function main() {
try {
    // Create the client
    const client = new MongoClient(uri);

    // Create database
    const db = client.db(databaseName);
    
    // Create a collection 
    const collectionName = "product";
    const collection = db.collection(collectionName);
    
    client.close();

  } catch (error) {
    console.log("Error: " + error);
  }
}
main();