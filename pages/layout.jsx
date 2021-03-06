import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AccountOption, Card } from "../components";
import {
  Avatar,
  SellerDetail,
  AppTextInput,
  InputPicker,
  Icon,
} from "../_commons";
import { iconLibrary } from "../styles";

const LayoutPage = () => {
  const [option, setOption] = useState();
  const [value, setValue] = useState("my input value");
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(option)}</Text>
      <InputPicker
        placeholder="Category"
        option={option}
        setOption={setOption}
      />

      <Text>{value}</Text>
      <AppTextInput
        iconName={iconLibrary.home}
        placeholder="Lets write"
        value={value}
        onSetValue={setValue}
      />
      <AppTextInput placeholder="Lets write" />
      <Text></Text>

      <AccountOption
        iconName={iconLibrary.list}
        label="my listings"
        theme="red"
      />
      <AccountOption
        iconName={iconLibrary.logout}
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
