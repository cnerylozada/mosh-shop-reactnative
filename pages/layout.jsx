import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "../components";

const LayoutPage = () => {
  return (
    <View style={styles.container}>
      <Card title="Red jacket for sale !" subTitle="$100" />
    </View>
  );
};

export default LayoutPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 16,
  },
});
