import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Logo } from "../components";
import { palette } from "../styles";

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../styles/images/background.jpg")}
      >
        <View style={{ marginTop: 40 }}>
          <Logo />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.login}>
            <Text>Login</Text>
          </View>
          <View style={styles.register}>
            <Text>Register</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  login: {
    backgroundColor: palette.red,
    padding: 20,
  },
  register: {
    backgroundColor: palette.green,
    padding: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
