import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { saveToStorage } from "../../utils/storage";

export default function Profile() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("Male");
  const [openPicker, setOpenPicker] = useState("");
  const [dob, setDob] = useState({ year: "", month: "", day: "" });
  const [loading, setLoading] = useState(false);

  const options = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "Product Manager",
    "Data Analyst",
    "Data Scientist",
    "Cybersecurity Specialist",
    "Cloud Engineer",
    "DevOps Engineer",
    "Software Tester (QA)",
    "Machine Learning Engineer",
    "Blockchain Developer",
    "Game Developer",
    "IT Support Specialist",
  ];

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
  };

  const handleSelectGender = (selectedGender) => {
    setGender(selectedGender);
  };

  const years = Array.from({ length: 100 }, (_, i) => `${2025 - i}`);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => `${i + 1}`);

  const handleDateSelect = (type, value) => {
    setDob({ ...dob, [type]: value });
    setOpenPicker("");
  };

  const getDisplayText = (type, placeholder) => {
    return dob[type] ? dob[type] : placeholder;
  };

  const getOptions = () => {
    if (openPicker === "year") return years;
    if (openPicker === "month") return months;
    if (openPicker === "day") return days;
    return [];
  };

  const handleSignup = () => {
    const userData = {
      fullName: "John Doe",
      location: "Lagos",
      gender,
      dob,
      skill: selected,
      bio: "Hardworking and passionate about tech.",
      role: "worker",
      phoneNumber: '09123456789'
    };

    setLoading(true);

    setTimeout(async () => {
      await saveToStorage("user", userData);
      setLoading(false);
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("AppNavigation");
    }, 2000);
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
          Profile
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{ flexDirection: "column", gap: 4, marginTop: 34 }}>
            <Text style={{ fontFamily: "poppins_regular", fontSize: 16 }}>
              Full name
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
                shadowColor: "white",
              }}
            >
              <TextInput
                placeholder="Full name"
                keyboardType="default"
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

          <View style={{ flexDirection: "column", gap: 4, marginTop: 15 }}>
            <Text style={{ fontFamily: "poppins_regular", fontSize: 16 }}>
              Location
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
                shadowColor: "white",
              }}
            >
              <TextInput
                placeholder="Location"
                keyboardType="default"
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

          <View style={{ flexDirection: "column", gap: 4, marginTop: 42 }}>
            <Text style={{ fontFamily: "poppins_regular", fontSize: 16 }}>
              Gender
            </Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
              <TouchableOpacity
                onPress={() => handleSelectGender("Male")}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 13,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: gender === "Male" ? "#FB6619" : "white",
                  elevation: 3,
                }}
              >
                <Text
                  style={{
                    fontFamily: "poppins_regular",
                    fontSize: 14,
                    color: gender === "Male" ? "white" : "black",
                  }}
                >
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectGender("Female")}
                activeOpacity={0.7}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 13,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: gender === "Female" ? "#FB6619" : "white",
                  elevation: 3,
                }}
              >
                <Text
                  style={{
                    fontFamily: "poppins_regular",
                    fontSize: 14,
                    color: gender === "Female" ? "white" : "black",
                  }}
                >
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "column", gap: 4, marginTop: 42 }}>
            <Text style={{ fontFamily: "poppins_regular", fontSize: 16 }}>
              Date of Birth
            </Text>

            <View style={{ display: "flex", flexDirection: "row", gap: 17 }}>
              <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() =>
                  setOpenPicker(openPicker === "year" ? "" : "year")
                }
                activeOpacity={0.7}
              >
                <Text
                  style={{ fontSize: 16, color: selected ? "#000" : "#999" }}
                >
                  {getDisplayText("year", "Year")}
                </Text>
                <Ionicons
                  name={openPicker === "year" ? "chevron-up" : "chevron-down"}
                  size={22}
                  color="#555"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownButton}
                activeOpacity={0.7}
                onPress={() =>
                  setOpenPicker(openPicker === "month" ? "" : "month")
                }
              >
                <Text
                  style={{ fontSize: 16, color: selected ? "#000" : "#999" }}
                >
                  {getDisplayText("month", "Month")}
                </Text>
                <Ionicons
                  name={openPicker === "month" ? "chevron-up" : "chevron-down"}
                  size={22}
                  color="#555"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownButton}
                activeOpacity={0.7}
                onPress={() => setOpenPicker(openPicker === "day" ? "" : "day")}
              >
                <Text
                  style={{ fontSize: 16, color: selected ? "#000" : "#999" }}
                >
                  {getDisplayText("day", "Day")}
                </Text>
                <Ionicons
                  name={openPicker === "day" ? "chevron-up" : "chevron-down"}
                  size={22}
                  color="#555"
                />
              </TouchableOpacity>
            </View>

            {openPicker && (
              <View style={styles.dropdownList}>
                <FlatList
                  data={getOptions()}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => handleDateSelect(openPicker, item)}
                    >
                      <Text style={styles.dropdownText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}

            {dob.year && dob.month && dob.day && (
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: "poppins_regular",
                  fontSize: 14,
                  color: "#555",
                }}
              >
                Selected DOB: {dob.day} {dob.month}, {dob.year}
              </Text>
            )}

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

          <View style={{ flexDirection: "column", gap: 4, marginTop: 42 }}>
            <Text style={{ fontFamily: "poppins_regular", fontSize: 16 }}>
              Skill set
            </Text>

            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => setOpen(!open)}
              activeOpacity={0.7}
            >
              <Text style={{ fontSize: 16, color: selected ? "#000" : "#999" }}>
                {selected || "Select your skills"}
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
              Short Bio
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
                shadowColor: "white",
              }}
            >
              <TextInput
                placeholder="Write something about you"
                multiline
                numberOfLines={5}
                keyboardType="default"
                textAlignVertical="top"
                placeholderTextColor="#000"
                style={{
                  flex: 1,
                  paddingVertical: 14,
                  fontSize: 16,
                  minHeight: 120,
                  color: "#000",
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#00A6A6" }]}
          disabled={loading}
          onPress={handleSignup}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Sign up</Text>
          )}
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
    marginTop: 20,
    width: "100%",
    marginBottom: 20,
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
    gap: 14,
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
