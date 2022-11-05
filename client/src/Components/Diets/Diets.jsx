/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import "./Diets.css";
export default function Diets() {
  const diets = [
    {
      diet: "Gluten Free",
      Description:
        "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated",
    },
    {
      diet: "Ketogenic",
      Description:
        "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.",
    },
    {
      diet: "Vegetarian",
      Description:
        "No ingredients may contain meat or meat by-products, such as bones or gelatin.",
    },
    {
      diet: "Lacto Vegetarian",
      Description:
        "All ingredients must be vegetarian and none of the ingredients can be or contain egg.",
    },
    {
      diet: "Ovo Vegetarian",
      Description:
        "All ingredients must be vegetarian and none of the ingredients can be or contain dairy",
    },
    {
      diet: "Vegan",
      Description:
        "No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.",
    },
    {
      diet: "Pescetarian",
      Description:
        "Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.",
    },
    {
      diet: "Paleo",
      Description:
        "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.",
    },
    {
      diet: "Primal",
      Description:
        "Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.",
    },
    {
      diet: "Low FODMAP",
      Description:
        "FODMAP stands for (fermentable oligo-, di-, mono-saccharides and polyols) . Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products)",
    },
    {
      diet: "Whole 30",
      Description:
        "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites",
    },
  ];

  return (
    <div className="divdiet">
      <ol>
        {diets.map((e, i) => {
          return (
            <li key={i} className="info">
              {e.diet}: {e.Description}
              <hr></hr>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

// Gluten Free
//  Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).

// Ketogenic
// The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.

// Vegetarian
// No ingredients may contain meat or meat by-products, such as bones or gelatin.

// Lacto-Vegetarian
// All ingredients must be vegetarian and none of the ingredients can be or contain egg.

// Vegan
// No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.

// Pescetarian
// Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.

// Paleo
// Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.

// Primal
// Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.

// Low FODMAP
// FODMAP stands for "fermentable oligo-, di-, mono-saccharides and polyols". Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products)
