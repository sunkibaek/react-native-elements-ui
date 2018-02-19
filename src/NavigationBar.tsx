import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#80CC26",
    height: 140
  },
  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "700"
  },
  titleContainer: {
    marginTop: 88,
    paddingHorizontal: 16
  }
});

const NavigationBar = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />

    <View style={styles.titleContainer}>
      <Text style={styles.title}>Recipes</Text>
    </View>
  </View>
);

export default NavigationBar;
