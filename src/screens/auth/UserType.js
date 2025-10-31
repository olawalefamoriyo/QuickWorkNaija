import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function UserType() {
  const navigation = useNavigation();
  const [activeUserType, setActiveUserType] = useState("worker");
  const handleSelect = (type) => {
    setActiveUserType(type);
  };
  const isActive = (type) => activeUserType === type;
  const handleContinue = () => {
    navigation.navigate("CreateAccount", { user: activeUserType });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
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
          User Type
        </Text>
        <Text
          style={{
            fontFamily: "poppins_regular",
            fontSize: 16,
            color: "#000",
            textAlign: "center",
          }}
        >
          Choose how you want to use the app
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginTop: 42,
        }}
      >
        <Text style={{ fontFamily: "poppins_regular", fontSize: 14 }}>
          Don't worry, this can be changed later.
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleSelect("worker")}
          style={[styles.optionCard, isActive("worker") && styles.activeCard]}
        >
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 32,
              backgroundColor: "#D9D9D9",
            }}
          >
            <Image source={require('../../../assets/work-image.png')} style={{width: 18, height: 18}}/>
          </View>
          <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "opensans_bold", fontSize: 16 }}>
                I need work
              </Text>
              <Ionicons name="arrow-forward" size={24} color="#FB6619" />
            </View>
            <Text
              style={{
                fontFamily: "poppins_regular",
                fontSize: 14,
                color: "black",
              }}
            >
              Find jobs that match your skills
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleSelect("hirer")}
          style={[styles.optionCard, isActive("hirer") && styles.activeCard]}
        >
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 32,
              backgroundColor: "#D9D9D9",
            }}
          >
            <Image source={require('../../../assets/hire-image.png')} style={{width: 18, height: 18}}/>
          </View>
          <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "opensans_bold", fontSize: 16 }}>
                I want to hire
              </Text>
              <Ionicons name="arrow-forward" size={24} color="#FB6619" />
            </View>
            <Text
              style={{
                fontFamily: "poppins_regular",
                fontSize: 14,
                color: "black",
              }}
            >
              Post jobs and find skilled workers
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 173,
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
          onPress={handleContinue}
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
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 20,
    gap: 13,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginTop: 18,
  },
  activeCard: {
    borderColor: "#FB6619",
  },
});
