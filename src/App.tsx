import React from "react";
import { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import NavigationBar from "./NavigationBar";

export default class App extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <NavigationBar />

        <View style={styles.body}>
          <View style={{ borderRadius: 8, height: 280 }}>
            <Image
              source={require("../assets/vegetarian.jpg")}
              style={{ borderRadius: 8 }}
            />

            <View style={styles.textsOnImage}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontWeight: "600",
                  opacity: 0.7
                }}
              >
                START YOUR DAY RIGHT
              </Text>

              <Text
                style={{ fontSize: 24, color: "#FFFFFF", fontWeight: "700" }}
              >
                Breakfast
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    flex: 1,
    justifyContent: "center"
  },
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1
  },
  textsOnImage: {
    bottom: 0,
    left: 0,
    padding: 16,
    position: "absolute",
    right: 0,
    top: 0
  }
});
