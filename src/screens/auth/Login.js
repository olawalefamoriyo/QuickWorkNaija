import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login() {
  const navigation = useNavigation();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dummyUsers = [
    {
      id: 1,
      name: "John Worker",
      role: "worker",
      phone: "08012345678",
      password: "1234",
    },
    {
      id: 2,
      name: "Mary Johnson",
      role: "hirer",
      phone: "08087654321",
      password: "5678",
    },
  ];

    const handleLogin = async () => {
    if (!phone || !password) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return;
    }

    setLoading(true);

    setTimeout(async () => {
      const foundUser = dummyUsers.find(
        (u) => u.phone === phone && u.password === password
      );

      if (foundUser) {
        await AsyncStorage.setItem("user", JSON.stringify(foundUser));
        Alert.alert("Welcome Back!", `Hello ${foundUser.name}`);
        // navigation.navigate("AppNavigation");
        navigation.reset({
          index: 0,
          routes: [{ name: "AppNavigation" }],
        });
      } else {
        Alert.alert("Invalid Credentials", "Incorrect phone or password.");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          alignItems: "center",
          marginTop: 50,
          paddingHorizontal: 22,
        }}
      >
        <Text
          style={{
            fontFamily: "poppins_medium",
            fontSize: 18,
            color: "#00A6A6",
          }}
        >
          Login
        </Text>
        <Text
          style={{
            fontFamily: "poppins_regular",
            fontSize: 16,
            color: "#000",
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Hey, Welcome Back
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 17,
          marginTop: 42,
        }}
      >
        <Text style={{ fontFamily: "poppins_regular", fontSize: 14 }}>
          Phone Number
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFF",
            borderRadius: 12,
            paddingHorizontal: 13,
            paddingVertical: 5,
            shadowColor: "#fff",
          }}
        >
          <Ionicons
            name="call-outline"
            size={22}
            color="#000000"
            style={{ marginRight: 8, opacity: 45 }}
          />

          <TextInput
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            placeholderTextColor="#000"
            style={{
              flex: 1,
              paddingVertical: 14,
              fontSize: 16,
              color: "#000",
            }}
          />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 17,
          marginTop: 42,
        }}
      >
        <Text style={{ fontFamily: "poppins_regular", fontSize: 14 }}>
          Password
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFF",
            borderRadius: 12,
            paddingHorizontal: 13,
            paddingVertical: 5,
            shadowColor: "#fff",
          }}
        >
          <Ionicons
            name="lock-closed-outline"
            size={22}
            color="#000000"
            style={{ marginRight: 8, opacity: 45 }}
          />

          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            keyboardType="phone-pad"
            placeholderTextColor="#000"
            style={{
              flex: 1,
              paddingVertical: 14,
              fontSize: 16,
              color: "#000",
            }}
          />
        </View>
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 49,
          width: "100%",
          gap: 20,
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
          onPress={handleLogin}
          disabled={loading}
        >
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 18,
              color: "white",
            }}
          >
            {loading ? "Please wait..." : "Login"}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 37,
            marginTop: 17,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#000000",
              opacity: 35,
            }}
          ></View>
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 18,
              color: "black",
            }}
          >
            Or
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#000000",
              opacity: 35,
            }}
          ></View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 9,
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#000000",
              width: "100%",
              paddingVertical: 14,
              borderRadius: 13,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              gap: 21,
            }}
            onPress={() => console.log("Get Started pressed")}
          >
            <Image source={require("../../../assets/apple_logo_white.png")} />
            <Text
              style={{
                fontFamily: "poppins_regular",
                fontSize: 18,
                color: "white",
              }}
            >
              Continue with Apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#848484",
              width: "100%",
              paddingVertical: 14,
              borderRadius: 13,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              gap: 21,
            }}
            onPress={() => console.log("Get Started pressed")}
          >
            <Image source={require("../../../assets/google_logo.png")} />
            <Text
              style={{
                fontFamily: "poppins_regular",
                fontSize: 18,
                color: "white",
              }}
            >
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: 20,
          paddingTop: 30
        }}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "poppins_regular",
            fontSize: 13,
            width: "100%",
          }}
        >
          Don't have an account?
          <Text style={{ color: "#FB6619" }}> Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F4F4",
  },
});
