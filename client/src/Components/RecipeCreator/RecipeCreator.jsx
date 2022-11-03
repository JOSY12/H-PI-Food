/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./RecipeCreator.css";
import { createrecipe } from "../../actions";

export default function RecipeCreator() {
  const dispatch = useDispatch();

  const [inputs, setinputs] = useState({
    title: "",
    summary: "",
    image: "",
    diets: [],
    dishTypes: [],
    healthScore: 0,
    steps: "",
  });

  function diets(e) {
    if (!inputs.diets.includes(e.target.value)) {
      inputs.diets.push(e.target.value);
    }
  }
  function dishTypes(e) {
    if (!inputs.dishTypes.includes(e.target.value)) {
      inputs.dishTypes.push(e.target.value);
    }
  }
  function sendrecipe(e) {
    e.preventDefault();

    if (!inputs.summary || !inputs.title) {
      alert("complete the recipe title,summary");
    } else {
      dispatch(
        createrecipe(
          inputs.steps,
          inputs.title,
          inputs.summary,
          inputs.image,
          inputs.diets,
          inputs.healthScore,
          inputs.dishTypes
        )
      );

      console.log(inputs);
      alert("recipe created");
    }
  }

  function saverecipe(e) {
    if (!inputs.image) {
      inputs.image =
        "http://www.destenaire.com/noaccess/wp-content/uploads/2014/10/8-Oddest-Food-Items-Featured-Image1.png";
    }
    const property = e.target.name;
    const value = e.target.value;

    setinputs({ ...inputs, [property]: value });
  }
  console.log(inputs);
  return (
    <div className="recipecreator">
      <form className="inputsform" onSubmit={sendrecipe}>
        <label className="formlabel">title</label>
        <input
          className="inputs"
          type={"text"}
          value={inputs.title}
          onChange={saverecipe}
          name="title"
        ></input>
        <label className="formlabel">
          recipe url image <small> leave blank if dont have url</small>
        </label>
        <input
          className="inputs"
          type={"text"}
          value={inputs.image}
          onChange={saverecipe}
          name="image"
        ></input>
        <label className="formlabel">Recipe details, summary</label>
        <textarea
          type="text"
          className="inputs"
          value={inputs.summary}
          placeholder="recipe summary..."
          onChange={saverecipe}
          name="summary"
          rows="10"
          cols="50"
        ></textarea>
        <label className="formlabel">
          health score level: {inputs.healthScore}
        </label>
        <input
          onChange={saverecipe}
          name="healthScore"
          value={inputs.healthScore}
          className="inputs"
          type="range"
          min="0"
          max="100"
        ></input>

        {/* <input
          className="inputs"
          type={"number"}
          value={inputs.healthScore}
          name="healthScore"
          onChange={saverecipe}
        ></input> */}
        <label className="formlabel">diet type: </label>
        <select
          onClick={diets}
          className="inputs"
          multiple
          onChange={diets}
          value={inputs.diets}
          name="diets"
        >
          <option value="vegan">vegan</option>
          <option value="dairy free">dairy free</option>
          <option value="Gluten Free">Gluten Free</option>
          <option value="Ketogenic">Ketogenic</option>
          <option value="Lacto ovo Vegetarian">Lacto Vegetarian</option>

          <option value="Pescetarian">Pescetarian</option>
          <option value="Paleolithic">Paleo</option>
          <option value="fodmap friendly">Low FODMAP</option>
          <option value="Primal">Primal</option>
          <option value="Whole 30">Whole30</option>
        </select>
        <label className="formlabel">dish Type: </label>
        <select
          className="inputs"
          multiple
          onChange={dishTypes}
          value={inputs.dishTypes}
          name="dishTypes"
        >
          <option value="lunch">lunch</option>
          <option value="main course">main course</option>
          <option value="main dish">main dish</option>
          <option value="side dish">side dish</option>
          <option value="salad">salad</option>
          <option value="soup">soup</option>
          <option value="dinner">dinner</option>
        </select>
        <label className="formlabel">steps</label>
        <textarea
          value={inputs.steps}
          onChange={saverecipe}
          name="steps"
          rows="10"
          cols="50"
          type="text"
          className="inputs"
          placeholder="recipe steps"
        ></textarea>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}

// Ruta de creación de recetas: debe contener
// [ ] Un formulario controlado con JavaScript con los siguientes campos:
// Nombre
// Resumen del plato
// Nivel de "comida saludable" (health score)
// Paso a paso
// [ x] Posibilidad de seleccionar/agregar uno o más tipos de dietas
// [x ] Botón/Opción para crear una nueva receta

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
