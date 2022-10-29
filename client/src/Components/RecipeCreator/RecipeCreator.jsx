import { useState } from "react";

export default function RecipeCreator() {
  const [inputs, setinputs] = useState({});

  const sendrecipe = (e) => {
    e.preventDefault();
  };
  const saverecipe = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setinputs({ ...inputs, [property]: value });
    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={sendrecipe}>
        <label>title</label>
        <br></br>
        <input type={"text"} onChange={saverecipe} name="title"></input>
        <br></br>

        <label>Recipe details, summary</label>
        <br></br>
        <textarea
          onChange={saverecipe}
          name="summary"
          rows="10"
          cols="50"
        ></textarea>
        <br></br>
        <label>health score level</label>

        <input type={"number"} name="healthscore"></input>

        <br></br>
        <label>diet type</label>
        <select onChange={saverecipe} name="diets">
          <option value="vegan" defaultValue={0}>
            vegan
          </option>
          <option value="vegetarian">vegetarian</option>
          <option value="dairy free">dairy free</option>
          <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
        </select>
        <br></br>
        <label>steps</label>
        <br></br>
        <textarea
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
