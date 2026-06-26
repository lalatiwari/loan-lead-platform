import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { Colors } from "../../theme/colors";

export default function WelcomeCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Get Instant Loan Approval
      </Text>

      <Text style={styles.subtitle}>
        Apply securely with document verification and quick approval.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  title: {
    color: Colors.secondary,
    fontSize: 22,
    fontWeight: "700",
  },

  subtitle: {
    color: Colors.accent,
    marginTop: 8,
  },
});