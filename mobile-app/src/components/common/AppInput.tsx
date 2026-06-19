import React from "react";

import {
  TextInput,
  StyleSheet,
} from "react-native";

export default function AppInput(
  props: any
) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#999"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",

    padding: 14,

    borderRadius: 12,

    marginBottom: 15,
  },
});