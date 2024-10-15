import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { Button } from '@rneui/base';
import { Button, Icon, LinearGradient } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function ButtonCTA() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.btnArea}>
        <Button size="lg" color="secondary">Secondary
        </Button>
        <Button size="lg" color="warning">
          Warning
        </Button>
        <Button size="lg" color="error">
          Error
        </Button>
        <Button title="Solid" disabled />
        <Button title="Outline" type="outline" disabled />
        <Button
              title="Log in"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => console.log('aye')}
            />
        <Button
              title="HOME"
              icon={{
                name: 'home',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
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
  btnArea: {
    flexDirection: "column",
    display: "flex",
    gap: 20,
  },
});
