import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { ViewImagePage, WelcomePage, LayoutPage } from "./pages";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
