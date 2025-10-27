import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function JobCards({
  title,
  urgent = false,
  location,
  time,
  description,
  price,
  rating = 4.8,
  reviews = 14,
  onApply = () => {},
}) {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 9,
        paddingVertical: 15,
        paddingHorizontal: 11,
        marginBottom: 15,
      }}
    >
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
            fontSize: 16,
            color: "#FB6619",
          }}
        >
          {title}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
          {urgent && (
            <Text
              style={{
                fontFamily: "poppins_regular",
                fontSize: 11,
                color: "#FB6619",
              }}
            >
              Urgent
            </Text>
          )}
          <Ionicons name="bookmark-outline" size={14} color="#FB6619" />
        </View>
      </View>

      <Text
        style={{
          fontFamily: "poppins_regular",
          fontSize: 14,
          color: "#414141",
          marginTop: 7,
        }}
      >
        {location}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Ionicons name="location-outline" size={15} color="#FB6619" />
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 13,
              color: "#414141",
            }}
          >
            {location}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "poppins_regular",
            fontSize: 13,
            color: "#414141",
          }}
        >
          {time}
        </Text>
      </View>

      <Text
        style={{
          fontFamily: "poppins_regular",
          fontSize: 13,
          color: "#414141",
          marginTop: 6,
        }}
      >
        {description}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 7,
        }}
      >
        <Text
          style={{
            fontFamily: "poppins_medium",
            fontSize: 13,
            color: "#FB6619",
          }}
        >
          {price}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
          <Ionicons name="star" size={15} color="#FBBC05" />
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 11,
              color: "#414141",
            }}
          >
            {rating} ({reviews} reviews)
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={onApply}
        style={{
          backgroundColor: "#7C7C7C",
          borderRadius: 6,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 9,
        }}
      >
        <Text
          style={{
            fontFamily: "poppins_medium",
            fontSize: 14,
            color: "#FFFFFF",
          }}
        >
          Apply
        </Text>
      </TouchableOpacity>
    </View>
  );
}