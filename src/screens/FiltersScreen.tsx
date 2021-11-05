import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FiltersScreen: NavigationStackScreenComponent = (props) => {
  return (
    <View>
      <Text>Filters Screen</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => ({
  headerTitle: "Filter Meals",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      ></Item>
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({});

export default FiltersScreen;
