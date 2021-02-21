import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { palette } from "../styles";
import { AppButton, SellerDetail } from "../_commons";

const ListingDetailPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.cover}
        source={{
          uri:
            "https://images.unsplash.com/photo-1612832021026-375ae70f24bf?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80",
        }}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ marginBottom: 40 }}>
          <Text style={styles.product}>Red jacket</Text>
          <Text style={styles.price}>$100</Text>
        </View>

        <SellerDetail
          imageUrl="https://randomuser.me/api/portraits/women/31.jpg"
          title="mosh hamedani"
          subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <View style={{ marginTop: 20 }}>
          <AppButton color="red" label="Contact Seller" />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    width: "100%",
    height: 240,
    marginBottom: 15,
  },
  product: {
    fontSize: 20,
    fontWeight: "bold",
    color: palette.black,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: palette.red,
  },
});
