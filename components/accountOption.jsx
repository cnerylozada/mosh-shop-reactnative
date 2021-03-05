import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { iconLibrary } from "../styles";
import { Icon } from "../_commons";

const AccountOption = ({ label, iconName, hasChevron, theme }) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size="small" circled theme={theme} />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {!!hasChevron && (
          <Icon name={iconLibrary.chevronRight} size="small" color="gray" />
        )}
      </View>
    </View>
  );
};

export default AccountOption;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  labelContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    textTransform: "capitalize",
    fontWeight: "800",
  },
});
