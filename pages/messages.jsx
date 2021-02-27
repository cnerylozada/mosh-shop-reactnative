import React from "react";
import { FlatList, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SellerDetail, Separator } from "../_commons";
import { messagesData } from "../utils";
import { palette } from "../styles";
import { SwipeRenderActions } from "../components";

const MessagesPage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={messagesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={palette.light}
            onPress={() => console.log("message")}
          >
            <Swipeable renderRightActions={() => <SwipeRenderActions />}>
              <SellerDetail
                title={item.title}
                subTitle={item.subTitle}
                imageUrl={item.imageUrl}
              />
            </Swipeable>
          </TouchableHighlight>
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
