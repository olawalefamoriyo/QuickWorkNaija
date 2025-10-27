import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function WorkerHome() {
  const userName = "Olawale";
  const navigation = useNavigation();

  const activeGigs = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Build and maintain a responsive React website.",
      status: "In Progress",
      price: 50000,
      timeAgo: "4 hours ago",
      location: "Lekki, Lagos",
    },
    {
      id: 2,
      title: "UI Design",
      description: "Design a modern mobile app interface for a fintech app.",
      status: "Completed",
      price: 40000,
      timeAgo: "1 day ago",
      location: "Remote",
    },
  ];

  const stats = {
    active: 2,
    completed: 10,
    total: 12,
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.welcomeText}>Welcome, {userName} 👋</Text>
            <Text style={styles.subText}>Who you wan hire?</Text>
          </View>
          <TouchableOpacity style={styles.bellButton} onPress={() => navigation.navigate("CreateJob")}>
            <Ionicons name="add-outline" size={18} color="#FB6619" />
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{stats.active}</Text>
            <Text style={styles.statLabel}>Active Jobs</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{stats.completed}</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{stats.total}</Text>
            <Text style={styles.statLabel}>Total Jobs</Text>
          </View>
        </View>
      </View>

      <View style={styles.activeGigsContainer}>
        <Text style={styles.sectionTitle}>Active Gigs</Text>

        {activeGigs.map((gig) => (
          <View key={gig.id} style={styles.gigCard}>
            <View style={styles.gigHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.gigTitle}>{gig.title}</Text>
                <Text style={styles.gigDescription}>{gig.description}</Text>
              </View>
              <View
                style={[
                  styles.statusBadge,
                  gig.status === "In Progress"
                    ? { backgroundColor: "#FFF3E0", borderColor: "#FB6619" }
                    : gig.status === "Completed"
                    ? { backgroundColor: "#E0F7F7", borderColor: "#00A6A6" }
                    : { backgroundColor: "#E5E5E5", borderColor: "#737373" },
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    gig.status === "In Progress"
                      ? { color: "#FB6619" }
                      : gig.status === "Completed"
                      ? { color: "#00A6A6" }
                      : { color: "#737373" },
                  ]}
                >
                  {gig.status}
                </Text>
              </View>
            </View>

            <View style={styles.gigFooter}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>₦{gig.price.toLocaleString()}</Text>
              </View>

              <View style={styles.infoRow}>
                <Ionicons name="time-outline" size={14} color="#7E7E7E" />
                <Text style={styles.infoText}>{gig.timeAgo}</Text>
              </View>

              <View style={styles.infoRow}>
                <Ionicons name="location-outline" size={14} color="#7E7E7E" />
                <Text style={styles.infoText}>{gig.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  header: {
    backgroundColor: "#FB6619",
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 45,
  },
  welcomeText: {
    color: "white",
    fontFamily: "poppins_semibold",
    fontSize: 18,
  },
  subText: {
    color: "white",
    fontFamily: "poppins_regular",
    fontSize: 13,
    marginTop: 4,
  },
  bellButton: {
    width: 34,
    height: 34,
    backgroundColor: "white",
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 25,
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontFamily: "poppins_semibold",
    fontSize: 16,
    color: "#000",
  },
  statLabel: {
    fontFamily: "poppins_regular",
    fontSize: 12,
    color: "#7E7E7E",
  },
  divider: {
    width: 1,
    backgroundColor: "#E0E0E0",
  },
  activeGigsContainer: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  sectionTitle: {
    fontFamily: "poppins_semibold",
    fontSize: 16,
    marginBottom: 12,
    color: "#000",
  },
  gigCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },
  gigHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  gigTitle: {
    fontFamily: "poppins_medium",
    fontSize: 15,
    color: "#000",
  },
  gigDescription: {
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
  gigFooter: {
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
});