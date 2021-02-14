import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Logo } from "../components";
import { palette } from "../styles";

const WelcomePage = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../styles/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={{ width: "100%" }}>
        <View style={styles.login}>
          <Text>Login</Text>
        </View>
        <View style={styles.register}>
          <Text>Register</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 40,
  },
  login: {
    backgroundColor: palette.red,
    padding: 20,
  },
  register: {
    backgroundColor: palette.green,
    padding: 20,
  },
});
