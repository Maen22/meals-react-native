import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/Meal";
import MealItem from "../components/MealItem";

const renderMealItem = (
  navigation: StackNavigationProp,
  itemData: ListRenderItemInfo<Meal>
) => {
  return (
    <MealItem
      item={itemData.item}
      onClick={() => {
        navigation.navigate({
          routeName: "MealDetail",
          params: { mealId: itemData.item.id },
        });
      }}
    />
  );
};

const CategoryMealsScreen: NavigationStackScreenComponent = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        renderItem={renderMealItem.bind(this, props.navigation)}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: CATEGORIES.find(
      (category) => category.id === navigation.getParam("categoryId")
    )?.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

export default CategoryMealsScreen;
