import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function LoanCategoryCard({
  title,
  onPress,
}: any) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Text style={styles.icon}>
        💰
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    paddingVertical: 25,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 15,
    elevation: 2,
  },

  icon: {
    fontSize: 28,
    marginBottom: 10,
  },

  title: {
    fontWeight: "600",
  },
});