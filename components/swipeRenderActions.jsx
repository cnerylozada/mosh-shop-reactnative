import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "../_commons";
import { palette } from "../styles";

const SwipeRenderActions = () => {
  return (
    <View style={styles.container}>
      <Icon name="home" color="white" size="small" />
    </View>
  );
};

export default SwipeRenderActions;
const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: palette.red,
    justifyContent: "center",
    alignItems: "center",
  },
});
