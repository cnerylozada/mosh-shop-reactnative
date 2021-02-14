import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { palette } from "../styles";
const AppButton = ({ label, color }) => {
  return (
    <TouchableOpacity onPress={() => console.log("app-button")}>
      <View style={[styles.container, { backgroundColor: palette[color] }]}>
        <Text style={styles.label}>{label}</Text>
      </View>
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
