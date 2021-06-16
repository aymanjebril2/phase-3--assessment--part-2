const Router = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", async (req, res) => {
	res.send("Home route.");
});

router.post("/countries", controllers.createNewCountry);
router.get("/countries", controllers.getAllCountries);
router.get("/country/:id", controllers.getCountryByID);
router.delete("/country/:id", controllers.deleteCountryByID);
router.patch("/country/:id", controllers.updateCountryByID);

router.get("/country-recipes/:id", controllers.getCountryRecipes);

router.post("/recipes", controllers.createNewRecipes);
router.get("/recipes", controllers.getAllRecipes);

router.get("/recipe/:id", controllers.getRecipesByID);
router.delete("/recipe/:id", controllers.deleteRecipesByID);
router.patch("/recipe/:id", controllers.updateRecipesByID);

module.exports = router;