import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { palette } from "../styles";

const AppTextInput = ({}) => {
  const [value, setValue] = useState();
  return <TextInput style={styles.container} placeholder="description" />;
};

export default AppTextInput;
const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.light,
    borderRadius: 20,
    padding: 5,
  },
});
