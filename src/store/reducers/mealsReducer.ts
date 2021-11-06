import { AnyAction } from "redux";

import Meal from "../../models/Meal";
import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsActions";

const initalState: AppState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state: AppState = initalState, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const { mealId } = action.payload;
      const mealIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === mealId
      );
      if (mealIndex >= 0) {
        const updatedFavMeals = state.favoriteMeals.filter(
          (meal) => meal.id !== mealId
        );
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const newFavMeal = state.meals.find((meal) => meal.id === mealId);

        return {
          ...state,
          favoriteMeals: [...state.favoriteMeals.concat(newFavMeal!)],
        };
      }
    default:
      return state;
  }
};

export type AppState = {
  meals: Array<Meal>;
  filteredMeals: Array<Meal>;
  favoriteMeals: Array<Meal>;
};

export default mealsReducer;
