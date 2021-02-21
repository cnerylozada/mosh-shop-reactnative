import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { palette } from "../styles";
import Avatar from "./avatar";

const SellerDetail = ({ imageUrl, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Avatar imageUrl={imageUrl} size="small" />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default SellerDetail;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  detailContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  title: {
    color: palette.black,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  subTitle: {
    color: palette.gray,
  },
});
