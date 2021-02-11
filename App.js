import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import Appv4 from "./Appv4";
import Appv5 from "./Appv5";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return <Appv5 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
