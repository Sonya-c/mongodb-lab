
require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

async function main() {
  let results;

  try {
    // Create the client
    const client = new MongoClient(uri);

    // Create database
    const db = client.db("mongodb_lab");
    console.log("Database created!");
    
    client.close();

  } catch (error) {
    console.log("Error: " + error);
  }
}
main();