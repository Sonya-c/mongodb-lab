
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
    const supervillans = await db.collection("supervillans");
    
    await supervillans.insertMany([
        {
            name: "Duende verde",
            superhero: "spider-man"
        },
        {
            name: "El mandarin",
            superhero: "iron-man"
        },
        {
            name:"venom",
            superhero: "spider-man"
        }
    ])

    let result = await supervillans.aggregate([{ $lookup:
            {
                from: 'superheros',
                localField: 'superhero',
                foreignField: 'name',
                as: 'superhero-info'
            }
        }
    ]).toArray();
    console.log(result);
    await supervillans.drop();

    client.close();

  } catch (error) {
    console.log("Error: " + error);
  }
}
main();