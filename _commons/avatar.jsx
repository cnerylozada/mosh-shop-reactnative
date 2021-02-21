import React from "react";
import { Image, StyleSheet } from "react-native";

const Avatar = ({ imageUrl, size = "medium" }) => {
  return (
    <Image style={[styles.image, sizes[size]]} source={{ uri: imageUrl }} />
  );
};

export default Avatar;

const sizes = {
  small: {
    width: 70,
    height: 70,
  },
  medium: {
    width: 90,
    height: 90,
  },
  large: {
    width: 110,
    height: 110,
  },
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 60,
  },
});
