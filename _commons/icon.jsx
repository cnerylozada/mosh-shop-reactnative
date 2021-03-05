import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { palette, sizes, iconThemes } from "../styles";
import { StyleSheet, View } from "react-native";

const CircleWrapper = ({ name, theme, size }) => {
  return (
    <View style={[styles.iconContainer, iconThemes[theme]]}>
      <Icon name={name} size={size} color="white" />
    </View>
  );
};

const Icon = ({
  name,
  size = "medium",
  color = "black",
  circled = false,
  theme,
}) => {
  return !circled ? (
    <MaterialCommunityIcons
      name={name}
      size={sizes[size]}
      color={palette[color]}
    />
  ) : (
    <CircleWrapper name={name} theme={theme} size={size} />
  );
};

export default Icon;
const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 40,
    padding: 8,
    marginRight: 10,
  },
});
