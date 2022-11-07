/* eslint-disable no-sequences */
/* eslint-disable array-callback-return */
import {
  GET_RECIPE,
  GET_RECIPES,
  CREATE_RECIPE,
  FILTER_RECIPE,
  FILTER_TYPE,
  FILTER_AZ_ZA,
  FILTER_HEALTHCORE,
  DELETERECIPE,
} from "../actions";

const initialstate = {
  recipes: [],
  searched: "",
  order: "",
  type: "",
  recipe: {},
  healthScore: "",
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload };

    case GET_RECIPE:
      return { ...state, recipe: action.payload };

    case CREATE_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };
    case FILTER_RECIPE:
      const filter = action.payload;

      return { ...state, searched: filter };

    case FILTER_TYPE:
      const selectedtype = action.payload;

      return { ...state, type: selectedtype };

    case FILTER_AZ_ZA:
      const recypesByOrder =
        action.payload === "ASC"
          ? state.recipes.sort((a, b) => {
              if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase())
                return 1;
              else return -1;
            })
          : state.recipes.sort((a, b) => {
              if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase())
                return 1;
              else return -1;
            });
      return { ...state, recipes: recypesByOrder, order: action.payload };
    case FILTER_HEALTHCORE:
      const recypesByHealthScore =
        action.payload === "Low To Hight"
          ? state.recipes.sort((a, b) => {
              if (a.healthScore > b.healthScore) return 1;
              else return -1;
            })
          : state.recipes.sort((a, b) => {
              if (a.healthScore < b.healthScore) return 1;
              else return -1;
            });
      return {
        ...state,
        recipes: recypesByHealthScore,
        healthScore: action.payload,
      };
    case DELETERECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((e) => e.id !== action.payload),
      };
    default:
      return { ...state };
  }
};

export default reducer;
