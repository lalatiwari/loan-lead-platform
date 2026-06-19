import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Colors } from "../../theme/colors";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.welcome}>
        Welcome Shubham 👋
      </Text>

      <View style={styles.banner}>

        <Text style={styles.bannerTitle}>
          Get Instant Loan Approval
        </Text>

        <Text style={styles.bannerText}>
          Apply securely with document
          verification and quick approval.
        </Text>

      </View>

      <Text style={styles.sectionTitle}>
        Loan Categories
      </Text>

      <View style={styles.grid}>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>💳</Text>
          <Text style={styles.cardText}>
            Personal Loan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>🏠</Text>
          <Text style={styles.cardText}>
            Home Loan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>🚗</Text>
          <Text style={styles.cardText}>
            Car Loan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>🏢</Text>
          <Text style={styles.cardText}>
            Business Loan
          </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.sectionTitle}>
        Quick Services
      </Text>

      <TouchableOpacity style={styles.serviceCard}>
        <Text style={styles.serviceTitle}>
          EMI Calculator
        </Text>

        <Text style={styles.serviceText}>
          Calculate your monthly EMI instantly.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.serviceCard}>
        <Text style={styles.serviceTitle}>
          Application Tracker
        </Text>

        <Text style={styles.serviceText}>
          Track your loan application status.
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 20,
  },

  welcome: {
    fontSize: 26,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 20,
  },

  banner: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 25,
    marginBottom: 25,
  },

  bannerTitle: {
    color: Colors.secondary,
    fontSize: 22,
    fontWeight: "700",
  },

  bannerText: {
    color: Colors.accent,
    marginTop: 10,
    lineHeight: 22,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
    color: Colors.textPrimary,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    marginBottom: 15,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  cardIcon: {
    fontSize: 34,
  },

  cardText: {
    marginTop: 10,
    fontWeight: "600",
    textAlign: "center",
  },

  serviceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  serviceTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },

  serviceText: {
    color: Colors.textSecondary,
  },

});