import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { palette } from "../styles";
import Icon from "./icon";

const AppTextInput = ({ iconName, onSetValue, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {!!iconName && <Icon name={iconName} size="caption" color="gray" />}
      <TextInput
        style={!!iconName ? { marginLeft: 5 } : {}}
        onChangeText={(value) => onSetValue(value)}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: palette.light,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
});
