import { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Auth Screens
import Onboarding from "./src/screens/auth/Onboarding";
import WelcomeScreen from "./src/screens/auth/WelcomeScreen";
import CreateAccount from "./src/screens/auth/CreateAccount";
import UserType from "./src/screens/auth/UserType";
import OTP from "./src/screens/auth/OTP";
import Verification from "./src/screens/auth/Verification";
import Profile from "./src/screens/auth/Profile";
import Login from "./src/screens/auth/Login";

// Main App Screens
import AppNavigation from "./src/screens/tabs";
import JobDetails from "./src/screens/tabs/Home/JobDetails";
import JobUpdate from "./src/screens/tabs/Home/JobUpdate";
import ChatScreen from "./src/screens/tabs/Chat/ChatScreen";
import CreateJob from "./src/screens/tabs/Jobs/CreateJob";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    opensans_bold: require("./assets/fonts/opensans_bold.ttf"),
    opensans_extrabold: require("./assets/fonts/opensans_extrabold.ttf"),
    opensans_regular: require("./assets/fonts/opensans_regular.ttf"),
    opensans_semibold: require("./assets/fonts/opensans_semibold.ttf"),
    poppins_medium: require("./assets/fonts/poppins_medium.ttf"),
    poppins_regular: require("./assets/fonts/poppins_regular.ttf"),
    opensans_italic_semibold: require("./assets/fonts/opensans_italic_semibold.ttf"),
  });

  const [loading, setLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const navigationRef = useRef();
  const splashImage = require("./assets/splash.png");

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const savedUser = await AsyncStorage.getItem("user");

        setTimeout(() => {
          if (navigationRef.current) {
            if (savedUser) {
              // ✅ Redirect to AppNavigation if user exists
              navigationRef.current.reset({
                index: 0,
                routes: [{ name: "AppNavigation" }],
              });
            } else {
              // 🚀 Redirect to Onboarding if no user
              navigationRef.current.reset({
                index: 0,
                routes: [{ name: "Onboarding" }],
              });
            }
          }
          setShowSplash(false);
          setLoading(false);
        }, 2000);
      } catch (e) {
        console.log("Error loading user:", e);
      }
    };

    initializeApp();
  }, []);

  // 🌀 Splash Screen
  if (!fontsLoaded || showSplash) {
    return (
      <View style={styles.container}>
        <Image source={splashImage} style={styles.image} resizeMode="cover" />
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FB6619" />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* ✅ All screens declared normally */}
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="UserType" component={UserType} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="AppNavigation" component={AppNavigation} />
        <Stack.Screen name="JobDetails" component={JobDetails} />
        <Stack.Screen name="JobUpdate" component={JobUpdate} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="CreateJob" component={CreateJob} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});