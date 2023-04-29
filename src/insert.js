
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

    // insert one 
    let results = await superherosCollection.insertOne({
        name: "spider-man",
        superpowers: ["Superfuerza", "Sentido aranido", "Inteligencia", "Caminar en superficies", "Resistencia", "Factor de curación"],
        armas: ["lanza-telarañas"]
    });

    console.log("insert one results ");
    console.log(results);

    // insert manny
    results = await superherosCollection.insertMany([
        {
            name: "iron-man",
            superpowers: "dinero",
            armas: ["armadura"]
        },
        {
            name: "capitan america",
            superpowers: "Superfuerza",
            armas: ["escudo"]
        },
        {
            name: "thor",
            superpowers: ["Superfuerza", "volar", "cabello hermoso"],
            armas: ["martillo"]
        },
        {
            name: "hulk",
            superpowers: ["Superfuerza"]
        }
    ]);
    console.log("insert many results ");
    console.log(results);
    client.close();

  } catch (error) {
    console.log("Error: " + error);
  }
}
main();