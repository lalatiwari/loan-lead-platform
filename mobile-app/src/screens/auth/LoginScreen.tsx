import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../theme/colors";

export default function LoginScreen() {
    const navigation: any = useNavigation();
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>
        LoanLead
      </Text>

      <Text style={styles.heading}>
        Welcome Back
      </Text>

      <Text style={styles.subHeading}>
        Login to continue
      </Text>

      <TextInput
        placeholder="Mobile Number"
        placeholderTextColor="#999"
        value={mobile}
        onChangeText={setMobile}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <TextInput
        placeholder="Email Address"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

     <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.replace("Home")}
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
    paddingHorizontal: 25,
    justifyContent: "center",
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
    marginBottom: 30,
    fontSize: 16,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: Colors.accent,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
});