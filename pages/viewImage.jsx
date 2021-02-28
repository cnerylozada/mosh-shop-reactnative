import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Icon } from "../_commons";
import { iconLibrary, palette } from "../styles";

const btn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 50,
  height: 50,
};

const ViewImagePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <View style={styles.leftBtn}>
          <Icon name={iconLibrary.close} color="white" />
        </View>
        <View style={styles.rightBtn}>
          <Icon name={iconLibrary.trash} color="white" />
        </View>
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
    ...btn,
    backgroundColor: palette.red,
  },
  rightBtn: {
    ...btn,
    backgroundColor: palette.green,
  },
});
