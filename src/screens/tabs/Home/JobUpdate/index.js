import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function JobUpdate() {
  const navigation = useNavigation();
  const stages = ["Applied", "Accepted", "In Progress", "Completed", "Paid"];
  const [currentStage, setCurrentStage] = useState(2);
  const [updates, setUpdates] = useState([
    {
      id: 1,
      title: "Work Started",
      description: "Work don start! Remember to complete before deadline.",
      icon: "briefcase-outline",
      color: "#FB6619",
      time: "2 hours ago",
    },
  ]);

  const getStageStatus = () => {
    const current = stages[currentStage];
    switch (current) {
      case "Applied":
        return {
          label: "Applied",
          sub: "Your application has been sent 🚀",
          color: "#00A6A6",
          button: "Mark as Accepted",
        };
      case "Accepted":
        return {
          label: "Accepted",
          sub: "You’ve been accepted for the job! 🎉",
          color: "#00A6A6",
          button: "Start Work",
        };
      case "In Progress":
        return {
          label: "In Progress",
          sub: "Work don start! - Keep it going 👍",
          color: "#FB6619",
          button: "Mark as Completed",
        };
      case "Completed":
        return {
          label: "Completed",
          sub: "Great job! Awaiting payment 💰",
          color: "#34A853",
          button: "Mark as Paid",
        };
      case "Paid":
        return {
          label: "Paid",
          sub: "You’ve been paid 🎉 — nice work!",
          color: "#025B5B",
          button: null,
        };
      default:
        return {};
    }
  };

  const stageInfo = getStageStatus();

  const addUpdate = (title, description, icon, color) => {
    const newUpdate = {
      id: updates.length + 1,
      title,
      description,
      icon,
      color,
      time: "Just now",
    };
    setUpdates([newUpdate, ...updates]);
  };

  const handleNextStage = () => {
    if (currentStage < stages.length - 1) {
      const nextStage = currentStage + 1;
      setCurrentStage(nextStage);

      // Automatically create stage-based update
      const stage = stages[nextStage];
      if (stage === "Accepted") {
        addUpdate(
          "Application Accepted",
          "You’ve been accepted for this job! 🎉",
          "checkmark-circle-outline",
          "#00A6A6"
        );
      } else if (stage === "In Progress") {
        addUpdate(
          "Work Started",
          "Work don start! Remember to complete before deadline.",
          "briefcase-outline",
          "#FB6619"
        );
      } else if (stage === "Completed") {
        addUpdate(
          "Work Completed",
          "Nice one! You’ve marked the job as done ✅",
          "clipboard-outline",
          "#34A853"
        );
      } else if (stage === "Paid") {
        addUpdate(
          "Payment Received",
          "You’ve been paid successfully 💰",
          "cash-outline",
          "#025B5B"
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: "#EBEBEB", padding: 6 }}
        >
          <Ionicons name="chevron-back" size={24} color="#FB6619" />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            flex: 1,
            color: "#FB6619",
            fontFamily: "poppins_medium",
            fontSize: 16,
          }}
        >
          Job Details
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 20, flex: 1}}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
            gap: 4,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontFamily: "poppins_medium",
              fontSize: 16,
            }}
          >
            Frontend Developer
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 15,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#000",
                fontFamily: "poppins_regular",
                fontSize: 13,
              }}
            >
              Posted by Cyntia O.
            </Text>
            <View
              style={{
                backgroundColor: "rgba(0, 166, 166, 0.25)",
                paddingHorizontal: 5,
                paddingVertical: 4,
                borderRadius: 6,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Ionicons name="checkbox" size={16} color="#34A853" />
              <Text
                style={{
                  color: "#025B5B",
                  fontFamily: "poppins_regular",
                  fontSize: 13,
                }}
              >
                Verified Employer
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 9,
              marginTop: 12,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontFamily: "poppins_medium",
                fontSize: 16,
              }}
            >
              N40,000
            </Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 6 }}>
              <View
                style={{
                  backgroundColor: "#737373",
                  width: 6,
                  height: 6,
                  borderRadius: 6,
                  marginTop: 7,
                }}
              ></View>
              <Text
                style={{
                  color: "#000",
                  fontFamily: "poppins_regular",
                  fontSize: 13,
                }}
              >
                2 days
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Ionicons name="location-outline" color="#FB6619" size={16} />
              <Text
                style={{
                  color: "#000",
                  fontFamily: "poppins_regular",
                  fontSize: 13,
                }}
              >
                Ikeja Lagos
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              backgroundColor: "white",
              borderRadius: 11,
              paddingTop: 15,
              paddingBottom: 28,
              paddingHorizontal: 12,
              marginTop: 28,
            }}
          >
            <Text style={{ fontFamily: "poppins_medium", fontSize: 16 }}>
              Job Progress
            </Text>
            <View
              style={{ marginTop: 20, alignItems: "center", display: "flex" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  position: "relative",
                }}
              >
                {stages.map((stage, index) => {
                  const isCompleted = index < currentStage;
                  const isActive = index === currentStage;
                  const isLast = index === stages.length - 1;

                  return (
                    <React.Fragment key={index}>
                      <View style={{ alignItems: "center" }}>
                        {isCompleted ? (
                          <Ionicons
                            name="checkmark-circle"
                            size={24}
                            color="#00A6A6"
                          />
                        ) : isActive ? (
                          <View
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: 9,
                              backgroundColor: "#737373",
                            }}
                          />
                        ) : (
                          <View
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: 9,
                              borderWidth: 2,
                              borderColor: "#737373",
                              backgroundColor: "white",
                            }}
                          />
                        )}
                      </View>

                      {!isLast && (
                        <View
                          style={{
                            flex: 1,
                            height: 2,
                            backgroundColor:
                              index < currentStage ? "#00A6A6" : "#D9D9D9",
                            marginHorizontal: 4,
                          }}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: 8,
                }}
              >
                {stages.map((stage, index) => (
                  <Text
                    key={index}
                    style={{
                      fontFamily: "poppins_regular",
                      fontSize: 11,
                      color:
                        index <= currentStage
                          ? "#00A6A6"
                          : "rgba(0, 0, 0, 0.45)",
                      textAlign: "center",
                    }}
                  >
                    {stage}
                  </Text>
                ))}
              </View>
            </View>
          </View>

          <View
            style={[
              styles.statusBox,
              { borderColor: stageInfo.color || "#FB6619" },
            ]}
          >
            <View style={styles.statusHeader}>
              <View
                style={{
                  backgroundColor: stageInfo.color,
                  width: 8,
                  height: 8,
                  borderRadius: 8,
                }}
              ></View>
              <Text style={{ fontFamily: "poppins_medium", fontSize: 16 }}>
                {stageInfo.label}
              </Text>
            </View>
            <Text style={styles.statusSub}>{stageInfo.sub}</Text>

            {stageInfo.button && (
              <TouchableOpacity
                style={[styles.actionBtn, { backgroundColor: stageInfo.color }]}
                onPress={handleNextStage}
              >
                <Text style={styles.actionText}>{stageInfo.button}</Text>
              </TouchableOpacity>
            )}
          </View>

          <View
            style={{
              display: "flex",
              backgroundColor: "white",
              borderRadius: 11,
              paddingTop: 15,
              paddingBottom: 28,
              paddingHorizontal: 12,
              marginTop: 28,
            }}
          >
            <Text style={{ fontFamily: "poppins_medium", fontSize: 16 }}>
              Updates
            </Text>

            {updates.map((item) => (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  gap: 7,
                  marginTop: 12,
                  borderBottomWidth: 1,
                  borderColor: "rgba(115, 115, 115, 0.24)",
                  paddingBottom: 8,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    backgroundColor: "rgba(115, 115, 115, 0.2)",
                    borderRadius: 24,
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name={item.icon} size={16} color={item.color} />
                </View>
                <View style={{ flex: 1, gap: 2 }}>
                  <Text
                    style={{
                      fontFamily: "poppins_medium",
                      fontSize: 15,
                      color: "#737373",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "poppins_regular",
                      fontSize: 13,
                      color: "rgba(115, 115, 115, 0.65)",
                    }}
                  >
                    {item.description}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "poppins_regular",
                      fontSize: 12,
                      color: "rgba(115, 115, 115, 0.45)",
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 0,
          display: "flex",
          width: "100%",
          flexDirection: "column",
          backgroundColor: "#F4F4F4",
          paddingHorizontal: 24,
          paddingBottom: 30,
          gap: 7,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#00A6A6",
            borderRadius: 6,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 9,
            display: "flex",
            flexDirection: "row",
            gap: 7,
          }}
          onPress={() => navigation.navigate("ChatScreen")}
        >
          <Ionicons name="chatbubble-outline" color="#FFFFFF" />
          <Text
            style={{
              fontFamily: "poppins_medium",
              fontSize: 14,
              color: "#FFFFFF",
            }}
          >
            Chat with Employer
          </Text>
        </TouchableOpacity>

        <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderRadius: 6,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 9,
              display: "flex",
              flexDirection: "row",
              gap: 7,
              borderColor: "#EA4335",
              borderWidth: 1,
              flex: 1,
            }}
          >
            <Text
              style={{
                fontFamily: "poppins_medium",
                fontSize: 14,
                color: "#EA4335",
              }}
            >
              Report Issue
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderRadius: 6,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 9,
              display: "flex",
              flexDirection: "row",
              gap: 7,
              borderColor: "#414141",
              borderWidth: 1,
              flex: 1,
            }}
          >
            <Ionicons name="receipt" color="#000000" />
            <Text
              style={{
                fontFamily: "poppins_medium",
                fontSize: 14,
                color: "#000000",
              }}
            >
              View Contract
            </Text>
          </TouchableOpacity>
        </View>
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
  stageLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
  },
  statusBox: {
    backgroundColor: "white",
    borderRadius: 11,
    paddingTop: 15,
    paddingBottom: 11,
    paddingHorizontal: 12,
    marginTop: 28,
    borderWidth: 1,
  },
  statusHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  statusSub: {
    fontFamily: "poppins_medium",
    fontSize: 15,
    color: "#737373",
    marginTop: 4,
  },
  actionBtn: {
    borderRadius: 6,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  actionText: {
    fontFamily: "poppins_medium",
    fontSize: 14,
    color: "#FFFFFF",
  },
});
