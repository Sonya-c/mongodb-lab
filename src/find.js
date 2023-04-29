
require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;

async function main() {
  try {
    // Create the client
    const client = new MongoClient(uri);
   
    db = client.db("mongodb_lab");

    let result = await db.collection("superheros").find({}).toArray();
    console.log(result);

    client.close();

  } catch (error) {
    console.log("Error: " + error);
  }
}
main();