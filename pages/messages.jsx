import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SellerDetail, Separator } from "../_commons";
import { messagesData, refreshMessagesData } from "../utils";
import { palette } from "../styles";
import { SwipeRenderActions } from "../components";

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    setMessages((_) => [..._, ...messagesData]);
  }, []);

  const deleteItem = (id) => {
    setMessages((_) => _.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={palette.light}
            onPress={() => console.log("message")}
          >
            <Swipeable
              renderRightActions={() => (
                <SwipeRenderActions onPress={() => deleteItem(item.id)} />
              )}
            >
              <SellerDetail
                title={item.title}
                subTitle={item.subTitle}
                imageUrl={item.imageUrl}
              />
            </Swipeable>
          </TouchableHighlight>
        )}
        ItemSeparatorComponent={() => <Separator />}
        refreshing={refreshing}
        onRefresh={() => setMessages((_) => [...refreshMessagesData, ..._])}
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
