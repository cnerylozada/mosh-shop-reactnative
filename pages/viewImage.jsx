import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { palette } from "../styles";

const ViewImagePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <View style={styles.leftBtn}></View>
        <View style={styles.rightBtn}></View>
      </View>
      <Image
        style={styles.image}
        source={require("../styles/images/chair.jpg")}
      />
    </View>
  );
};

export default ViewImagePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.black,
  },
  image: {
    width: 100,
    height: 100,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  leftBtn: {
    width: 40,
    height: 40,
    backgroundColor: palette.red,
  },
  rightBtn: {
    width: 40,
    height: 40,
    backgroundColor: palette.green,
  },
});
