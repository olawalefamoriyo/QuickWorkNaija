import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function CreateAccount() {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params || {};

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          alignItems: "center",
          marginTop: 30,
          paddingHorizontal: 22,
        }}
      >
        <Text
          style={{
            fontFamily: "poppins_medium",
            fontSize: 24,
            color: "#FB6619",
          }}
        >
          Create Account
        </Text>
        <Text
          style={{
            fontFamily: "poppins_medium",
            fontSize: 18,
            color: "#00A6A6",
          }}
        >
          Join as a {user === "hirer" ? "hirer" : "worker"}
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
          Choose your preferred sign up method to get started
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
            style={{
              flex: 1,
              paddingVertical: 14,
              fontSize: 16,
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
          onPress={() => navigation.navigate("OTP")}
        >
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 18,
              color: "white",
            }}
          >
            Continue
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
            onPress={() => console.log("AppNavigation")}
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

      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          marginBottom: 45,
          width: "100%",
          gap: 20,
          left: 25,
          right: 0,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "poppins_regular",
            fontSize: 13,
            width: "100%",
          }}
        >
          By clicking "Continue" you agree to our{" "}
          <Text style={{ color: "#FB6619" }}>Terms and Privacy Policy</Text>
        </Text>
      </View>
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
