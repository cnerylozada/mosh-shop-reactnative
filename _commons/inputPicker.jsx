import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { palette, iconLibrary } from "../styles";
import Icon from "./icon";

const InputPicker = ({ iconName = iconLibrary.apps, placeholder }) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size="caption" color={"gray"} />
      <View style={styles.data}>
        <Text style={{ color: palette.gray }}>{placeholder}</Text>
      </View>
      <Icon name={iconLibrary.chevronDown} size="caption" color={"gray"} />
    </View>
  );
};

export default InputPicker;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 35,
    alignItems: "center",
    backgroundColor: palette.light,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
  data: {
    flex: 1,
    marginLeft: 5,
  },
});
