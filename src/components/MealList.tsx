import React from "react";
import { View, StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

import Meal from "../models/Meal";
import MealItem from "./MealItem";

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

const MealList: React.FC<Props> = (props) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem.bind(this, props.navigation)}
        style={{ width: "100%" }}
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

type Props = {
  listData: Array<Meal>;
  navigation: StackNavigationProp;
};

export default MealList;
