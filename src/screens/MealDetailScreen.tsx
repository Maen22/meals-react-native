import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetailScreen: React.FC = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
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
