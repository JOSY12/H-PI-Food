/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./Recipes.css";
import { getrecipes } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Recipe from "../Recipe/Recipe";

export default function Recipes() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const order = useSelector((state) => state.order);
  const searched = useSelector((state) => state.searched);
  const type = useSelector((state) => state.type);
  const HealthScore = useSelector((state) => state.HealthScore);

  function dataloader() {
    if (!recipes.length) {
      dispatch(getrecipes());
      console.log("loaded once ");
    } else {
      console.log("data Loaded Already");
    }
  }
  useEffect(() => {
    dataloader();
  }, [recipes, order, searched, type, HealthScore]);

  return (
    <div className="recipegeneral">
      {recipes.map((e, index) => {
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

// Ruta principal: debe contener

// [ x] Input de búsqueda para encontrar recetas por nombre
// [x ] Área donde se verá el listado de recetas. Deberá mostrar su:
// Imagen
// Nombre
// Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
// [ x] Botones/Opciones para filtrar por por tipo de dieta
// [ x] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por health score (nivel de comida saludable).
// [x ] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.
