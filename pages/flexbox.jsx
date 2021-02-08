import React from "react";
import { StyleSheet, View } from "react-native";

const FlexboxPage = () => {
  return (
    <View style={styles.container}>
      <View
        style={{ width: 100, height: 100, backgroundColor: "tomato" }}
      ></View>
      <View
        style={{ width: 100, height: 200, backgroundColor: "greenyellow" }}
      ></View>
      <View style={{ width: 100, height: 100, backgroundColor: "gold" }}></View>
      <View
        style={{ width: 100, height: 300, backgroundColor: "dodgerblue" }}
      ></View>
    </View>
  );
};

export default FlexboxPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
});
