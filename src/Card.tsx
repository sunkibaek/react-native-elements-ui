import React from "react";
import { Image, ImageProperties, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface ICardProps {
  backgroundImageSource: ImageProperties["source"];
  subTitle: string;
  title: string;
}

const styles = StyleSheet.create({
  backgroundImage: {
    borderRadius: 8
  },
  container: {
    borderRadius: 8,
    height: 280
  },
  gradientBackground: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    bottom: 0,
    height: 120,
    left: 0,
    opacity: 0.3,
    overflow: "hidden",
    position: "absolute",
    right: 0,
    top: 0
  },
  subTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    opacity: 0.7
  },
  textsOnImage: {
    bottom: 0,
    left: 0,
    padding: 16,
    position: "absolute",
    right: 0,
    top: 0
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 6
  }
});

const Card = ({ backgroundImageSource, subTitle, title }: ICardProps) => (
  <View style={styles.container}>
    <Image source={backgroundImageSource} style={styles.backgroundImage} />

    <View style={styles.textsOnImage}>
      <LinearGradient
        colors={["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"]}
        style={styles.gradientBackground}
      />

      <Text style={styles.subTitle}>{subTitle}</Text>

      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default Card;
