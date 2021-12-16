import * as React from "react";
import { useState } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from "../components/ProgressBar";
import * as authAction from "../reduxstore/authentication/Actions";

export function LoginScreen({ route, navigation }) {
  const auth = useSelector((state) => state.authenticationReducer);
  const dispatch = useDispatch();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputtext}
        placeholder="Enter login ID"
        onChangeText={(text) => {
          setLoginId(text);
        }}
        defaultValue={loginId}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputtext}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
        defaultValue={password}
      />
      {auth.hasError && (
        <Text style={styles.textError}>Please check input</Text>
      )}
      {auth.isLoading && <ProgressBar />}
      <TouchableOpacity
        style={styles.loginbutton}
        onPress={() => {
          dispatch(
            authAction.signIn({ username: loginId, password: password })
          );
        }}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>

      <Button
        style={styles.signupbutton}
        title="Sign Up"
        onPress={() => {
          navigation.navigate("Signup");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a6dbf8",
    padding: 20,
  },
  inputtext: {
    marginBottom: 10,
  },
  loginbutton: {
    alignItems: "center",
    backgroundColor: "#c2edda",
    padding: 10,
  },
  signupbutton: {
    padding: 10,
  },
  textError: {
    color: "#FF0000",
  },
});
