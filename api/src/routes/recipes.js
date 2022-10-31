const { Router } = require("express");
const { Recipe } = require("../db");
const axios = require("axios");
const e = require("express");

const recipes = Router();
const API_KEY = `ad9da6e060534e168458e3bc391b1d68`;
const API_KEY1 = `07b53d9ba28e42c7980df758189b49de`;

recipes.get("/recipes", async (req, res) => {
  try {
    const localrecipes = await Recipe.findAll();
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY1}&addRecipeInformation=true&number=10`
    );
    const datarecipes = response.data.results.map((recipe) => {
      const objectrecipe = {
        id: recipe.id,
        title: recipe.title,
        summary: recipe.summary,
        image: recipe.image,
        diets: recipe.diets,
        dishTypes: recipe.dishTypes,
        healthScore: recipe.healthScore,
      };
      return objectrecipe;
    });
    
    const datacombine = [...datarecipes, ...localrecipes];

    res.status(200).json(datacombine);
  } catch (error) {
    res.status(400).json({ msg: "no recipes found" });
  }
});

recipes.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const getrecipeid = await Recipe.findByPk(id);

    res.status(200).json(getrecipeid);
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
  const { id, title, summary, image, diets, healthScore, dishTypes } = req.body;
  try {
    const newrecipe = await Recipe.create({
      id: id,
      title: title,
      summary: summary,
      image: image,
      diets: diets,
      dishTypes: dishTypes,
      healthScore: healthScore,
    });
    res.status(200).json(newrecipe);
  } catch (error) {
    res.status(400).json({ msg: "no recipe created" });
  }
});
module.exports = recipes;
