import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SellerDetail } from "../_commons";
import { palette } from "../styles";
import { AccountOption } from "../components";
import { myAccountOptions } from "../utils";

const OptionWrapper = ({ children }) => {
  return (
    <View style={{ backgroundColor: palette.white, padding: 12 }}>
      {children}
    </View>
  );
};

const MyAccountPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sellerContainer}>
        <SellerDetail
          title="mosh hamedani"
          subTitle="cnerylozada@gmail.com"
          imageUrl="https://randomuser.me/api/portraits/men/77.jpg"
        />
      </View>

      <View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={myAccountOptions}
          renderItem={({ item }) => (
            <OptionWrapper>
              <AccountOption
                label={item.label}
                iconName={item.iconName}
                theme={item.theme}
                hasChevron={item.hasChevron}
              />
            </OptionWrapper>
          )}
          style={{ marginBottom: 15 }}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
        <OptionWrapper>
          <AccountOption label="log out" iconName="logout" theme="yellow" />
        </OptionWrapper>
      </View>
    </View>
  );
};

export default MyAccountPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.melon,
    paddingVertical: 20,
  },
  sellerContainer: {
    padding: 12,
    backgroundColor: palette.white,
    marginBottom: 30,
  },
  separator: {
    borderTopColor: palette.light,
    borderTopWidth: 2,
  },
});
