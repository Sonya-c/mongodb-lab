
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

    const query = { superpowers: "Superfuerza" };

    let result = await superherosCollection.find(query).toArray();
    console.log(result);
    
    client.close();

  } catch (error) {
    console.log("Error: " + error);
  }
}
main();