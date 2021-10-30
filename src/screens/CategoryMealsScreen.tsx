import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const CategoryMealsScreen: NavigationStackScreenComponent = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Button
        title="Go to Detail!"
        onPress={() => props.navigation.navigate({ routeName: "MealDetail" })}
      />
      <Button title="Go Back!" onPress={() => props.navigation.pop()} />
    </View>
  );
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
