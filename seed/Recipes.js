const db = require("../db/index");
const Countries = require("../models/Countries");
const Reripes = require("../models/Recipes")
db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
    const country = Countries.find({ nation:"Italy" })
    const maindishes =[
       {
        title: "pizza ",
        ingredients:"Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta",
        link_pic: "https://media.timeout.com/images/103437036/image.jpg",
		country_id: country._id,  
       }

]

const addrespies = await Reripes.insertMany(maindishes)
console.log("add these recipes")
   
}
const run = async () => {
    await main();
    db.close();
  };
  run();