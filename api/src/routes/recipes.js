/* eslint-disable react-hooks/exhaustive-deps */
const { Router } = require("express");
const { Recipe } = require("../db");
const axios = require("axios");
const { API_KEY, API_KEY1 } = process.env;
const recipes = Router();
///////////////////////////////////////////////////////////////////////////////////////////////
recipes.get("/recipes", async (req, res) => {
  const { title } = req.query;
  try {
    const localrecipes = await Recipe.findAll();
    if (!localrecipes.length) {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
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
              : ["No existen instrucciones"],
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
              : ["No existen instrucciones"],
          },
        });
      });

      const localrecipes = await Recipe.findAll();
      if (localrecipes.length) {
        res.status(200).json(localrecipes);
      } else {
        res.status(400).json({ msg: "no recipes or query found " });
      }
    } else {
      if (title && localrecipes.length) {
        const filterd = localrecipes.filter((e) =>
          e.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
        );
        res.status(200).json(filterd);
      }
      if (!title) {
        res.status(200).json(localrecipes);
      }
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
