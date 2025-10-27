import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatItem({
  image,
  name,
  jobTitle,
  status,
  time,
  message,
  delivered,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      }}
    >
      {/* Profile Image */}
      <Image
        source={{ uri: image }}
        style={{
          width: 48,
          height: 48,
          borderRadius: 48,
          marginRight: 10,
        }}
      />

      {/* Message Info */}
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "poppins_medium",
              fontSize: 15,
              color: "black",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 12,
              color: "#737373",
            }}
          >
            {time}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 13,
              color: "#7E7E7E",
            }}
          >
            {jobTitle}
          </Text>
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 12,
              color:
                status === "active"
                  ? "#00A6A6"
                  : status === "pending"
                  ? "#FB6619"
                  : "#737373",
            }}
          >
            {status}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            gap: 4,
          }}
        >
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 13,
              color: "#444",
              flex: 1,
            }}
            numberOfLines={1}
          >
            {message}
          </Text>
          {delivered && (
            <Ionicons name="checkmark-done-outline" size={16} color="#00A6A6" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}