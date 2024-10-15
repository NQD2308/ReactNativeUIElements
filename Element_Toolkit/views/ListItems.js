import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View } from "react-native";
import { Icon, ListItem, Avatar } from "@rneui/themed";
import LinearGradient from "react-native-linear-gradient";

// Danh sách sinh viên mẫu
const students = [
  { mssv: "123456", name: "Nguyen Van A", major: "Công nghệ thông tin" },
  { mssv: "654321", name: "Le Thi B", major: "Kỹ thuật phần mềm" },
  { mssv: "987654", name: "Tran Van C", major: "Hệ thống thông tin" },
  { mssv: "112233", name: "Pham Thi D", major: "Khoa học máy tính" },
  { mssv: "445566", name: "Nguyen Van E", major: "Mạng máy tính" },
  { mssv: "778899", name: "Do Thi F", major: "Công nghệ phần mềm" },
  { mssv: "101112", name: "Bui Van G", major: "Khoa học dữ liệu" },
  { mssv: "131415", name: "Hoang Thi H", major: "Trí tuệ nhân tạo" },
  { mssv: "161718", name: "Ngo Van I", major: "Hệ thống nhúng" },
  { mssv: "192021", name: "Tran Thi J", major: "An toàn thông tin" },
  { mssv: "222324", name: "Nguyen Van K", major: "Kỹ thuật phần mềm" },
  { mssv: "252627", name: "Le Thi L", major: "Công nghệ thông tin" },
  { mssv: "282930", name: "Pham Van M", major: "Mạng máy tính" },
  { mssv: "313233", name: "Do Thi N", major: "Hệ thống thông tin" },
  { mssv: "343536", name: "Nguyen Van O", major: "Khoa học máy tính" },
];

export default function ListItems() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {/* Lặp qua danh sách sinh viên và tạo ListItem cho mỗi sinh viên */}
        {students.map((student, index) => (
          <ListItem key={index} bottomDivider>
            <Icon name="person" />
            <ListItem.Content>
              <ListItem.Title style={styles.title}>
                {student.name}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>
                MSSV: {student.mssv}
              </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.subtitle}>
                Ngành: {student.major}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Nền trắng
    width: "100%",
    paddingTop: 50, // Cách lề trên để tránh bị khuất
  },
  title: {
    color: "#000", // Màu chữ đen
    fontSize: 16, // Kích thước chữ vừa phải
  },
  subtitle: {
    color: "#666", // Màu chữ xám cho phụ đề
    fontSize: 14, // Kích thước chữ nhỏ hơn cho phụ đề
  },
});
