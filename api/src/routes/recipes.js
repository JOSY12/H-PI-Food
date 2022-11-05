/* eslint-disable react-hooks/exhaustive-deps */
const { Router } = require("express");
const { Recipe } = require("../db");
const axios = require("axios");

const recipes = Router();
const API_KEY = `ad9da6e060534e168458e3bc391b1d68`;
const API_KEY1 = `07b53d9ba28e42c7980df758189b49de`;

recipes.get("/recipes", async (req, res) => {
  const { title } = req.query;
  try {
    //option1
    // const response = await axios.get(
    //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    // );
    // const resultado = response.data.results.map((recipe) => {
    //   Recipe.findOrCreate({
    //     where: {
    //       title: recipe.title,
    //       summary: recipe.summary.replace(/<[^>]*>?/gm, ""),
    //       image: recipe.image,
    //       diets: recipe.diets,
    //       dishTypes: recipe.dishTypes.join(", "),
    //       healthScore: recipe.healthScore,
    //     steps: e.analyzedInstructions[0]
    //     ? e.analyzedInstructions[0].steps.map((e, i) => `${i + 1}: ${e.step}`)
    //     : ["No existen instrucciones"],
    //     },
    //     // steps:(r.analyzedInstructions && r.analyzedInstructions.steps?r.analyzedInstructions.steps.map(item=>item.step).join("|"):'')
    //     defaults: {
    //       title: recipe.title,
    //       summary: recipe.summary.replace(/<[^>]*>?/gm, ""),
    //       image: recipe.image,
    //       diets: recipe.diets,
    //       dishTypes: recipe.dishTypes.join(", "),
    //       healthScore: recipe.healthScore,
    //       steps: e.analyzedInstructions[0]
    // ? e.analyzedInstructions[0].steps.map((e, i) => `${i + 1}: ${e.step}`)
    // : ["No existen instrucciones"],
    //     },
    //   });
    // });

    //option2
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
    //option3
    // const combined = [...datarecipes, ...localrecipes];

    const localrecipes = await Recipe.findAll();
    if (title) {
      const filterd = localrecipes.filter((e) =>
        e.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
      );
      res.status(200).json(filterd);
    }
    if (!title) {
      res.status(200).json(localrecipes);
    }
  } catch (error) {
    res.status(400).json({ msg: "no recipes or query found " });
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
