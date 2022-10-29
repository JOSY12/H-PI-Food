import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getrecipe } from "../../actions";

export default function Recipedetail() {
  var { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getrecipe(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var recipe = useSelector((state) => state.recipe);

  return (
    <div>
      <ul>
        <li>{recipe.title}</li>

        <li>
          <img src={recipe.image} alt="imagen de receta"></img>
        </li>
        <li>dishTypes: {recipe.dishTypes}</li>
        <li>healthScore: {recipe.healthScore}</li>

        <li>diets: {recipe.diets}</li>
        <li>summary: {recipe.summary}</li>
      </ul>
    </div>
  );
}
// Ruta de detalle de receta: debe contener

// [x ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// [ x] Resumen del plato
// [ x] Nivel de "comida saludable" (health score)
// [x ] Paso a paso
