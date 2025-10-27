import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FindJobCard({ job }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        padding: 14,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#E8E8E8",
      }}
    >
      <Text
        style={{
          fontFamily: "poppins_medium",
          fontSize: 16,
          color: "#000",
          marginBottom: 11,
        }}
      >
        {job.title}
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
        {job.tags.map((tag, idx) => (
          <View
            key={idx}
            style={{
              backgroundColor: tag.color + "20",
              borderColor: tag.color,
              borderWidth: 1,
              borderRadius: 12,
              paddingVertical: 3,
              paddingHorizontal: 8,
              marginRight: 6,
              marginBottom: 6,
            }}
          >
            <Text
              style={{
                color: tag.color,
                fontFamily: "poppins_medium",
                fontSize: 10,
              }}
            >
              {tag.label}
            </Text>
          </View>
        ))}
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
      >
        <Image
          source={{
            uri:
              job.posterImage ||
              "https://randomuser.me/api/portraits/men/40.jpg",
          }}
          style={{ width: 30, height: 30, borderRadius: 30, marginRight: 8 }}
        />
        <View>
          <Text
            style={{
              fontFamily: "poppins_medium",
              fontSize: 13,
              color: "#000",
            }}
          >
            {job.posterName}
          </Text>
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 12,
              color: "#7E7E7E",
            }}
          >
            {job.title}
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontFamily: "poppins_semibold",
          fontSize: 15,
          color: "#FB6619",
          marginBottom: 10,
        }}
      >
        ₦{job.price.toLocaleString()} / day
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="time-outline"
            size={14}
            color="#7E7E7E"
            style={{ marginRight: 4 }}
          />
          <Text style={{ fontSize: 11, color: "#7E7E7E" }}>{job.time}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="location-outline"
            size={14}
            color="#7E7E7E"
            style={{ marginRight: 4 }}
          />
          <Text style={{ fontSize: 11, color: "#7E7E7E" }}>{job.location}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#00A6A6",
          paddingVertical: 8,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: "white", fontFamily: "poppins_medium", fontSize: 13 }}
        >
          Apply Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}
