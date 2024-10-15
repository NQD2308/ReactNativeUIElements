import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// import { Button } from '@rneui/base';
import { Input, Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function Inputs() {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{ width: "95%" }}>
          <Input
            placeholder="Card holder name"
            placeholderTextColor="#3b82f6"
            leftIcon={
              <Icon
                name="person"
                size={24}
                color="#3b82f6"
                errorMessage="ENTER A VALID ERROR HERE"
                errorStyle={{ color: "red" }}
              />
            }
          />
          <Input
            placeholder="Card number"
            placeholderTextColor="#3b82f6"
            leftIcon={
              <Icon
                name="payment"
                size={24}
                color="#3b82f6"
                errorMessage="ENTER A VALID ERROR HERE"
                errorStyle={{ color: "red" }}
              />
            }
          />
          <View style={{ flexDirection: "row", display: "flex", gap: 0 }}>
            <Input
              placeholder="Expiration"
              placeholderTextColor="#3b82f6"
              containerStyle={{ width: "65%" }}
              leftIcon={
                <Icon
                  name="event"
                  size={24}
                  color="#3b82f6"
                  errorMessage="ENTER A VALID ERROR HERE"
                  errorStyle={{ color: "red" }}
                />
              }
            />
            <Input
              placeholder="CVV"
              placeholderTextColor="#3b82f6"
              containerStyle={{ width: "35%" }}
              secureTextEntry={true}
              keyboardType="numeric"
              pattern="\d{3}"
              leftIcon={
                <Icon
                  name="password"
                  size={24}
                  color="#3b82f6"
                  errorMessage="ENTER A VALID ERROR HERE"
                  errorStyle={{ color: "red" }}
                />
              }
            />
          </View>
          <Button
          title="Solid"
          color="primary"
          size="lg"
          buttonStyle={{borderRadius: 8}}
          onPress={() => navigation.navigate("Menu")}
        >
          Back
        </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    width: "80%",
  },
});
