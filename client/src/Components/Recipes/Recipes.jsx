/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import "./Recipes.css";

import { useSelector } from "react-redux";
import Recipe from "../Recipe/Recipe";

export default function Recipes() {
  const recipes = useSelector((state) => state.recipes);
  const searched = useSelector((state) => state.searched);
  const type = useSelector((state) => state.type);
  const healthScore = useSelector((state) => state.healthScore);
  const order = useSelector((state) => state.order);
  const [h, seth] = useState(healthScore);

  if (h < 50) seth(100);
  if (h > 50) seth(50);
  // const [itemsinpage, setitemsinpage] = useState(10);
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
  //   const index = prevpage * itemsinpage;
  //   if (prevpage <= 0) return;
  //   setitems([...recipes].splice(index, itemsinpage));
  //   setcurrentpage(prevpage);
  // }

  useEffect(() => {}, [recipes, order, searched, healthScore]);
  const filtered =
    !type || type === "all"
      ? recipes.filter(
          (e) =>
            e.title.toLowerCase().includes(searched.toLowerCase()) ||
            e.diets.includes(type.toLowerCase())
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
      {<li>{filtered.length}</li>}
      {filtered?.map((e, index) => {
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

// [x ] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.
