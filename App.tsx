import React from "react";

import { enableScreens } from "react-native-screens";

import { useFonts } from "expo-font";

import MealsNavigator from "./src/navigation/MealsNavigator";

enableScreens(false);

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
