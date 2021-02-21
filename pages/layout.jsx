import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "../components";
import { Avatar, SellerDetail } from "../_commons";

const LayoutPage = () => {
  return (
    <View style={styles.container}>
      <Card title="Red jacket for sale !" subTitle="$100" />
      <Avatar
        imageUrl="https://randomuser.me/api/portraits/women/31.jpg"
        size="small"
      />
      <View style={{ backgroundColor: "white", paddingVertical: 15 }}>
        <SellerDetail
          imageUrl="https://randomuser.me/api/portraits/women/31.jpg"
          title="mosh hamedani"
          subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </View>
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
