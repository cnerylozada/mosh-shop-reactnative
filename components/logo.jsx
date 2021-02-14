import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../styles/images/logo-red.png")}
      />
      <Text style={styles.text}>sell what you dont need</Text>
    </View>
  );
};

export default Logo;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});
