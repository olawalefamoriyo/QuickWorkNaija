import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FindJobCard from "../../../components/FindJobCard";
import { jobData } from "../../../services/constants";

export default function FindJobs() {
  const [jobs, setJobs] = useState(jobData);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30, gap: 8 }}>
        <View style={styles.orangeCircle}>
          <Ionicons name="search" size={15} color="#fff" />
        </View>
        <Text style={{ fontFamily: "opensans_semibold", fontSize: 18 }}>Find Jobs</Text>
      </View>

      <Text style={{ fontFamily: "poppins_regular", fontSize: 12, marginTop: 10 }}>
        No dulling, your next job awaits!
      </Text>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputBox}>
          <Ionicons name="search" size={16} color="#7E7E7E" />
          <TextInput
            placeholder="Search for jobs near you or elsewhere"
            placeholderTextColor="#000"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.sortContainer}>
        <Text style={{ fontFamily: "poppins_medium", fontSize: 13, color: "#000" }}>
          Sort: Newest
        </Text>
        <Ionicons name="chevron-down" size={16} color="#000" />
      </View>
      <View style={styles.divider} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10, paddingBottom: 20 }}>
        {["Local Jobs", "Online & Remote", "Tech Jobs", "Urgent", "Instant Pay"].map(
          (filter, idx) => (
            <TouchableOpacity key={idx} style={styles.filterChip}>
              <Text style={styles.filterText}>{filter}</Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>

      <ScrollView style={{ marginTop: 8 }} showsVerticalScrollIndicator={false}>
        {jobs.map((job) => (
          <FindJobCard key={job.id} job={job} />
        ))}
      </ScrollView>
    </View>
  );
}

// const jobData = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     posterName: "Tunde Adisa",
//     posterImage: "https://randomuser.me/api/portraits/men/20.jpg",
//     price: 10000,
//     time: "1 day ago",
//     location: "Victoria Island, Lagos",
//     tags: [
//       { label: "Verified", color: "#00A6A6" },
//       { label: "Tech", color: "#FB6619" },
//     ],
//   },
//   {
//     id: 2,
//     title: "UI/UX Designer",
//     posterName: "Sarah Ojo",
//     posterImage: "https://randomuser.me/api/portraits/women/22.jpg",
//     price: 15000,
//     time: "2 days ago",
//     location: "Remote",
//     tags: [
//       { label: "Remote", color: "#FACC15" },
//       { label: "Instant Pay", color: "#22C55E" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Mobile App Developer",
//     posterName: "John Doe",
//     price: 20000,
//     time: "3 hours ago",
//     location: "Lekki, Lagos",
//     tags: [
//       { label: "Urgent", color: "#EF4444" },
//       { label: "Verified", color: "#00A6A6" },
//     ],
//   },
// ];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 20,
  },
  orangeCircle: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: "#FB6619",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  searchInputBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#000",
    marginLeft: 6,
    fontFamily: "poppins_regular",
  },
  filterButton: {
    backgroundColor: "#FB6619",
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
  sortContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    gap: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginTop: 8,
  },
  filterChip: {
    backgroundColor: "#fff",
    borderColor: "#E2E2E2",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 8,
    // paddingBottom: 10,
    height: 30
  },
  filterText: {
    fontFamily: "poppins_regular",
    fontSize: 12,
    color: "#7E7E7E",
  },
});