/* eslint-disable no-unused-vars */
import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE = "GET_RECIPE";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_RECIPE = "FILTER_RECIPE";
export const FILTER_TYPE = "FILTER_TYPE";
export const HEALTHSCORE_FILTER = "HEALTHSCORE_FILTER";
export const FILTER_AZ_ZA = "FILTER_AZ_ZA";
export const FILTER_HEALTHCORE = "FILTER_HEALTHCORE";
export const DELETERECIPE = "DELETERECIPE";
///////////////////////////////////////////////////////////////////////////////////////
export const getrecipes = () => {
  return async function (dispatch) {
    const data = await axios.get(`http://localhost:3001/recipes`);

    dispatch({ type: GET_RECIPES, payload: data.data });
  };
};
///////////////////////////////////////////////////////////////////////////////////////
export const getrecipe = (id) => {
  return async function (dispatch) {
    const data = await axios.get(`http://localhost:3001/recipes/${id}`);

    dispatch({ type: GET_RECIPE, payload: data.data });
  };
};
///////////////////////////////////////////////////////////////////////////////////////
export const createrecipe = (
  steps,
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
    steps: steps,
  };
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/recipes",
      newrecipe
    );
    dispatch({ type: CREATE_RECIPE, payload: newrecipe });
  };
};
///////////////////////////////////////////////////////////////////////////////////////
export const getrecipefilter = (searched) => {
  return async function (dispatch) {
    dispatch({ type: FILTER_RECIPE, payload: searched });
  };
};
///////////////////////////////////////////////////////////////////////////////////////
export const getrecipetype = (type) => {
  return async function (dispatch) {
    dispatch({ type: FILTER_TYPE, payload: type });
  };
};
///////////////////////////////////////////////////////////////////////////////////////
export const filterasc_des = (order) => {
  return async function (dispatch) {
    dispatch({ type: FILTER_AZ_ZA, payload: order });
  };
};
///////////////////////////////////////////////////////////////////////////////////////
export const getrecipeHealthScore = (health) => {
  return async function (dispatch) {
    dispatch({ type: HEALTHSCORE_FILTER, payload: health });
  };
};
///////////////////////////////////////////////////////////////////////////////////////
export const horder = (health) => {
  return async function (dispatch) {
    dispatch({ type: FILTER_HEALTHCORE, payload: health });
  };
};
///////////////////////////////////////////////////////////////////////////////////////
export const deleterecipe = (id) => {
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/recipes/${id}`);

    dispatch({ type: DELETERECIPE, payload: id });
  };
};
///////////////////////////////////////////////////////////////////////////////////////
