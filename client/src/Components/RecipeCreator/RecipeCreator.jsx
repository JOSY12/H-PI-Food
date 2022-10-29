/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createrecipe } from "../../actions";

export default function RecipeCreator() {
  const [inputs, setinputs] = useState({
    title: "",
    summary: "",
    image: "",
    diets: "",
    healthScore: 0,
  });
  const dispatch = useDispatch();
  const sendrecipe = (e) => {
    e.preventDefault();

    if (!inputs.image) {
      inputs.image =
        "http://www.destenaire.com/noaccess/wp-content/uploads/2014/10/8-Oddest-Food-Items-Featured-Image1.png";
    } else if (!inputs.title) {
      alert("titulo de receta necesario");
    } else if (!inputs.healthScore) {
      alert("es necesario el campo comida saludable healthcore ");
    } else {
      dispatch(
        createrecipe(
          inputs.title,
          inputs.summary,
          inputs.image,
          inputs.diets,
          inputs.healthScore
        )
      );
      console.log(inputs);
    }
  };

  const saverecipe = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    setinputs({ ...inputs, [property]: value });
  };
  console.log(inputs);

  return (
    <div>
      <form onSubmit={sendrecipe}>
        <label>title</label>
        <br></br>
        <input
          type={"text"}
          value={inputs.title}
          onChange={saverecipe}
          name="title"
        ></input>
        <br></br>
        <label>recipe url image</label>
        <small> leave blank if dont have url</small>

        <input
          type={"text"}
          value={inputs.image}
          onChange={saverecipe}
          name="image"
        ></input>
        <br></br>
        <label>Recipe details, summary</label>
        <br></br>
        <textarea
          value={inputs.summary}
          onChange={saverecipe}
          name="summary"
          rows="10"
          cols="50"
        ></textarea>
        <br></br>
        <label>health score level</label>

        <input
          type={"number"}
          value={inputs.healthScore}
          name="healthScore"
          onChange={saverecipe}
        ></input>

        <br></br>
        <label>diet type: </label>

        <select onChange={saverecipe} value={inputs.diets} name="diets">
          <option value="vegetarian">vegetarian</option>
          <option value="vegan">vegan</option>
          <option value="dairy free">dairy free</option>
          <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
        </select>
        <br></br>
        <label>steps</label>
        <br></br>
        <textarea
          value={inputs.steps}
          onChange={saverecipe}
          name="steps"
          rows="10"
          cols="50"
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
