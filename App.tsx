import React from "react";
import { enableScreens } from "react-native-screens";
import { useFonts } from "expo-font";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import mealsReducer from "./src/store/reducers/meals";
import MealsNavigator from "./src/navigation/MealsNavigator";

enableScreens(false);

// in typical senarios we would have multiple reducers!
const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
