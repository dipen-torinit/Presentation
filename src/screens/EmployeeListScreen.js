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
} from "react-native";

export function EmployeeListScreen({ navigation }) {
  const user = useSelector((state) => state.usersReducer);
  const { isLoading, users } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction.getUsers(1));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listcontainer}
            onPress={() => {
              navigation.navigate("EmployeeDetailScreen", { data: item });
            }}
          >
            <Text>
              {item.first_name} {item.last_name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        refreshing={isLoading}
        onRefresh={() => {
          dispatch(userAction.getUsers(2));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listcontainer: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#a6dbf8",
    padding: 15,
    margin: 5,
  },
});
