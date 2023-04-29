
require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;

async function main() {
  try {
    // Create the client
    const client = new MongoClient(uri);
   
    console.log("Connected");

    // Create database
    const db = client.db("mongodb_lab");
    
    // Create a collection 
    const superherosCollection = await db.collection("superheros");

    let results = await superherosCollection.deleteOne({name:"capitan america"})
    console.log("delete one");
    console.log(results);

    results = await superherosCollection.deleteMany({
        name: {$ne: "spider-man"},
        superpowers: "Superfuerza",
    })
    console.log("delete many");
    console.log(results);

    results = await superherosCollection.find().toArray();
    console.log("affter");
    console.log(results);
    
    client.close();

  } catch (error) {
    console.log("Error: " + error);
  }
}
main();