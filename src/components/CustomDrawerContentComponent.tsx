import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DrawerContentComponentProps,
  DrawerItems,
} from "react-navigation-drawer";
import Colors from "../constants/Colors";

const CustomDrawerContentComponent: React.ComponentType<DrawerContentComponentProps> =
  (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <DrawerItems {...props} activeTintColor={Colors.accent} />
      </SafeAreaView>
    </ScrollView>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerContentComponent;
