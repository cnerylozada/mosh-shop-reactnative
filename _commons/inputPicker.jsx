import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { palette } from "../styles";
import Icon from "./icon";

const InputPicker = ({ iconName = "apps", placeholder }) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size="caption" color={"gray"} />
      <View style={styles.data}>
        <Text style={{ color: palette.gray }}>{placeholder}</Text>
      </View>
      <Icon name="chevron-down" size="caption" color={"gray"} />
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
