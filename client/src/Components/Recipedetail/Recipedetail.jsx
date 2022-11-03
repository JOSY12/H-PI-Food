/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getrecipe } from "../../actions";
import "./Recipedetail.css";
export default function Recipedetail() {
  var { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  const recipe = useSelector((state) => state.recipe);
  useEffect(() => {
    dispatch(getrecipe(id));
  }, []);

  console.log(recipe);

  return (
    <div className="detailcontainer">
      <ul className="ulgeneral">
        <ul className="detailul">
          <li>
            <img
              className="detailimage"
              src={recipe.image}
              alt="recipeimage"
            ></img>
          </li>
        </ul>
        <ul className="datainfo">
          <li className="detailli">
            <h1 className="detailli"> {recipe.title}</h1>
            <hr></hr>
          </li>

          <li className="detailli">
            <h1 className="detailli">Dish Types:</h1>
            {recipe.dishTypes}
          </li>
          <li className="detailli">
            <h1 className="detailli">HealthScore: </h1>
            {recipe.healthScore}
          </li>

          <li className="detailli">
            <h1 className="detailli">Diets types: </h1>
            {recipe.diets}
          </li>

          <li className="detailli">
            <h1 className="detailli">
              Summary: <hr></hr>
            </h1>
            {recipe.summary}
          </li>

          <br></br>
          <li className="detailli">
            <h1 className="detailli">
              Steps: <hr></hr>
            </h1>
            {recipe.steps}
          </li>
        </ul>
      </ul>
    </div>
  );
}
// Ruta de detalle de receta: debe contener

// [ x] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// [ x] Resumen del plato
// [x ] Nivel de "comida saludable" (health score)
// [x ] Paso a paso
// diets.map((e) => {
//   return <li className="detailli"> {e}</li>;
// });
