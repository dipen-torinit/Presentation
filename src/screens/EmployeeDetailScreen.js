import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as userAction from "../reduxstore/users/Actions";
import { useEffect } from "react";

import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export function EmployeeDetailScreen({ route }) {
  const { avatar, first_name, last_name, email } = route.params.data;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: avatar,
        }}
      />
      <Text style={styles.nametext}>
        {first_name} {last_name}
      </Text>
      <Text style={styles.emailtext}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#a6dbf8",
  },
  image: {
    width: 200,
    height: 200,
  },
  nametext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff5757",
  },
  emailtext: { color: "blue" },
});
