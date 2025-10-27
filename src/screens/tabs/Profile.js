import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import SettingsItem from "../../components/SettingsItem";
import { settingsData } from "../../services/constants";

export default function Profile() {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            await AsyncStorage.removeItem("user");

            navigation.reset({
              index: 0,
              routes: [{ name: "Welcome" }],
            });
          } catch (error) {
            console.error("Error clearing user data:", error);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileRow}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require("../../../assets/ellipse.png")}
            style={styles.avatar}
          />
        </View>
        <View>
          <Text style={styles.userName}>Joy Stacey Ann</Text>
          <Text style={styles.userPhone}>07123456789</Text>
        </View>
      </View>

      {/* Settings List */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ paddingTop: 44 }}
        showsVerticalScrollIndicator={false}
      >
        {settingsData.map((item) => (
          <SettingsItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            bgColor={item.bgColor}
            onPress={() =>
              item.title === "Logout"
                ? handleLogout()
                : navigation.navigate(item.route || "Welcome")
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F4F4",
  },
  header: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
    paddingBottom: 7,
  },
  headerText: {
    color: "#000000",
    fontFamily: "opensans_semibold",
    fontSize: 18,
  },
  profileRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
    alignItems: "center",
  },
  avatarWrapper: {
    width: 30,
    height: 30,
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  userName: {
    fontFamily: "poppins_medium",
    fontSize: 16,
    color: "black",
  },
  userPhone: {
    fontFamily: "poppins_medium",
    fontSize: 13,
    color: "#7E7E7E",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
});