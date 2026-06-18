import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen
  from "../screens/auth/OnboardingScreen";


import SplashScreen from "../screens/auth/SplashScreen";

const Stack =
  createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />

        <Stack.Screen
  name="Onboarding"
  component={OnboardingScreen}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}