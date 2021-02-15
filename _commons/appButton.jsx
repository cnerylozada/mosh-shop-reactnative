import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { palette } from "../styles";
const AppButton = ({ label, color, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.container, { backgroundColor: palette[color] }]}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 20,
  },
  label: {
    textAlign: "center",
    color: palette.white,
    textTransform: "uppercase",
  },
});
