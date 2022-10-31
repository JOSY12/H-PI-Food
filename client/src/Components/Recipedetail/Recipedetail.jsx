/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getrecipe } from "../../actions";
import "./Recipedetail.css";
export default function Recipedetail() {
  var { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getrecipe(id));
  }, []);
  const { title, image, dishTypes, healthScore, diets, summary } = useSelector(
    (state) => state.recipe
  );

  return (
    <div>
      <ul>
        <li>{title}</li>

        <li>
          <img src={image} alt="recipeimage"></img>
        </li>
        <li>dishType: {dishTypes}</li>
        <li>healthScore: {healthScore}</li>

        <li>
          diets types:
          {diets}
        </li>

        <li>summary: {summary}</li>
      </ul>
    </div>
  );
}
// Ruta de detalle de receta: debe contener

// [ x] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// [ x] Resumen del plato
// [x ] Nivel de "comida saludable" (health score)
// [x ] Paso a paso
