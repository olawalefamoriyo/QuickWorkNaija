import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";


import Jobs from "./Home";
import JobSearch from "./Jobs";
import Messages from "./Messages";
import Wallet from "./Wallet";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FB6619",
          borderTopWidth: 0,
          paddingHorizontal: 10,
          paddingTop: 10,
          height: 80,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let title;

          switch (route.name) {
            case "Jobs":
              iconName = "home-outline";
              title = "Home";
              break;
            case "JobSearch":
              iconName = "search-outline";
              title = "Find";
              break;
            case "Messages":
              iconName = "chatbubble-outline";
              title = "Chat";
              break;
            case "Wallet":
              iconName = "wallet-outline";
              title = "Wallet";
              break;
            case "Profile":
              iconName = "person-outline";
              title = "Profile";
              break;
          }

          return (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'center',
                backgroundColor: focused ? "#FFF" : "transparent",
                borderRadius: 18,
                paddingHorizontal: focused ? 12 : 0,
                paddingVertical: 4,
                gap: 6,
                minWidth: 71
              }}
            >
              <Ionicons
                name={iconName}
                size={15}
                color={focused ? "#FB6619" : "#FFF"}
                style={{ marginBottom: 0 }} 
              />
              {focused && (
                <Text
                  style={{
                    color: "#FB6619",
                    fontFamily: "poppins_medium",
                    fontSize: 11,
                    textAlign: "center",
                    marginTop: 2
                  }}
                >
                  {title}
                </Text>
              )}
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Jobs" component={Jobs} />
      <Tab.Screen name="JobSearch" component={JobSearch} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}