import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Card } from "../components";
import { palette } from "../styles";
import { listingData } from "../utils";

const ListingPage = () => {
  const [products, setProducts] = useState(listingData);
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.imageUrl}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ marginVertical: 10 }}></View>
        )}
      />
    </View>
  );
};

export default ListingPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: palette.melon,
  },
});
