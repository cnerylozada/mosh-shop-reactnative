import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Icon } from "../_commons";
import { iconLibrary, palette } from "../styles";

const SwipeRenderActions = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name={iconLibrary.trash} color="white" size="small" />
      </View>
    </TouchableWithoutFeedback>
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
