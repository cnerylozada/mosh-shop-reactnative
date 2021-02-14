import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { palette } from "../styles";

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome page</Text>
    </View>
  );
};

export default WelcomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.green,
  },
});
