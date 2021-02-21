import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "../components";
import { Avatar } from "../_commons";

const LayoutPage = () => {
  return (
    <View style={styles.container}>
      <Card title="Red jacket for sale !" subTitle="$100" />
      <Avatar
        imageUrl="https://randomuser.me/api/portraits/women/31.jpg"
        size="small"
      />
      <Avatar
        imageUrl="https://randomuser.me/api/portraits/women/31.jpg"
        size="medium"
      />
      <Avatar
        imageUrl="https://randomuser.me/api/portraits/women/31.jpg"
        size="large"
      />
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
