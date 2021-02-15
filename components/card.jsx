import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { palette } from "../styles";

const Card = ({ imageUrl, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../styles/images/jacket.jpg")}
      />

      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 15,
  },
  title: { color: palette.black },
  subTitle: { color: palette.green },
});
