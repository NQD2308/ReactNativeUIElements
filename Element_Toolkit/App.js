import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Button } from '@rneui/base';

import Inputs from "./views/Inputs";
import Menu from "./views/Menu";
import ButtonCTA from "./views/Button";
import ListItems from "./views/ListItems";
import Cards from "./views/Cards";
import Avatars from "./views/Avatar";

// Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Inputs" component={Inputs} />
        <Stack.Screen name="ButtonCTA" component={ButtonCTA} />
        <Stack.Screen name="ListItems" component={ListItems} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="Avatars" component={Avatars} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputAccount: {
    width: "80%"
  }
});
