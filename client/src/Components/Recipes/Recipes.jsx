/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
// , useState
import "./Recipes.css";

import { useSelector } from "react-redux";
import Recipe from "../Recipe/Recipe";

export default function Recipes() {
  const recipes = useSelector((state) => state.recipes);
  const searched = useSelector((state) => state.searched);
  const type = useSelector((state) => state.type);
  // const healthScore = useSelector((state) => state.healthScore);
  const order = useSelector((state) => state.order);
  useEffect(() => {
    console.log("loeaded data");
  }, [order]);
  // const [type, setype] = useState();
  // const [typed, setyped] = useState();

  // function handler(e) {
  //   setype(e.target.value);
  // }
  // function handlertyped(e) {
  //   setyped(e.target.value);
  // }

  // const itemsinpage = 9;
  // const [items, setitems] = useState([...recipes].splice(0, itemsinpage));

  // const [actualpage, setcurrentpage] = useState(0);

  // function nextpage() {
  //   const totalitems = recipes.length;

  //   const nextpage = actualpage + 1;

  //   const index = nextpage * itemsinpage;

  //   if (index >= totalitems) return;

  //   setitems([...recipes].splice(index, itemsinpage));
  //   setcurrentpage(nextpage);
  // }

  // function prevpage() {
  //   const prevpage = actualpage - 1;

  //   if (prevpage <= 0) return;
  //   const index = prevpage * itemsinpage;

  //   setitems([...recipes].splice(index, itemsinpage));
  //   setcurrentpage(prevpage);
  // }
  const filtered =
    !type || type === "all"
      ? recipes.filter((e) =>
          e.title.toLowerCase().includes(searched.toLowerCase())
        )
      : recipes.filter(
          (e) =>
            e.diets.includes(type.toLowerCase()) &&
            e.title.toLowerCase().includes(searched.toLowerCase())
        );

  return (
    <div className="recipegeneral">
      {/* <button onClick={prevpage}>prev</button>
      <button onClick={nextpage}>next</button> */}

      {filtered.map((e, index) => {
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
