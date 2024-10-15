import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { Button } from '@rneui/base';
import { Input, Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "column", display: "flex", gap: 30, width: "80%", }}>
        <Button
          title="Solid"
          color="primary"
          size="lg"
          buttonStyle={{borderRadius: 8}}
          onPress={() => navigation.navigate("Inputs")}
        >
          Inputs
        </Button>
        <Button
          title="Solid"
          color="primary"
          size="lg"
          buttonStyle={{borderRadius: 8}}
          onPress={() => navigation.navigate("ButtonCTA")}
        >
          Buttons
        </Button>
    
 
        <Button
          title="Solid"
          color="primary"
          size="lg"
          buttonStyle={{borderRadius: 8}}
          onPress={() => navigation.navigate("ListItems")}
        >
          List items
        </Button>
     
        <Button
          title="Solid"
          color="primary"
          size="lg"
          buttonStyle={{borderRadius: 8}}
          onPress={() => navigation.navigate("Cards")}
        >
          Cards
        </Button>
   
        <Button
          title="Solid"
          color="primary"
          size="lg"
          buttonStyle={{borderRadius: 8}}
          onPress={() => navigation.navigate("Avatars")}
        >
          Avatars
        </Button>
      </View>
    </View>
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
