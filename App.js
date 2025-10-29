import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Onboarding from "./src/screens/auth/Onboarding";
import WelcomeScreen from "./src/screens/auth/WelcomeScreen";
import CreateAccount from "./src/screens/auth/CreateAccount";
import UserType from "./src/screens/auth/UserType";
import OTP from "./src/screens/auth/OTP";
import Verification from "./src/screens/auth/Verification";
import Profile from "./src/screens/auth/Profile";
import Login from "./src/screens/auth/Login";

import AppNavigation from "./src/screens/tabs";
import JobDetails from "./src/screens/tabs/Home/JobDetails";
import JobUpdate from "./src/screens/tabs/Home/JobUpdate";
import ChatScreen from "./src/screens/tabs/Chat/ChatScreen";
import CreateJob from "./src/screens/tabs/Jobs/CreateJob";

const Stack = createNativeStackNavigator();

export default function App() {
  const [forceShowApp, setForceShowApp] = useState(false);

  const [fontsLoaded] = useFonts({
    opensans_bold: require("./assets/fonts/opensans_bold.ttf"),
    opensans_semibold: require("./assets/fonts/opensans_semibold.ttf"),
    poppins_medium: require("./assets/fonts/poppins_medium.ttf"),
    poppins_regular: require("./assets/fonts/poppins_regular.ttf"),
  });

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
      }
    })();

    const fallback = setTimeout(async () => {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {}
      if (mounted) setForceShowApp(true);
    }, 10000);

    return () => {
      mounted = false;
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      (async () => {
        await new Promise((r) => setTimeout(r, 1000));
        try {
          await SplashScreen.hideAsync();
        } catch (e) {}
        setForceShowApp(true);
      })();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && !forceShowApp) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
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
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
