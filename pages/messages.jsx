import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { messagesData } from "../utils";
import { SellerDetail } from "../_commons";

const MessagesPage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={messagesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SellerDetail
            title={item.title}
            subTitle={item.subTitle}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </View>
  );
};

export default MessagesPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
