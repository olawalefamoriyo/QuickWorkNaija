import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function JobDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { job } = route.params || {};

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
      
      <ScrollView contentContainerStyle={{paddingBottom: 20}} showsVerticalScrollIndicator={false}>
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
          {job?.title}
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
            {job.price}
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
              {job.location}
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 11,
            marginTop: 10,
          }}
        >
          <View
            style={{
              borderRadius: 14,
              backgroundColor: "#E4E4E4",
              paddingVertical: 6,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "poppins_regular",
                color: "#FB6619",
                fontSize: 13,
              }}
            >
              10km away
            </Text>
          </View>
          <View
            style={{
              borderRadius: 14,
              backgroundColor: "#00A6A6",
              paddingVertical: 6,
              paddingHorizontal: 7,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "poppins_regular",
                color: "#FFFFFF",
                fontSize: 11,
              }}
            >
              Instant pay available
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
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "poppins_medium", fontSize: 16 }}>
              {job?.title}
            </Text>
            {job?.iurgent && (
            <View
              style={{
                borderRadius: 14,
                backgroundColor: "#FFFCEA",
                paddingVertical: 6,
                paddingHorizontal: 21,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "poppins_regular",
                  color: "#FB6619",
                  fontSize: 13,
                }}
              >
                {job?.urgent}
              </Text>
            </View>
            )}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 40,
              marginTop: 18,
              marginBottom: 8,
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
              <Ionicons name="time-outline" size={14} color="#737373" />
              <Text
                style={{
                  fontFamily: "poppins_regular",
                  fontSize: 14,
                  color: "#737373",
                }}
              >
                2-day job
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "poppins_regular",
                fontSize: 14,
                color: "#737373",
              }}
            >
              Fixed Rate
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "poppins_regular",
              fontSize: 14,
              color: "#737373",
            }}
          >
            {job?.description}
          </Text>
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 7,
              marginBottom: 7,
            }}
          >
            <View
              style={{
                width: 42,
                height: 42,
                backgroundColor: "#D9D9D9",
                borderRadius: 31,
              }}
            >
              <Image
                source={require("../../../../../assets/ellipse.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Text style={{ fontFamily: "poppins_medium", fontSize: 16 }}>
                Cynthia O.
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 7,
                  alignItems: "center",
                }}
              >
                <Ionicons name="star" color="#FBBC05" size={18} />
                <Text style={{ fontFamily: "poppins_regular", fontSize: 16 }}>
                  {job?.rating}
                </Text>
                <Text style={{ fontFamily: "poppins_regular", fontSize: 14 }}>
                  {job?.reviews}
                </Text>
              </View>
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
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#737373",
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
              See Employer Profile
            </Text>
          </TouchableOpacity>
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
            Job Description
          </Text>
          <Text style={{ fontFamily: "poppins_regular", fontSize: 13, color: '#414141' }}>
            {job.description}
          </Text>
        </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#00A6A6",
              borderRadius: 6,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 9,
            }}
            onPress={() => navigation.navigate("JobUpdate")}
          >
            <Text
              style={{
                fontFamily: "poppins_medium",
                fontSize: 14,
                color: "#FFFFFF",
              }}
            >
              Apply for This work
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
              borderColor: '#00A6A6',
              borderWidth: 1
            }}
            onPress={() => navigation.navigate("ChatScreen")}
          >
            <Text
              style={{
                fontFamily: "poppins_medium",
                fontSize: 14,
                color: "#00A6A6",
              }}
            >
             Chat with Employer
            </Text>
          </TouchableOpacity>

          <View style={{paddingHorizontal: 6}}>
          <Text style={{ fontFamily: "poppins_regular", fontSize: 11, color: '#414141', textAlign: 'center' }}>
            You'll be notified once the employer reviews your application
          </Text>
          </View>
      </View>
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
