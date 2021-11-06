import React from "react";
import { useSelector } from "react-redux";
import { NavigationStackScreenComponent } from "react-navigation-stack";

import { AppState } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen: NavigationStackScreenComponent = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals: any = useSelector<AppState>(
    (state: any) => state.meals.filteredMeals
  );

  const meals = availableMeals.filter(
    (meal: any) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={meals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: CATEGORIES.find(
      (category) => category.id === navigation.getParam("categoryId")
    )?.title,
  };
};

export default CategoryMealsScreen;
