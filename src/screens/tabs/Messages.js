import React, { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ChatItem from "../../components/ChatItem";

export default function Messages({navigation}) {
  const [search, setSearch] = useState("");

  const chats = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/women/11.jpg",
      name: "Cynthia O.",
      jobTitle: "Frontend Developer",
      status: "active",
      time: "2:30 PM",
      message: "Hey, have you started the project?",
      delivered: true,
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      name: "James A.",
      jobTitle: "UI Designer",
      status: "pending",
      time: "Yesterday",
      message: "Thanks for the update!",
      delivered: true,
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      name: "Sarah K.",
      jobTitle: "React Developer",
      status: "completed",
      time: "Mon",
      message: "Great work on the last gig!",
      delivered: false,
    },
  ];

  const filteredChats = chats.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.jobTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#F4F4F4", marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 16,
          }}
        >
          <Ionicons name="search-outline" size={18} color="#737373" />
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 8,
              paddingHorizontal: 6,
              fontFamily: "poppins_regular",
              fontSize: 14,
              color: "#000",
            }}
            placeholder="Search messages..."
            placeholderTextColor="#000"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredChats.map((chat) => (
            <ChatItem
              key={chat.id}
              image={chat.image}
              name={chat.name}
              jobTitle={chat.jobTitle}
              status={chat.status}
              time={chat.time}
              message={chat.message}
              delivered={chat.delivered}
              onPress={() =>
                navigation.navigate("ChatScreen", {
                  name: chat.name,
                  image: chat.image,
                })
              }
            />
          ))}
        </ScrollView>
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
});
