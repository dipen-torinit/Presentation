import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EmployeeListScreen } from "./src/screens/EmployeeListScreen";
import { SettingsScreen } from "./src/screens/SettingsScreen";
import { SplashScreen } from "./src/screens/SplashScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { store } from "./src/reduxstore/Store";
import * as authAction from "./src/reduxstore/authentication/Actions";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { SignupScreen } from "./src/screens/SignupScreen";
import { EmployeeDetailScreen } from "./src/screens/EmployeeDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <AppBase />
    </Provider>
  );
}

function AppBase() {
  const auth = useSelector((state) => state.authenticationReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction.checkIfAlreadySignIn());
  }, []);

  if (auth.isAuthenticating) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {auth.isAuthenticate ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EmployeeListScreen"
        component={EmployeeListScreen}
        options={{ title: "Employees List" }}
      />
      <Stack.Screen
        name="EmployeeDetailScreen"
        component={EmployeeDetailScreen}
        options={{ title: "Employee Detail" }}
      />
    </Stack.Navigator>
  );
}
