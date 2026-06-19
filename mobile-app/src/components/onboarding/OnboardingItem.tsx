import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

import { Colors } from "../../theme/colors";

const { width } =
Dimensions.get("window");

export default function OnboardingItem({
  item,
}: any) {

  return (
    <View style={styles.container}>

      <View style={styles.iconContainer}>
        <Text style={styles.icon}>
          💰
        </Text>
      </View>

      <Text style={styles.title}>
        {item.title}
      </Text>

      <Text style={styles.description}>
        {item.description}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  iconContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#FFFFFF15",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  icon: {
    fontSize: 70,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.secondary,
    textAlign: "center",
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: Colors.accent,
    textAlign: "center",
    lineHeight: 24,
  },

});