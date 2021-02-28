import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AccountOption, Card } from "../components";
import { Avatar, SellerDetail, AppTextInput } from "../_commons";

const LayoutPage = () => {
  return (
    <View style={styles.container}>
      <AppTextInput iconName="home" placeholder="Lets write" />
      <Text></Text>
      <AppTextInput iconName="mail" placeholder="Lets write" />
      <Text></Text>

      <AppTextInput placeholder="Lets write" />
      <Text></Text>

      <AccountOption
        iconName="format-list-bulleted"
        label="my listings"
        theme="red"
      />
      <AccountOption
        iconName="logout"
        label="logout"
        theme="yellow"
        hasChevron
      />
      <Card
        title="Red jacket for sale !"
        subTitle="$100"
        imageUrl="https://i.picsum.photos/id/1036/4608/3072.jpg?hmac=Tn9CS_V7lFSMMgAI5k1M38Mdj-YEJR9dPJCyeXNpnZc"
      />
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
