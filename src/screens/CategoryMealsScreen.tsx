import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen: NavigationStackScreenComponent = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCat = CATEGORIES.find((category) => category.id === catId);

  return (
    <View style={styles.screen}>
      <Text>{selectedCat?.title}</Text>
      <Button
        title="Go to Detail!"
        onPress={() => props.navigation.navigate({ routeName: "MealDetail" })}
      />
      <Button title="Go Back!" onPress={() => props.navigation.pop()} />
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
