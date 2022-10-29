/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";

import { getrecipe, getrecipes } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Recipe from "../Recipe/Recipe";

export default function Recipes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getrecipes());
  }, []);

  const recipes = useSelector((state) => state.recipes);

  //   var filteredword = useSelector((state) => state.filter);

  return (
    <div>
      {recipes.map((e, index) => {
        return (
          <Recipe
            key={index}
            id={e.id}
            title={e.title}
            image={e.image}
            diets={e.diets}
            healthScore={e.healthScore}
          />
        );
      })}
    </div>
  );
}
