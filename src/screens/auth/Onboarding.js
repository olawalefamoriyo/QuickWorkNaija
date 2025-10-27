import React, { useState, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: require("../../../assets/girl.png"),
    title: "Find Work Quickly",
    subtitle: "Browse nearby or remote gigs and get paid instantly",
  },
  {
    id: 2,
    image: require("../../../assets/man.png"),
    title: "Hire Skilled People",
    subtitle: "Post a quick job and hire verified workers around you",
  },
  {
    id: 3,
    image: require("../../../assets/wallet-money.png"),
    title: "Instant Payment",
    subtitle: "Get paid the moment your job is complete via in-app wallet",
  },
];

export default function Onboarding() {
  const navigation = useNavigation();
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      scrollRef.current.scrollTo({
        x: width * (currentIndex + 1),
        animated: true,
      });
    } else {
      navigation.navigate("Welcome");
    }
  };

  const handleSkip = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <View style={{ alignItems: "center", marginTop: 36 }}>
              <Image
                source={slide.image}
                resizeMode="contain"
              />
            </View>

            <View style={styles.imageContainer}>
              <Image
                source={require("../../../assets/onboarding-container.png")}
                style={styles.image}
                resizeMode="cover"
              />

              <View style={styles.textContainer}>
                <View style={styles.textBlock}>
                  <Text style={styles.title}>{slide.title}</Text>
                  <Text style={styles.subtitle}>{slide.subtitle}</Text>
                </View>

                <View style={styles.buttonRow}>
                  {index === 0 && (
                    <TouchableOpacity onPress={handleSkip} style={{flex: 1}}>
                      <Text style={styles.buttonText}>Skip</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={handleNext} style={{flex: 1, alignItems: 'flex-end'}}>
                    <Text style={styles.buttonText}>
                      {index === slides.length - 1 ? "Continue" : "Next"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: i === currentIndex ? "#00A6A6" : "#D9D9D9" },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  slide: {
    width: width,
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  image: {
    width: width,
    height: 400,
  },
  textContainer: {
    position: "absolute",
    top: 82,
    width: "100%",
    paddingHorizontal: 20,
  },
  textBlock: {
    alignItems: "center",
    gap: 18,
  },
  title: {
    fontFamily: "opensans_semibold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "poppins_regular",
    fontSize: 14,
    color: "white",
    textAlign: "center",
    maxWidth: 260,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontFamily: "poppins_regular",
    fontSize: 14,
    color: "white",
  },
  dotsContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
  },
});
