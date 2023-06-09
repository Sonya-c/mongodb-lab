
require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;

async function main() {
  try {
    // Create the client
    const client = new MongoClient(uri);
   
    console.log("Connected");

    client.close();

  } catch (error) {
    console.log("Error: " + error);
  }
}
main();