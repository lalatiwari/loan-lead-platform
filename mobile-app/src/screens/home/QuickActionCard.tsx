import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function QuickActionCard({
  title,
  subtitle,
}: any) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 2,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  subtitle: {
    marginTop: 5,
    color: "#666",
  },
});