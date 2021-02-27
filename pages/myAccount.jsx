import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SellerDetail } from "../_commons";
import { palette } from "../styles";
import { AccountOption } from "../components";

const MyAccountPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sellerContainer}>
        <SellerDetail
          title="mosh hamedani"
          subTitle="cnerylozada@gmail.com"
          imageUrl="https://randomuser.me/api/portraits/men/77.jpg"
        />
      </View>
      <View style={{ backgroundColor: palette.white, padding: 8 }}>
        <AccountOption label="log out" iconName="logout" theme="yellow" />
      </View>
    </View>
  );
};

export default MyAccountPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.melon,
    paddingVertical: 20,
  },
  sellerContainer: {
    padding: 12,
    backgroundColor: palette.white,
  },
});
