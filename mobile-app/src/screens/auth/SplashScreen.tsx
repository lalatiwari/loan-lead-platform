import React, {useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { Colors }
from "../../theme/colors";

import { useNavigation }
from "@react-navigation/native";

export default function SplashScreen() {

const navigation: any =
useNavigation();

useEffect(() => {

  setTimeout(() => {

    navigation.replace(
      "Onboarding"
    );

  }, 2500);

}, []);



  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        LoanLead
      </Text>

      <Text style={styles.tagline}>
        Premium Loan Platform
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      Colors.primary,

    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    color: Colors.secondary,
    fontSize: 34,
    fontWeight: "bold",
  },

  tagline: {
    color: Colors.accent,
    marginTop: 10,
    fontSize: 16,
  },
});