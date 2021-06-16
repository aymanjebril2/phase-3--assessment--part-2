const db = require("../db/index");
const Countries = require("../models/Countries");
db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
    const countries = [
        {
            nation:"Italy"  
        },
        {
            nation:"France"  
        },
        {
            nation:"India"  
        },
        {
            nation:"Greece"  
        },
        {
            nation:"Mexico"  
        },
        
]  

 const addCounteries = await Countries.insertMany(countries)
 console.log("its add all of the Counteries ", addCounteries )
}
const run = async () => {
    await main();
    db.close();
  };
  run();
