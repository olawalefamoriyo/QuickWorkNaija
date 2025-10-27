import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingsItem = ({
  icon,
  title,
  subtitle,
  bgColor = "#CFEBFF",
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        borderColor: "#E2E2E2",
        borderRadius: 9,
        paddingVertical: 12,
        paddingHorizontal: 7,
        borderWidth: 1,
        backgroundColor: "white",
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 28,
            height: 28,
            backgroundColor: bgColor,
            borderRadius: 28,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name={icon} size={14} color="#000" />
        </View>

        <View style={{ flexDirection: "column", gap: 1 }}>
          <Text
            style={{
              fontFamily: "poppins_medium",
              fontSize: 16,
              color: "black",
            }}
          >
            {title}
          </Text>
          {subtitle ? (
            <Text
              style={{
                fontFamily: "poppins_medium",
                fontSize: 13,
                color: "#7E7E7E",
              }}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsItem;