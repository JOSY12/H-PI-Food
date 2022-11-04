/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Recipe from "../Recipe/Recipe";
import { getrecipes } from "../../actions";

import "./Diets.css";
export default function Diets() {
  const items = useSelector((state) => state.recipes);
  const [type, setype] = useState();
  const [typed, setyped] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getrecipes());
  }, []);

  function handler(e) {
    setype(e.target.value);
  }
  function handlertyped(e) {
    setyped(e.target.value);
  }
  const filtered =
    !type || type === "all"
      ? items
      : items.filter(
          (e) =>
            e.diets.includes(type.toLocaleLowerCase()) &&
            e.title.toLocaleLowerCase().includes(typed.toLocaleLowerCase())
        );

  return (
    <div>
      <label className="itemfilter">Diet types:</label>
      <select onChange={handler} className="selects" name="type">
        <option value="all">all</option>

        <option value="vegan">vegan</option>
        <option value="dairy free">dairy free</option>
        <option value="Gluten Free">Gluten Free</option>
        <option value="Ketogenic">Ketogenic</option>
        <option value="Lacto ovo Vegetarian">Lacto Vegetarian</option>
        <option value="pescatarian">Pescetarian</option>
        <option value="paleolithic">Paleo</option>
        <option value="fodmap friendly">Low FODMAP</option>
        <option value="Primal">Primal</option>
        <option value="Whole 30">Whole30</option>
      </select>
      <input onChange={handlertyped}></input>
      diets: {filtered.length}
      {filtered.map((e, index) => {
        return (
          <Recipe
            key={index}
            id={e.id}
            title={e.title}
            image={e.image}
            diets={e.diets}
            dishTypes={e.dishTypes}
            healthScore={e.healthScore}
            summary={e.summary}
            steps={e.steps}
          />
        );
      })}
    </div>
  );
}

// Gluten Free
// Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).

// Ketogenic
// The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.

// Vegetarian
// No ingredients may contain meat or meat by-products, such as bones or gelatin.

// Lacto-Vegetarian
// All ingredients must be vegetarian and none of the ingredients can be or contain egg.

// Ovo-Vegetarian
// All ingredients must be vegetarian and none of the ingredients can be or contain dairy.

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
