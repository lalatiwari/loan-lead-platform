import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../theme/colors";
import { sendOTP } from "../../services/authService";

export default function LoginScreen() {
  const navigation: any = useNavigation();

  const [mobile, setMobile] = useState("");

  const handleSendOTP = async () => {
    try {
      if (mobile.length !== 10) {
        Alert.alert(
          "Validation",
          "Please enter a valid 10 digit mobile number"
        );
        return;
      }

      await sendOTP(mobile);

      navigation.navigate("Otp", {
        mobile,
      });
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Error",
        "Failed to send OTP"
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>
        LoanLead
      </Text>

      <Text style={styles.heading}>
        Welcome Back
      </Text>

      <Text style={styles.subHeading}>
        Login with Mobile Number
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        maxLength={10}
        value={mobile}
        onChangeText={setMobile}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSendOTP}
      >
        <Text style={styles.buttonText}>
          Send OTP
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.secondary,
    textAlign: "center",
    marginBottom: 40,
  },

  heading: {
    color: Colors.secondary,
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },

  subHeading: {
    color: Colors.accent,
    fontSize: 16,
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    backgroundColor: Colors.accent,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
});