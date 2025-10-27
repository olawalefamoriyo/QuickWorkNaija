import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/handshake.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "poppins_medium", fontSize: 24 }}>
          Find work or hire in minutes
        </Text>
        <Text style={{ fontFamily: "poppins_regular", fontSize: 16 }}>
          Verified jobs. Instant pay. Zero stress
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          marginBottom: 45,
          width: "100%",
          gap: 20
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#00A6A6",
            width: "100%",
            paddingVertical: 14,
            borderRadius: 13,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("UserType")}
        >
          <Text style={{fontFamily: 'poppins_regular', fontSize: 18, color: 'white'}}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
  },
  image: {
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 40,
  },
  loginText: {
    color: "#FF6D00", // orange color like the screenshot
    fontSize: 16,
    fontWeight: "bold",
  },
});
