import React from "react";
import { Component } from "react";
import { Text, View } from "react-native";
import { NavigationStackScreenOptions } from "react-navigation";

export default class Category extends Component {
  public static navigationOptions: NavigationStackScreenOptions = {
    headerStyle: {
      backgroundColor: "#80CC26"
    },
    headerTintColor: "#FFFFFF",
    headerTitle: "Category"
  };

  public render() {
    return (
      <View>
        <Text>Category</Text>
      </View>
    );
  }
}
