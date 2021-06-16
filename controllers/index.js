const Country = require("../models/Countries");
const Recipes = require("../models/Recipes");

const createNewCountry = async (req, res) => {
	try {
		const country = await new Country(req.body);
		await country.save();

		return res.status(200).json({
			country,
		});
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const getAllCountries = async (req, res) => {
	try {
		const countries = await Country.find();
		return res.status(200).json({ countries });
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const getCountryByID = async (req, res) => {
	const { id } = req.params;
	try {
		const country = await Country.findById(id);

		if (country) {
			return res.status(200).json(country);
		}

		return res.status(404).send("Country not found");
	} catch (e) {
		return res.status(404).send(`Country not found: ${e.message}`);
	}
};

const deleteCountryByID = async (req, res) => {
	const { id } = req.params;
	try {
		const countryDeleted = await Country.findByIdAndDelete(id);

		if (countryDeleted) {
			return res.status(200).send("Country successfully removed");
		}

		throw new Error("Country not found.");
	} catch (e) {
		return res.status(500).send(e.message);
	}
};

const updateCountryByID = async (req, res) => {
	try {
		const { id } = req.params;

		await Country.findByIdAndUpdate(id, req.body, { new: true }, (err, country) => {
			if (err) {
				res.status(500).send(err);
			}
			if (!country) {
				res.status(404).send("Country not found.");
			}

			return res.status(200).json(country);
		});
	} catch (e) {
		return res.status(500).send(e.message);
	}
};

// AIRLINES START HERE

const createNewRecipes = async (req, res) => {
	try {
		const { id } = req.params;

		const countryId = await Recipes.find({ country_id: id });

		if (countryId) {
			const newRecipes = await new Recipes(req.body);
			await newRecipes.save();
			return res.status(201).json({
				newRecipes,
			});
		}
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

const getRecipesByID = async (req, res) => {
	const { id } = req.params;
	try {
		const respe = await Recipes.findById(id);

		if (respe) {
			return res.status(200).json(respe);
		}

		return res.status(404).send("Recipes not found");
	} catch (e) {
		return res.status(404).send(`Recipes not found: ${e.message}`);
	}
};

const getAllRecipes = async (req, res) => {
	try {
		const resp = await Recipes.find();
		return res.status(200).json({ resp });
	} catch (e) {
		res.send(500).json({ error: e.message });
	}
};

const getCountryRecipes = async (req, res) => {
	try {
		const { id } = req.params;
		const allCountryRecipes = await Recipes.find({ country_id: id });

		console.log(`Returning this:`, allCountryRecipes);

		return res.status(200).send(allCountryRecipes);
	} catch (e) {
		return res.status(500).send("No countries found.");
	}
};

const deleteRecipesByID = async (req, res) => {
	const { id } = req.params;
	try {
		const recipesDeleted = await Recipes.findByIdAndDelete(id);

		if (recipesDeleted) {
			return res.status(200).send("Recipes successfully removed");
		}

		throw new Error("Recipes not found.");
	} catch (e) {
		return res.status(500).send(e.message);
	}
};

const updateRecipesByID = async (req, res) => {
	try {
		const { id } = req.params;

		await Recipes.findByIdAndUpdate(id, req.body, { new: true }, (err, recipes) => {
			if (err) {
				res.status(500).send(err);
			}
			if (!recipes) {
				res.status(404).send("Recipes not found.");
			}

			return res.status(200).json(recipes);
		});
	} catch (e) {
		return res.status(500).send(e.message);
	}
};

module.exports = {
	createNewCountry,
	getAllCountries,
	getCountryByID,
	deleteCountryByID,
	updateCountryByID,
	createNewRecipes,
	getRecipesByID,
	getAllRecipes,
	getCountryRecipes,
	deleteRecipesByID,
	updateRecipesByID,
};