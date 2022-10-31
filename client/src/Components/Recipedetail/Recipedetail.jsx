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
  }, [dispatch]);
  const { title, image, dishTypes, healthScore, diets, summary } = useSelector(
    (state) => state.recipe
  );
  console.log(summary);
  return (
    <div className="detailcontainer">
      <ul className="detailul">
        <li className="detailli">{title}</li>

        <li className="detailli">
          <img className="detailimage" src={image} alt="recipeimage"></img>
        </li>
        <li className="detailli">dishType: {dishTypes}</li>
        <li className="detailli">healthScore: {healthScore}</li>

        <li className="detailli">
          diets types:
          {diets}
        </li>

        <li className="detailli">summary: {summary}</li>
      </ul>
    </div>
  );
}
// Ruta de detalle de receta: debe contener

// [ x] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// [ x] Resumen del plato
// [x ] Nivel de "comida saludable" (health score)
// [x ] Paso a paso
