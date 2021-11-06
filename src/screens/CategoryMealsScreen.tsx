import React from "react";
import { useSelector } from "react-redux";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { View, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefautlText from "../components/DefaultText";

const CategoryMealsScreen: NavigationStackScreenComponent = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals: any = useSelector(
    (state: any) => state.meals.filteredMeals
  );

  const meals = availableMeals.filter(
    (meal: any) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (meals.length === 0) {
    return (
      <View style={styles.fallback}>
        <DefautlText>No meals found, maybe check your filters?</DefautlText>
      </View>
    );
  }

  return <MealList listData={meals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: CATEGORIES.find(
      (category) => category.id === navigation.getParam("categoryId")
    )?.title,
  };
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
});

export default CategoryMealsScreen;
