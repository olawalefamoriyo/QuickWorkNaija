import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CreateJob() {
  const [showVerified, setShowVerified] = useState(false);
  const [instantMatch, setInstantMatch] = useState(false);
  const [jobType, setJobType] = useState("Remote");
  const [loading, setLoading] = useState(false);

  const handlePostJob = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", "Your job has been posted successfully!");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Create a Job Post</Text>
        <Text style={styles.subtitle}>Post your gig fast fast</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 24 }}
      >
        <View style={styles.formGroup}>
          <Text style={styles.label}>
            Job Title <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            placeholder="e.g. Social Media Manager"
            placeholderTextColor="#000"
            style={styles.input}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>
            Description <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            placeholder="Describe the job details..."
            placeholderTextColor="#000"
            multiline
            numberOfLines={5}
            style={[styles.input, { height: 120, textAlignVertical: "top" }]}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.formGroup, { flex: 1 }]}>
            <Text style={styles.label}>
              Budget (₦) <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              placeholder="e.g. 10,000"
              placeholderTextColor="#000"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
          <View style={{ width: 16 }} />
          <View style={[styles.formGroup, { flex: 1 }]}>
            <Text style={styles.label}>
              Duration <Text style={styles.required}>*</Text>
            </Text>
            <TextInput placeholder="e.g. 3 days" placeholderTextColor="#000" style={styles.input} />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>
            Location <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            placeholder="e.g. Victoria Island, Lagos"
            placeholderTextColor="#000"
            style={styles.input}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Job Type</Text>
          <View style={styles.jobTypeContainer}>
            {["Remote", "Onsite", "One-time", "Ongoing"].map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.jobTypeButton,
                  jobType === type && styles.jobTypeButtonActive,
                ]}
                onPress={() => setJobType(type)}
              >
                <Text
                  style={[
                    styles.jobTypeText,
                    jobType === type && styles.jobTypeTextActive,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.preferencesCard}>
          <Text style={styles.preferencesTitle}>Preferences</Text>

          <View style={styles.preferenceItem}>
            <View>
              <Text style={styles.preferenceTitle}>Instant Match</Text>
              <Text style={styles.preferenceDesc}>
                Auto match with nearby workers
              </Text>
            </View>
            <Switch
              value={instantMatch}
              onValueChange={setInstantMatch}
              thumbColor={instantMatch ? "#FB6619" : "#f4f3f4"}
              trackColor={{ true: "#FB6619", false: "#ccc" }}
            />
          </View>

          <View style={styles.preferenceItem}>
            <View>
              <Text style={styles.preferenceTitle}>Verified Workers Only</Text>
              <Text style={styles.preferenceDesc}>
                Show only trusted profiles
              </Text>
            </View>
            <Switch
              value={showVerified}
              onValueChange={setShowVerified}
              thumbColor={showVerified ? "#FB6619" : "#f4f3f4"}
              trackColor={{ true: "#FB6619", false: "#ccc" }}
            />
          </View>
        </View>

        <View style={styles.noteContainer}>
          <Ionicons name="alert-circle" size={18} color="#FB6619" />
          <Text style={styles.noteText}>
            Posts are auto scanned for fraud or exploit content before going
            live.
          </Text>
        </View>

        <TouchableOpacity style={styles.postButton} onPress={handlePostJob}>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <Text style={styles.postButtonText}>Post Job</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingTop: 30,
    paddingBottom: 30,
  },
  headerContainer: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  title: { fontSize: 18, fontFamily: "poppins_semibold", color: "#000" },
  subtitle: { fontSize: 13, fontFamily: "poppins_regular", color: "#666" },
  formGroup: { marginBottom: 16 },
  label: { fontFamily: "poppins_medium", fontSize: 14, color: "#000" },
  required: { color: "red" },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 6,
    fontFamily: "poppins_regular",
    color: "#000",
  },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  jobTypeContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  jobTypeButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    marginBottom: 10,
  },
  jobTypeButtonActive: {
    backgroundColor: "#FB6619",
    borderColor: "#FB6619",
  },
  jobTypeText: { color: "#555", fontSize: 13 },
  jobTypeTextActive: { color: "#fff" },
  preferencesCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
  },
  preferencesTitle: {
    fontSize: 15,
    fontFamily: "poppins_semibold",
    marginBottom: 10,
  },
  preferenceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  preferenceTitle: {
    fontSize: 13,
    fontFamily: "poppins_medium",
    color: "#000",
  },
  preferenceDesc: {
    fontSize: 11,
    color: "#666",
    fontFamily: "poppins_regular",
  },
  noteContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF9E6",
    borderRadius: 10,
    padding: 10,
    marginTop: 16,
  },
  noteText: {
    marginLeft: 8,
    color: "#333",
    fontFamily: "poppins_regular",
    fontSize: 12,
    flex: 1,
  },
  postButton: {
    backgroundColor: "#FB6619",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 24,
  },
  postButtonText: {
    color: "#fff",
    fontFamily: "poppins_semibold",
    fontSize: 15,
  },
});
