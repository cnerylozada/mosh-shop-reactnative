import React from "react";
import { StyleSheet, View } from "react-native";

const FlexboxPage = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1, backgroundColor: "gold" }}></View>
      <View style={{ flex: 3, backgroundColor: "dodgerblue" }}></View>
    </View>
  );
};

export default FlexboxPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
});
