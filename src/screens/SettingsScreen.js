import * as React from "react";
import { View, Button } from "react-native";
import { useDispatch } from "react-redux";
import * as authAction from "../reduxstore/authentication/Actions";

export function SettingsScreen() {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Logout"
        onPress={() => {
          dispatch(authAction.signOut());
        }}
      />
    </View>
  );
}
