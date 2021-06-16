const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Recipes = new Schema(
	{
		title: { type: String, required: true },
        ingredients:{ type: String, required: true },
        link_pic: { type: String, required: true },
		country_id: { type: Schema.Types.ObjectId, ref: "countries" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("recipes",  Recipes );