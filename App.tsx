import React, { useState } from "react";
import { View, Text } from "react-native";

import { useFonts } from "expo-font";

import MealsNavigator from "./src/navigation/MealsNavigator";

export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <MealsNavigator />;
}
