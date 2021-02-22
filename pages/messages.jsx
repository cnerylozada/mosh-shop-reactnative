import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { messagesData } from "../utils";
import { SellerDetail, Separator } from "../_commons";

const MessagesPage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={messagesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SellerDetail
            title={item.title}
            subTitle={item.subTitle}
            imageUrl={item.imageUrl}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

export default MessagesPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
