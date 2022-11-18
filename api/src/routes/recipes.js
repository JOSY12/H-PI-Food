/* eslint-disable react-hooks/exhaustive-deps */
const { Router } = require("express");
const { Recipe } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const API_KEY1 = process.env.API_KEY1 || API_KEY;
const recipes = Router();
///////////////////////////////////////////////////////////////////////////////////////////////
recipes.get("/recipes", async (req, res) => {
  // const { title } = req.query;
  const localrecipes = await Recipe.findAll();
  try {
    if (!localrecipes.length || localrecipes.length < 50) {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY1}&addRecipeInformation=true&number=100`
      );
      response.data.results.map((recipe) => {
        Recipe.findOrCreate({
          where: {
            title: recipe.title,
            summary: recipe.summary.replace(/<[^>]*>?/gm, ""),
            image: recipe.image,
            diets: recipe.diets,
            dishTypes: recipe.dishTypes,
            healthScore: recipe.healthScore,
            steps: recipe.analyzedInstructions[0]
              ? recipe.analyzedInstructions[0].steps.map(
                  (recipe, i) => `${i + 1}: ${recipe.step}`
                )
              : ["no instruccions in this recipe"],
          },
          defaults: {
            title: recipe.title,
            summary: recipe.summary.replace(/<[^>]*>?/gm, ""),
            image: recipe.image,
            diets: recipe.diets,
            dishTypes: recipe.dishTypes,
            healthScore: recipe.healthScore,
            steps: recipe.analyzedInstructions[0]
              ? recipe.analyzedInstructions[0].steps.map(
                  (recipe, i) => `${i + 1}: ${recipe.step}`
                )
              : ["no instruccions in this recipe"],
          },
        });
      });

      const localrecipes = await Recipe.findAll();
      if (localrecipes.length) {
        res.status(200).json(localrecipes);
      }
    } else {
      res.status(200).json(localrecipes);
    }
  } catch (error) {
    res.status(400).json({ msg: "no recipes or query found " });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////
recipes.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findByPk(id);

    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ msg: "no recipe by id found" });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////
recipes.post("/recipes", async (req, res) => {
  const { steps, title, summary, image, diets, healthScore, dishTypes } =
    req.body;

  try {
    if ((!title, !summary, !healthScore)) {
      res.status(400).json({ msg: "missing data" });
    }
    const newrecipe = await Recipe.create({
      title: title,
      summary: summary,
      image: image,
      diets: diets,
      steps: steps,
      dishTypes: dishTypes,
      healthScore: healthScore,
    });

    res.status(200).json(newrecipe);
  } catch (error) {
    res.status(400).json({ msg: "no recipe created" });
  }
});
recipes.delete("/recipes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Recipe.destroy({ where: { id: id } });
    const alldata = await Recipe.findAll();

    res.status(200).json(alldata);
  } catch (error) {
    res.status(400).json({ msg: "no recipe delete" });
  }
});
////
module.exports = recipes;
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//opciones de agregar a base de datos utiles

//option2
///?no funciona ya":"??"
// const datarecipes = response?.data.results.map((recipe) => {
//   const objet = {
//     title: recipe.title,
//     summary: recipe.summary,
//     image: recipe.image,
//     diets: recipe.diets,
//    steps: recipe.analyzedInstructions[0]
//   ? recipe.analyzedInstructions[0].steps.map(
//     (recipe , i) => `${i + 1}: ${recipe.step}`
//   )
// : ["No existen instrucciones"],
//     dishTypes: recipe.dishTypes,
//     healthScore: recipe.healthScore,
//   };
//   return objet;
// });

// await Recipe.bulkCreate(datarecipes);
//option3
// const combined = [...datarecipes, ...localrecipes];
