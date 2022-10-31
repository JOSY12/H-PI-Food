const { Router } = require("express");
const { Recipe } = require("../db");

const create = Router();

create.post("/create", async (req, res) => {
  const { id, title, summary, image, diets, healthScore } = req.body;
  try {
    const newrecipe = await Recipe.create({
      id: id,
      title: title,
      summary: summary,
      image: image,
      diets: diets,
      healthScore: healthScore,
      // steps: steps,
    });
    res.json(newrecipe);
  } catch (error) {
    res.status(400).json({ msg: "no recipe created" });
  }
});

module.exports = create;
