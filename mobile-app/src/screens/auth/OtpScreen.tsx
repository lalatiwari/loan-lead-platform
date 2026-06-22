import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { Colors } from "../../theme/colors";

import {
  verifyOTP,
} from "../../services/authService";

export default function OtpScreen() {
  const navigation: any = useNavigation();

  const route: any = useRoute();

  const mobile =
    route?.params?.mobile || "";

  const [otp, setOtp] =
    useState("");

  const handleVerifyOTP = async () => {
    try {
      const response =
        await verifyOTP(
          mobile,
          otp
        );

      if (response.success) {
        await AsyncStorage.setItem(
          "token",
          response.token
        );

        Alert.alert(
          "Success",
          "Login Successful"
        );

        navigation.reset({
          index: 0,
          routes: [
            {
              name: "Home",
            },
          ],
        });
      }
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Error",
        "Invalid OTP"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Verify OTP
      </Text>

      <Text style={styles.mobileText}>
        OTP sent to {mobile}
      </Text>

      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        placeholder="Enter OTP"
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleVerifyOTP}
      >
        <Text style={styles.buttonText}>
          Verify OTP
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: Colors.primary,
  },

  heading: {
    color: Colors.secondary,
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },

  mobileText: {
    color: Colors.accent,
    marginBottom: 20,
    fontSize: 14,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: Colors.accent,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
  },
});