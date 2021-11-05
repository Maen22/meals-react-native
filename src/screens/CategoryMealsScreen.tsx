import React from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen: NavigationStackScreenComponent = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

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
