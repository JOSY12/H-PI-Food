/* eslint-disable react-hooks/exhaustive-deps */
import { Route } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import "./App.css";
import Recipes from "./Components/Recipes/Recipes";
import Diets from "./Components/Diets/Diets";
import Recipedetail from "./Components/Recipedetail/Recipedetail";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getrecipes } from "./actions";
import RecipeCreator from "./Components/RecipeCreator/RecipeCreator";
import Searchbar from "./Components/Searchbar/Searchbar";
import Home from "./Components/Home/Home";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("loeaded data");

    dispatch(getrecipes());
  }, []);
  return (
    <>
      <Route exact path={"/"}>
        <Home />
      </Route>

      <Route path={["/recipes", "/create", "/diets"]}>
        <Nav />
      </Route>
      <Route exact path={"/recipes"}>
        <Searchbar />
      </Route>
      <Route exact path={"/recipes"}>
        <Recipes />
      </Route>
      <Route exact path={"/diets"}>
        <Diets />
      </Route>
      <Route exact path={"/recipes/:id"}>
        <Recipedetail />
      </Route>

      <Route exact path={"/create"}>
        <RecipeCreator />
      </Route>
    </>
  );
}
