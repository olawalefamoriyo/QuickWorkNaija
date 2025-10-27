import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function MyJobs() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Active");

  const jobs = {
    Active: [
      {
        id: 1,
        title: "UI/UX Design",
        description: "Designing mobile app interface for a health startup.",
        status: "Active",
        price: 45000,
        timeAgo: "2 hours ago",
        location: "Yaba, Lagos",
      },
    ],
    Pending: [
      {
        id: 2,
        title: "Backend Development",
        description: "Building APIs for a real estate platform.",
        status: "Pending",
        price: 80000,
        timeAgo: "1 day ago",
        location: "Remote",
      },
    ],
    Completed: [
      {
        id: 3,
        title: "Graphic Design",
        description: "Logo and branding for fashion brand.",
        status: "Completed",
        price: 30000,
        timeAgo: "3 days ago",
        location: "Ikeja, Lagos",
      },
    ],
  };

  const activeColor = "#FB6619";

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Jobs</Text>
        <View style={styles.headerDivider} />

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {["Active", "Pending", "Completed"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={styles.tabItem}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && { color: activeColor, fontFamily: "poppins_semibold" },
                ]}
              >
                {tab}
              </Text>
              {activeTab === tab && <View style={[styles.tabBar, { backgroundColor: activeColor }]} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Jobs List */}
      <ScrollView contentContainerStyle={styles.jobsList}>
        {jobs[activeTab].map((job) => (
          <View key={job.id} style={styles.jobCard}>
            <View style={styles.jobTopRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobDescription}>{job.description}</Text>
              </View>

              {/* Status Badge */}
              <View
                style={[
                  styles.statusBadge,
                  job.status === "Active"
                    ? { backgroundColor: "#FFF3E0", borderColor: "#FB6619" }
                    : job.status === "Pending"
                    ? { backgroundColor: "#FFF9E6", borderColor: "#FBC619" }
                    : { backgroundColor: "#E0F7F7", borderColor: "#00A6A6" },
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    job.status === "Active"
                      ? { color: "#FB6619" }
                      : job.status === "Pending"
                      ? { color: "#FBC619" }
                      : { color: "#00A6A6" },
                  ]}
                >
                  {job.status}
                </Text>
              </View>
            </View>

            {/* Bottom Info */}
            <View style={styles.jobFooter}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>₦{job.price.toLocaleString()}</Text>
              </View>

              <View style={styles.infoRow}>
                <Ionicons name="time-outline" size={14} color="#7E7E7E" />
                <Text style={styles.infoText}>{job.timeAgo}</Text>
              </View>

              <View style={styles.infoRow}>
                <Ionicons name="location-outline" size={14} color="#7E7E7E" />
                <Text style={styles.infoText}>{job.location}</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate("ChatScreen")}>
                <Text style={styles.chatText}>Chat</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F4F4" },

  headerContainer: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    textAlign: "center",
    fontFamily: "poppins_semibold",
    fontSize: 18,
    color: "#000",
  },
  headerDivider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginTop: 12,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  tabItem: { alignItems: "center" },
  tabText: {
    fontFamily: "poppins_regular",
    fontSize: 14,
    color: "#7E7E7E",
  },
  tabBar: {
    height: 2.5,
    width: 40,
    borderRadius: 2,
    marginTop: 4,
  },
  jobsList: { paddingHorizontal: 20, paddingVertical: 20 },

  jobCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },
  jobTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  jobTitle: {
    fontFamily: "poppins_medium",
    fontSize: 15,
    color: "#000",
  },
  jobDescription: {
    fontFamily: "poppins_regular",
    fontSize: 12,
    color: "#7E7E7E",
    marginTop: 2,
  },
  statusBadge: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  statusText: {
    fontFamily: "poppins_medium",
    fontSize: 11,
  },
  jobFooter: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    backgroundColor: "#FFF3E0",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  priceText: {
    fontFamily: "poppins_semibold",
    color: "#FB6619",
    fontSize: 13,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  infoText: {
    fontFamily: "poppins_regular",
    fontSize: 11,
    color: "#7E7E7E",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    gap: 10,
  },
  chatButton: {
    backgroundColor: "#FB6619",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  chatText: {
    color: "white",
    fontFamily: "poppins_medium",
    fontSize: 12,
  },
  cancelButton: {
    backgroundColor: "#FFEAEA",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  cancelText: {
    color: "#E53935",
    fontFamily: "poppins_medium",
    fontSize: 12,
  },
});