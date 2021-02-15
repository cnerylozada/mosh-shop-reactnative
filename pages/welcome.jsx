import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Logo } from "../components";
import { AppButton } from "../_commons";

const WelcomePage = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../styles/images/background.jpg")}
      blurRadius={2}
    >
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          label="login"
          color="red"
          onPress={() => console.log("login")}
        />
        <AppButton label="register" color="green" />
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
    padding: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 40,
  },
  btnContainer: {
    justifyContent: "space-around",
    width: "100%",
    height: "15%",
  },
});
