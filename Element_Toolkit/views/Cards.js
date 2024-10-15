import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
// import { Button } from '@rneui/base';
import { Button, Icon, Card, SearchBar } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function Cards() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        <Card>
          <Card.Image
            style={styles.img}
            containerStyle={{
              width: "100%",
              height: 350,
            }}
            source={{
              uri: "https://user-images.githubusercontent.com/5962998/65694309-a825f000-e043-11e9-8382-db0dba0851e3.png",
            }}
          />
          <Card.FeaturedTitle style={styles.title}>
            React Native Elements UI
          </Card.FeaturedTitle>
          <Card.FeaturedSubtitle style={styles.subtitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.FeaturedSubtitle>

          <Text>Price: 199.000 đ</Text>
          <Button size="sm" color="primary" style={{ marginTop: 20 }}>
            Enroll
          </Button>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    color: "#000", // Màu chữ đen
    fontSize: 16, // Kích thước chữ vừa phải
    marginTop: 10,
  },
  subtitle: {
    color: "#666", // Màu chữ xám cho phụ đề
    fontSize: 14, // Kích thước chữ nhỏ hơn cho phụ đề
  },
});
