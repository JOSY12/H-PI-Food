/* eslint-disable react-hooks/exhaustive-deps */
const { Router } = require("express");
const { Recipe } = require("../db");
const axios = require("axios");

const recipes = Router();
const API_KEY = `ad9da6e060534e168458e3bc391b1d68`;
const API_KEY1 = `07b53d9ba28e42c7980df758189b49de`;

recipes.get("/recipes", async (req, res) => {
  try {
    // const response = await axios.get(
    //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    // );
    // const resultado = response.data.results.map((recipe) => {
    //   Recipe.findOrCreate({
    //     where: {
    //       title: recipe.title,
    //       summary: recipe.summary,
    //       image: recipe.image,
    //       diets: recipe.diets,
    //       dishTypes: recipe.dishTypes,
    //       healthScore: recipe.healthScore,
    //       steps: recipe.analyzedInstructions.steps,
    //     },
    //     defaults: {
    //       title: recipe.title,
    //       summary: recipe.summary,
    //       image: recipe.image,
    //       diets: recipe.diets,
    //       dishTypes: recipe.dishTypes,
    //       healthScore: recipe.healthScore,
    //       steps: recipe.analyzedInstructions.steps,
    //     },
    //   });
    // });
    ///?no funciona ya":"??"
    // const datarecipes = response?.data.results.map((recipe) => {
    //   const objet = {
    //     title: recipe.title,
    //     summary: recipe.summary,
    //     image: recipe.image,
    //     diets: recipe.diets,
    //     steps: recipe.analyzedInstructions.steps,
    //     dishTypes: recipe.dishTypes,
    //     healthScore: recipe.healthScore,
    //   };
    //   return objet;
    // });

    // await Recipe.bulkCreate(datarecipes);

    const localrecipes = await Recipe.findAll();
    res.status(200).json(localrecipes);
  } catch (error) {
    res.status(400).json({ msg: "no recipes found  " });
  }
});

recipes.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findByPk(id);

    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ msg: "no recipe by id found" });
  }
});

recipes.get("/recipes/?title=:title", async (req, res) => {
  const { title } = req.params;
  try {
    const getrecipe = await Recipe.findAll({ where: { title: title } });

    res.status(200).json(getrecipe);
  } catch (error) {
    res.status(400).json({ msg: "no recipe found" });
  }
});

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
