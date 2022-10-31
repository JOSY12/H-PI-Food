const { Router } = require("express");
const { Recipe } = require("../db");

const recipes = Router();

recipes.get("/recipes", async (req, res) => {
  try {
    const getallrecipes = await Recipe.findAll();

    res.status(200).json(getallrecipes);
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

module.exports = recipes;
