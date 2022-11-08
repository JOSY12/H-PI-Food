/* eslint-disable react-hooks/exhaustive-deps */
const { Router } = require("express");
const { Recipe, Diet } = require("../db");

///////////////////////////////////////////////////////////////////////////////////////////////
const diets = Router();
diets.get("/diets", async (req, res) => {
  try {
    const diets = [
      "Ketogenic",
      "gluten free",
      "dairy free",
      "lacto ovo vegetarian",
      "vegan",
      "paleolithic",
      "Ovo Vegetarian",
      "primal",
      "whole 30",
      "pescatarian",
      "fodmap friendly",
      "Vegetarian",
      "Lacto vegetarian",
    ];
    const recipe = await Recipe.findAll();
    const filtered = recipe.filter((e) => e.diets.length);

    const combined = [...diets, ...filtered];

    res.status(200).json(combined);
  } catch (error) {
    res.status(400).json({ msg: "no diets found" });
  }
});

// diets.get("/test", async (req, res) => {
//   try {
//     const recipes = await Diet.findAll();

//     res.status(200).json(recipes);
//   } catch (error) {
//     res.status(400).json({ msg: "no diets found" });
//   }
// });
///////////////////////////////////////////////////////////////////////////////////////////////
module.exports = diets;
