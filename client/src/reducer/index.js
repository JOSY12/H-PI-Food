/* eslint-disable array-callback-return */
import {
  GET_RECIPE,
  GET_RECIPES,
  GET_DIETS,
  CREATE_RECIPE,
  FILTER_RECIPE,
  FILTER_TYPE,
  FILTER_AZ_ZA,
} from "../actions";

const initialstate = {
  recipes: [],

  recipe: {},
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload };

    case GET_RECIPE:
      return { ...state, recipe: action.payload };

    case GET_DIETS:
      return { ...state, diets: action.payload };

    case CREATE_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };
    case FILTER_RECIPE:
      const text = action.payload;
      const filtetitle = !text
        ? state.recipes
        : state.recipes.filter((e) =>
            e.title.toLowerCase().includes(text.toLowerCase())
          );

      //   e.title.toLowerCase().split(" ") ===
      //   action.payload.toLowerCase().split(" ")
      //   }

      return { ...state, recipes: filtetitle };

    case FILTER_TYPE:
      const type =
        !action.payload === "all" && state.recipes
          ? state.recipes
          : state.recipes.filter((e) => e.diets.includes(action.payload));
      return { ...state, recipes: type };
    case FILTER_AZ_ZA:
      const ascedesc =
        action.payload === "ASD"
          ? state.recipes.title.sort((a, b) => a - b)
          : state.recipes.title.sort((a, b) => b - a);

      return { ...state, recipes: ascedesc };
    default:
      return { ...state };
  }
};

export default reducer;
