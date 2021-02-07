import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FlexboxPage = () => {
  return (
    <View style={styles.container}>
      <Text>xxx</Text>
    </View>
  );
};

export default FlexboxPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
});
