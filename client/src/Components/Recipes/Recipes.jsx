/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./Recipes.css";
import { getrecipes } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Recipe from "../Recipe/Recipe";

export default function Recipes() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getrecipes());
  }, [dispatch]);

  return (
    <div className="recipegeneral">
      {recipes?.map((e, index) => {
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
          />
        );
      })}
    </div>
  );
}

// Ruta principal: debe contener

// [ ] Input de búsqueda para encontrar recetas por nombre
// [x ] Área donde se verá el listado de recetas. Deberá mostrar su:
// Imagen
// Nombre
// Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
// [ ] Botones/Opciones para filtrar por por tipo de dieta
// [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por health score (nivel de comida saludable).
// [ ] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.
