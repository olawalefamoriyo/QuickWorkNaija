import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import JobCards from "../../../components/JobCards";

export default function Home() {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Nearby" },
    { id: 2, name: "Remote" },
    { id: 3, name: "Most Paying" },
    { id: 4, name: "Recent" },
    { id: 5, name: "Recommended" },
    { id: 6, name: "Trending" },
    { id: 7, name: "Popular" },
  ];

  const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      time: "1 hour ago",
      description: "Build responsive UI with React and Tailwind.",
      price: "₦250,000",
      rating: 4.9,
      reviews: 23,
      urgent: true,
      category: "Remote",
    },
    {
      id: 2,
      title: "Backend Engineer",
      location: "Lagos",
      time: "3 hours ago",
      description: "Work with Node.js and MongoDB for API development.",
      price: "₦300,000",
      rating: 4.7,
      reviews: 15,
      category: "Nearby",
    },
    {
      id: 3,
      title: "Mobile App Developer",
      location: "Remote",
      time: "2 hours ago",
      description: "Create a cross-platform app using React Native.",
      price: "₦400,000",
      rating: 4.8,
      reviews: 30,
      category: "Remote",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      location: "Abuja",
      time: "5 hours ago",
      description: "Design mobile-friendly screens in Figma.",
      price: "₦180,000",
      rating: 4.6,
      reviews: 12,
      urgent: true,
      category: "Trending",
    },
    {
      id: 5,
      title: "Data Analyst",
      location: "Remote",
      time: "1 day ago",
      description: "Analyze datasets using Python and Power BI.",
      price: "₦220,000",
      rating: 4.8,
      reviews: 18,
      category: "Recommended",
    },
    {
      id: 6,
      title: "DevOps Engineer",
      location: "Remote",
      time: "8 hours ago",
      description: "Setup CI/CD pipelines and manage AWS services.",
      price: "₦350,000",
      rating: 4.9,
      reviews: 20,
      category: "Most Paying",
    },
    {
      id: 7,
      title: "QA Tester",
      location: "Lagos",
      time: "6 hours ago",
      description: "Write test cases and ensure bug-free releases.",
      price: "₦150,000",
      rating: 4.4,
      reviews: 10,
      category: "Nearby",
    },
    {
      id: 8,
      title: "Content Writer (Tech)",
      location: "Remote",
      time: "4 hours ago",
      description: "Write blog posts about emerging tech trends.",
      price: "₦100,000",
      rating: 4.5,
      reviews: 8,
      category: "Recent",
    },
    {
      id: 9,
      title: "Product Manager",
      location: "Hybrid",
      time: "1 day ago",
      description: "Lead product roadmap and manage feature delivery.",
      price: "₦500,000",
      rating: 4.9,
      reviews: 16,
      category: "Most Paying",
    },
    {
      id: 10,
      title: "Cybersecurity Specialist",
      location: "Remote",
      time: "2 days ago",
      description: "Audit systems and identify security vulnerabilities.",
      price: "₦450,000",
      rating: 4.8,
      reviews: 14,
      urgent: true,
      category: "Popular",
    },
  ];

  const filteredJobs =
    activeCategory === "All"
      ? jobsData
      : jobsData.filter((job) => job.category === activeCategory);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 30,
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          borderColor: "rgba(0, 0, 0, 0.24)",
          paddingBottom: 11,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 9,
          }}
        >
          <View
            style={{
              width: 31,
              height: 31,
              backgroundColor: "#D9D9D9",
              borderRadius: 31,
            }}
          >
            <Image source={require("../../../../assets/ellipse.png")} style={{width: '100%', height: '100%'}}/>
          </View>
          <View style={{ display: "flex", flexDirection: "col" }}>
            <View style={{ display: "flex", flexDirection: "row", gap: 6 }}>
              <Text
                style={{
                  color: "#FB6619",
                  fontFamily: "poppins_medium",
                  fontSize: 18,
                }}
              >
                Welcome Joy
              </Text>
            </View>
            <Text
              style={{
                color: "#00A6A6",
                fontFamily: "poppins_regular",
                fontSize: 13,
              }}
            >
              Ready to find work today?
            </Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
          <Ionicons name="gift-outline" size={24} color="#FB6619" />
          <Ionicons name="notifications-outline" size={24} color="#00A6A6" />
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 18,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Ionicons name="location-outline" size={16} color="#FB6619" />
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 14,
              color: "#00A6A6",
            }}
          >
            Yaba, lagos
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#34A853",
              borderRadius: 16,
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderWidth: 1,
              borderColor: "#B4B4B4",
            }}
          >
            <Text
              style={{
                fontFamily: "opensans_bold",
                fontSize: 14,
                color: "white",
              }}
            >
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              borderRadius: 16,
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderWidth: 1,
              borderColor: "#B4B4B4",
            }}
          >
            <Text
              style={{
                fontFamily: "opensans_bold",
                fontSize: 14,
                color: "rgba(0, 0, 0, 0.45)",
              }}
            >
              Pidgin
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#414141",
          width: "100%",
          height: 40,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 17,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Ionicons name="megaphone-outline" size={16} color="white" />
        <Text
          style={{ fontFamily: "poppins_medium", fontSize: 13, color: "white" }}
        >
          Shout for work
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 16 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "center",
            gap: 14,
            paddingRight: 20,
          }}
        >
          {categories.map((item) => {
            const isActive = item.name === activeCategory;
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => setActiveCategory(item.name)}
                style={{
                  backgroundColor: isActive ? "#FB6619" : "transparent",
                  borderRadius: 16,
                  paddingHorizontal: 14,
                  paddingVertical: 6,
                  borderWidth: isActive ? 0 : 1,
                  borderColor: "rgba(0,0,0,0.2)",
                }}
              >
                <Text
                  style={{
                    fontFamily: "opensans_bold",
                    fontSize: 14,
                    color: isActive ? "white" : "rgba(0, 0, 0, 0.45)",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 31,
          marginTop: 28,
        }}
        showsVerticalScrollIndicator={false}
      >
        {filteredJobs.map((job) => (
          <JobCards
            key={job.id}
            title={job.title}
            location={job.location}
            time={job.time}
            description={job.description}
            price={job.price}
            rating={job.rating}
            reviews={job.reviews}
            urgent={job.urgent}
            onApply={() => navigation.navigate("JobDetails", { job })}
          />
        ))}

        {filteredJobs.length === 0 && (
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 15,
              color: "#555",
              textAlign: "center",
              marginTop: 30,
            }}
          >
            No jobs found for {activeCategory}.
          </Text>
        )}
      </ScrollView>
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
