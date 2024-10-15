import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { Button } from '@rneui/base';
import { Button, Icon, Avatar } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function Avatars() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.avaArea}>
        <View style={styles.avaDetail}>
          <Avatar
            size={80}
            rounded
            source={{
              uri: "https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <Avatar
            size={80}
            rounded
            source={{
              uri: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <Avatar
            size={80}
            rounded
            source={{
              uri: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View>
        <View style={styles.avaDetail}>
          <Avatar
            size={80}
            rounded
            source={{
              uri: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            title="Bj"
            containerStyle={{ backgroundColor: "grey" }}
          >
            <Avatar.Accessory size={30} />
          </Avatar>
          <Avatar
            size={80}
            rounded
            source={{
              uri: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            title="Bj"
            containerStyle={{ backgroundColor: "grey" }}
          >
            <Avatar.Accessory size={30} />
          </Avatar>
          <Avatar
            size={80}
            rounded
            source={{
              uri: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            title="Bj"
            containerStyle={{ backgroundColor: "grey" }}
          >
            <Avatar.Accessory size={30} />
          </Avatar>
        </View>
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
  avaArea: {
    flexDirection: "column",
    display: "flex",
    gap: 20,
  },
  avaDetail: {
    flexDirection: "row",
    display: "flex",
    gap: "20",
  },
});
