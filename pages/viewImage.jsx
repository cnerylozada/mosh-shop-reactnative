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
        resizeMode="cover"
      />
    </View>
  );
};

export default ViewImagePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.black,
    padding: 20,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: "70%",
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
