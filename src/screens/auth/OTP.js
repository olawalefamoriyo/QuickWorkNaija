import React, {useState, useRef} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function OTP() {  
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }

    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
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
            fontFamily: "opensans_bold",
            fontSize: 24,
            color: "#00A6A6",
            maxWidth: 180,
            textAlign: "center",
          }}
        >
          Verify your Phone number
        </Text>
        <Text
          style={{
            fontFamily: "poppins_regular",
            fontSize: 16,
            color: "#000000",
            textAlign: "center",
          }}
        >
          We have sent you an SMS with a code to number{" "}
          <Text style={{ fontFamily: "poppins_medium", color: "#FB6619" }}>
            +234 8021345678
          </Text>
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
        <Text
          style={{
            fontFamily: "poppins_regular",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Enter OTP code
        </Text>
        <View style={styles.otpInputs}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.otpBox}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              returnKeyType="done"
            />
          ))}
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
          style={[
            styles.button,
            { backgroundColor: isOtpComplete ? "#00A6A6" : "#7C7C7C" },
          ]}
          disabled={!isOtpComplete}
          onPress={() => navigation.navigate("Verification")}
        >
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 18,
              color: "white",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "poppins_regular",
            fontSize: 16,
            color: "#000000",
            textAlign: "center",
          }}
        >
          You didn't receive a code?{" "}
          <Text style={{ fontFamily: "poppins_medium", color: "#FB6619" }}>
            Resend
          </Text>
        </Text>
      </View>

      <TouchableOpacity
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
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "poppins_regular",
            fontSize: 13,
            width: "100%",
          }}
        >
          Already have an account?
          <Text style={{ color: "#FB6619" }}> Sign in</Text>
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
  otpInputs: {
    flexDirection: "row",
    gap: 28,
    justifyContent: "center",
  },
  otpBox: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderRadius: 6,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 13,
    alignItems: "center",
  },
});
