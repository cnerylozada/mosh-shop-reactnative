import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { listingData } from "../utils";

const ListingPage = () => {
  const [products, setProducts] = useState(listingData);
  return (
    <View style={styles.container}>
      <FlatList data={products} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default ListingPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
