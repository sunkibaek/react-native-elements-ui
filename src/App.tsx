import React from "react";
import { Component } from "react";
import { FlatList, FlatListProperties, StyleSheet, View } from "react-native";

import Card from "./Card";
import NavigationBar from "./NavigationBar";

interface IRecipe {
  backgroundImageSource: any;
  key: string;
  subTitle: string;
  title: string;
}
const recipes: IRecipe[] = [
  {
    backgroundImageSource: require("../assets/breakfast.jpg"),
    key: "breakfast",
    subTitle: "START YOUR DAY RIGHT",
    title: "Breakfast"
  },
  {
    backgroundImageSource: require("../assets/vegetarian.jpg"),
    key: "vegetarian",
    subTitle: "POWER VEGETABLE",
    title: "Vegetarian"
  }
];

export default class App extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <NavigationBar />

        <FlatList
          ItemSeparatorComponent={this.renderItemSeperator}
          contentContainerStyle={styles.body}
          data={recipes}
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  private renderItem: FlatListProperties<IRecipe>["renderItem"] = ({
    item
  }) => (
    <Card
      backgroundImageSource={item.backgroundImageSource}
      subTitle={item.subTitle}
      title={item.title}
    />
  );

  private renderItemSeperator: FlatListProperties<
    IRecipe
  >["ItemSeparatorComponent"] = () => <View style={styles.cardSeperator} />;
}

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 16
  },
  cardSeperator: {
    height: 16
  },
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1
  }
});
