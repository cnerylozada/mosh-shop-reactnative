import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { palette, sizes } from "../styles";

const Icon = ({ name, size = "medium", color = "black" }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={sizes[size]}
      color={palette[color]}
    />
  );
};

export default Icon;
