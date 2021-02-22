import React from "react";
import { StyleSheet, View } from "react-native";
import { palette } from "../styles";

const Separator = () => {
  return <View style={styles.container}></View>;
};

export default Separator;
const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    borderWidth: 0.5,
    borderColor: palette.light,
  },
});
