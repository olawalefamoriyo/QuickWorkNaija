import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ChatScreen({ route }) {
  const navigation = useNavigation();
  const { name = "Cynthia O.", image } = route?.params || {};

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! Have you started the frontend job?",
      sender: "other",
      time: "2:30 PM",
    },
    {
      id: 2,
      text: "Yes, I've started already. Should be done by tomorrow.",
      sender: "me",
      time: "2:32 PM",
    },
    {
      id: 3,
      text: "Nice! Don't forget to push updates tonight.",
      sender: "other",
      time: "2:33 PM",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: message,
      sender: "me",
      time: "Now",
    };
    setMessages((prev) => [...prev, newMsg]);
    setMessage("");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F4F4F4" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          paddingVertical: 12,
          paddingHorizontal: 14,
          elevation: 2,
          paddingTop: 30,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#FB6619" />
        </TouchableOpacity>

        <Image
          source={{
            uri: image || "https://randomuser.me/api/portraits/women/11.jpg",
          }}
          style={{
            width: 38,
            height: 38,
            borderRadius: 38,
            marginHorizontal: 8,
          }}
        />

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "poppins_medium",
              fontSize: 15,
              color: "#000",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 12,
              color: "#00A6A6",
            }}
          >
            Online
          </Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="call-outline" size={22} color="#00A6A6" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1, padding: 16, paddingHorizontal: 24 }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={{
              alignSelf: msg.sender === "me" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "me" ? "#FB6619" : "white",
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 12,
              borderTopLeftRadius: msg.sender === "me" ? 12 : 2,
              borderTopRightRadius: msg.sender === "me" ? 2 : 12,
              marginBottom: 10,
              maxWidth: "80%",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 2,
              elevation: 1,
            }}
          >
            <Text
              style={{
                color: msg.sender === "me" ? "white" : "#000",
                fontFamily: "poppins_regular",
                fontSize: 14,
              }}
            >
              {msg.text}
            </Text>
            <Text
              style={{
                alignSelf: "flex-end",
                fontSize: 10,
                color: msg.sender === "me" ? "#fff" : "#999",
                marginTop: 3,
              }}
            >
              {msg.time}
            </Text>
          </View>
        ))}
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderTopWidth: 1,
            borderColor: "#EAEAEA",
          }}
        >
          <TouchableOpacity>
            <Ionicons name="happy-outline" size={22} color="#737373" />
          </TouchableOpacity>

          <TextInput
            style={{
              flex: 1,
              marginHorizontal: 8,
              paddingVertical: 6,
              fontFamily: "poppins_regular",
              fontSize: 14,
              color: "#000",
            }}
            placeholder="Type a message..."
            placeholderTextColor="#999"
            value={message}
            onChangeText={setMessage}
          />

          <TouchableOpacity style={{ marginRight: 8 }}>
            <Ionicons name="attach-outline" size={22} color="#737373" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSend}
            style={{
              backgroundColor: "#FB6619",
              padding: 8,
              borderRadius: 8,
            }}
          >
            <Ionicons name="send" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}