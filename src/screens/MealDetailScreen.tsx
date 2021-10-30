import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const MealDetailScreen: NavigationStackScreenComponent = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button
        title="Go Back to Home!"
        onPress={() => props.navigation.popToTop()}
      />
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

export default MealDetailScreen;
