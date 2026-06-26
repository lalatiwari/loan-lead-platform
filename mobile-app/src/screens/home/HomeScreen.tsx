import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../theme/colors";

import WelcomeCard from "./WelcomeCard";
import LoanCategoryCard from "./LoanCategoryCard";
import QuickActionCard from "./QuickActionCard";

export default function HomeScreen() {

  const navigation: any = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>
        Welcome Shubham 👋
      </Text>

      <WelcomeCard />

      <Text style={styles.sectionTitle}>
        Loan Categories
      </Text>

      <View style={styles.grid}>

  <LoanCategoryCard
    title="Personal Loan"
    onPress={() =>
      navigation.navigate("LoanApplication", {
        loanType: "Personal Loan",
      })
    }
  />

  <LoanCategoryCard
    title="Home Loan"
    onPress={() =>
      navigation.navigate("LoanApplication", {
        loanType: "Home Loan",
      })
    }
  />

  <LoanCategoryCard
    title="Car Loan"
    onPress={() =>
      navigation.navigate("LoanApplication", {
        loanType: "Car Loan",
      })
    }
  />

  <LoanCategoryCard
    title="Business Loan"
    onPress={() =>
      navigation.navigate("LoanApplication", {
        loanType: "Business Loan",
      })
    }
  />

</View>

      <Text style={styles.sectionTitle}>
        Quick Services
      </Text>

      <QuickActionCard
        title="EMI Calculator"
        subtitle="Calculate your monthly EMI instantly."
      />

      <QuickActionCard
        title="Application Tracker"
        subtitle="Track your loan application status."
      />
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
});