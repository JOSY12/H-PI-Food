import React from "react";
import { Route } from "react-router-dom";

import Nav from "./Components/Nav/Nav";

import Recipes from "./Components/Recipes/Recipes";
import Recipedetail from "./Components/Recipedetail/Recipedetail";

import RecipeCreator from "./Components/RecipeCreator/RecipeCreator";
import Searchbar from "./Components/Searchbar/Searchbar";

export default function App() {
  return (
    <React.Fragment>
      <Nav />
      <Route exact path={"/recipes"}>
        <Searchbar />
      </Route>
      <Route exact path={"/recipes"}>
        <Recipes />
      </Route>

      <Route exact path={"/recipes/:id"}>
        <Recipedetail />
      </Route>

      <Route exact path={"/create"}>
        <RecipeCreator />
      </Route>
    </React.Fragment>
  );
}
