import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { iconLibrary, palette } from "../styles";
import { Icon } from "../_commons";

const themes = {
  red: {
    backgroundColor: palette.red,
  },
  yellow: {
    backgroundColor: palette.yellow,
  },
  green: {
    backgroundColor: palette.green,
  },
};

const AccountOption = ({ label, iconName, hasChevron, theme }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, themes[theme]]}>
        <Icon name={iconName} size="small" color="white" />
      </View>
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
  iconContainer: {
    borderRadius: 40,
    padding: 8,
    marginRight: 10,
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
