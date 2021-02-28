import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import {
  ViewImagePage,
  WelcomePage,
  LayoutPage,
  ListingDetailPage,
  MessagesPage,
  ListingPage,
  MyAccountPage,
} from "./pages";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LayoutPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
