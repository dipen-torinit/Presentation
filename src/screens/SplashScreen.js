import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.informationtext}>React Native Demo</Text>
      <Text style={styles.loadingtext}>Loading.....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a6dbf8",
  },
  informationtext: {
    fontSize: 22,
    marginHorizontal: 8,
  },
  loadingtext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff5757",
  },
});
