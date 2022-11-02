/* eslint-disable no-unused-vars */
import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE = "GET_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_RECIPE = "FILTER_RECIPE";
export const FILTER_TYPE = "FILTER_TYPE";

export const FILTER_AZ_ZA = "FILTER_AZ_ZA";
export const getrecipes = () => {
  return async function (dispatch) {
    const data = await axios.get(`http://localhost:3001/recipes`);

    console.log(data.data + "recipes data front ");
    dispatch({ type: GET_RECIPES, payload: data.data });
  };
};

export const getrecipe = (id) => {
  return async function (dispatch) {
    const data = await axios.get(`http://localhost:3001/recipes/${id}`);

    console.log(data.data + "id data front ");
    dispatch({ type: GET_RECIPE, payload: data.data });

    // const response = await axios.get(
    //   `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    // );
    // dispatch({ type: GET_RECIPE, payload: response.data });
  };
};

export const createrecipe = (
  title,
  summary,
  image,
  diets,
  healthScore,
  dishTypes
) => {
  const newrecipe = {
    title: title,
    summary: summary,
    image: image,
    diets: diets,
    healthScore: healthScore,
    dishTypes: dishTypes,
  };
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/recipes",
      newrecipe
    );
    dispatch({ type: CREATE_RECIPE, payload: newrecipe });
  };
};

export const getrecipefilter = (searched) => {
  return async function (dispatch) {
    console.log(searched + " filter");
    dispatch({ type: FILTER_RECIPE, payload: searched });
  };
};

export const getrecipetype = (type) => {
  return async function (dispatch) {
    console.log(type + " type");

    dispatch({ type: FILTER_TYPE, payload: type });
  };
};

export const filterasc_des = (type) => {
  return async function (dispatch) {
    console.log(type + " type");

    dispatch({ type: FILTER_AZ_ZA, payload: type });
  };
};
