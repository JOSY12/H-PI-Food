import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  recipes: [],
  searched: "",
  order: "",
  type: "",
  recipe: {},
  healthScore: "",
};

const recipeSlice = createSlice({
  name: "recipes",
  initialstate,
  reducers: {
    getrecipes: async (state) => {
      const data = await axios.get(`/recipes`);

      state.recipes = data.data;
    },

    getrecipe: async (state, { payload }) => {
      const data = await axios.get(`/recipes/${payload}`);

      state.recipe = data.data;
    },

    createrecipe: async (state, { payload }) => {
      const newrecipe = {
        title: payload.title,
        summary: payload.summary,
        image: payload.image,
        diets: payload.diets,
        healthScore: payload.healthScore,
        dishTypes: payload.dishTypes,
        steps: payload.steps,
      };
      await axios.post("/recipes", newrecipe);
      state.recipes = [...state.recipes, newrecipe];
    },

    getrecipefilter: async (state, { payload }) => {
      state.searched = payload;
    },

    getrecipetype: async (state, { payload }) => {
      state.type = payload;
    },
    filterasc_des: (state, action) => {
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
      state.recipes = recypesByOrder;
      state.order = action.payload;
    },
    getrecipeHealthScore: (state, action) => {},
    horder: async (state, action) => {
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

      state.recipes = recypesByHealthScore;
      state.healthScore = action.payload;
    },
    deleterecipe: async (state, { payload }) => {
      await axios.delete(`/recipes/${payload}`);

      state.recipes = state.recipes.filter((e) => e.id !== payload);
    },
  },
});

///////////////////////////////////////////////////////////////////////////////////////

export const {
  getrecipes,
  getrecipe,
  createrecipe,
  horder,
  deleterecipe,
  getrecipeHealthScore,
  getrecipefilter,
  getrecipetype,
  filterasc_des,
} = recipeSlice.actions;
export default recipeSlice.reducer;
