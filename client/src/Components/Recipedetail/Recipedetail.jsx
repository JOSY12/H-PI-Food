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
  console.log(diets);
  return (
    <div className="detailcontainer">
      <ul className="ulgeneral">
        <ul className="detailul">
          <li>
            <img className="detailimage" src={image} alt="recipeimage"></img>
          </li>
        </ul>
        <ul className="datainfo">
          <li className="detailli">
            {" "}
            <h1> {title}</h1>
          </li>
          <li className="detailli">
            <h1 className="detailli">dishTypes :</h1>
            {dishTypes.map((e) => {
              return <li className="detailli"> {e}</li>;
            })}
          </li>
          <li className="detailli">healthScore: {healthScore}</li>
          <li className="detailli">
            <h1 className="detailli">diets types: </h1>

            {diets.map((e) => {
              return <li className="detailli"> {e}</li>;
            })}
          </li>
          <li className="detailli">summary: {summary}</li>
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
// })
