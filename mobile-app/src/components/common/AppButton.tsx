import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { Colors }
from "../../theme/colors";

interface Props {
  title: string;
  onPress: () => void;
}

export default function AppButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor:
      Colors.accent,

    padding: 16,

    borderRadius: 12,

    alignItems: "center",
  },

  text: {
    color: Colors.primary,
    fontWeight: "700",
    fontSize: 16,
  },
});