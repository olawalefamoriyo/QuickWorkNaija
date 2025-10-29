import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

export default function Verification() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  const options = [
    "NIN",
    "Driver's License",
    "Voter's Card",
    "International Passport",
  ];

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30, display: "flex", flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text
          style={{
            color: "#00A6A6",
            fontFamily: "opensans_bold",
            fontSize: 18,
            flex: 1,
            textAlign: "center",
          }}
        >
          Verification
        </Text>
      </View>

      <TouchableOpacity
        onPress={pickImage}
        style={styles.uploadBox}
        activeOpacity={0.8}
      >
        {photo ? (
          <Image
            source={{ uri: photo }}
            style={{ width: "100%", height: "100%", borderRadius: 6 }}
            resizeMode="cover"
          />
        ) : (
          <Text style={{ fontFamily: "poppins_regular", fontSize: 16 }}>
            Tap to upload your photo
          </Text>
        )}
      </TouchableOpacity>

      <View style={{ flexDirection: "column", gap: 4, marginTop: 42 }}>
        <Text style={{ fontFamily: "poppins_regular", fontSize: 16 }}>
          Verification Method
        </Text>

        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setOpen(!open)}
          activeOpacity={0.7}
        >
          <Text style={{ fontSize: 16, color: selected ? "#000" : "#999" }}>
            {selected || "Select verification method"}
          </Text>
          <Ionicons
            name={open ? "chevron-up" : "chevron-down"}
            size={22}
            color="#555"
          />
        </TouchableOpacity>

        {open && (
          <View style={styles.dropdownList}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.dropdownText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>

      <View style={{ flexDirection: "column", gap: 4, marginTop: 34 }}>
        <Text style={{ fontFamily: "poppins_regular", fontSize: 16 }}>
          Enter your {selected || "NIN"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFF",
            borderRadius: 12,
            paddingHorizontal: 13,
            paddingVertical: 5,
            elevation: 3,
            shadowColor: 'white'
          }}
        >
          <TextInput
            placeholder={`Enter your ${selected || "NIN"}`}
            placeholderTextColor="#000"
            keyboardType="default"
            style={{
              flex: 1,
              paddingVertical: 14,
              fontSize: 16,
              color: "#000",
            }}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#00A6A6" }]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Next</Text>
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
  uploadBox: {
    backgroundColor: "#EDEDED",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#000",
    height: 139,
    marginTop: 38,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 49,
    width: "100%",
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 13,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "poppins_regular",
    fontSize: 18,
    color: "white",
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 13,
    paddingVertical: 14,
    shadowColor: "#000",
  },
  dropdownList: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginTop: 5,
    paddingVertical: 4,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  dropdownText: {
    fontSize: 16,
    fontFamily: "poppins_regular",
    color: "#000",
  },
});