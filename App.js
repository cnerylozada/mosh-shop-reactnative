import React from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { FlexboxPage } from "./pages";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlexboxPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
