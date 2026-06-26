import React, { useState } from "react";

import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { Colors } from "../../theme/colors";
import { useRoute } from "@react-navigation/native";

export default function LoanApplicationScreen() {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  
  const [loanAmount, setLoanAmount] = useState("");

  const [aadhaarFile, setAadhaarFile] = useState("");
  const [panFile, setPanFile] = useState("");
  const [salarySlipFile, setSalarySlipFile] = useState("");
  const [bankStatementFile, setBankStatementFile] = useState("");

  const [consent, setConsent] = useState(false);

 
const route: any = useRoute();

const {
  loanType = "Personal Loan",
} = route.params || {};

const [selectedLoanType] = useState(loanType);

  
  const handleContinue = () => {
    if (
      !fullName ||
      !mobileNumber ||
      !email ||
      !city ||
      !loanAmount
    ) {
      Alert.alert(
        "Validation Error",
        "Please fill all required fields"
      );
      return;
    }

    if (!consent) {
      Alert.alert(
        "Consent Required",
        "Please accept Terms & Conditions"
      );
      return;
    }

    Alert.alert(
      "Success",
      "Loan Application Submitted Successfully"
    );

    console.log({
      fullName,
      mobileNumber,
      email,
      city,
      loanType,
      loanAmount,
      aadhaarFile,
      panFile,
      salarySlipFile,
      bankStatementFile,
      consent,
    });
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>
        Loan Application
      </Text>

      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />

      <TextInput
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
        maxLength={10}
        style={styles.input}
      />

      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />

      <TextInput
  placeholder="Loan Type"
  value={selectedLoanType}
  editable={false}
  style={styles.input}
/>

      <TextInput
        placeholder="Loan Amount"
        value={loanAmount}
        onChangeText={setLoanAmount}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.sectionTitle}>
        Upload Documents
      </Text>

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() =>
          setAadhaarFile("aadhaar.pdf")
        }
      >
        <Text style={styles.uploadText}>
          {aadhaarFile
            ? `✓ ${aadhaarFile}`
            : "Upload Aadhaar Card"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() =>
          setPanFile("pan.pdf")
        }
      >
        <Text style={styles.uploadText}>
          {panFile
            ? `✓ ${panFile}`
            : "Upload PAN Card"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() =>
          setSalarySlipFile(
            "salary-slip.pdf"
          )
        }
      >
        <Text style={styles.uploadText}>
          {salarySlipFile
            ? `✓ ${salarySlipFile}`
            : "Upload Salary Slip"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() =>
          setBankStatementFile(
            "bank-statement.pdf"
          )
        }
      >
        <Text style={styles.uploadText}>
          {bankStatementFile
            ? `✓ ${bankStatementFile}`
            : "Upload Bank Statement"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() =>
          setConsent(!consent)
        }
      >
        <Text style={styles.checkbox}>
          {consent ? "☑" : "☐"}
        </Text>

        <Text style={styles.checkboxText}>
          I agree to Terms &
          Conditions
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>
          Continue
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

  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.primary,
    marginTop: 20,
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
    fontSize: 16,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.primary,
    marginBottom: 15,
    marginTop: 10,
  },

  uploadButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  uploadText: {
    fontSize: 15,
    fontWeight: "500",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  checkbox: {
    fontSize: 22,
  },

  checkboxText: {
    marginLeft: 10,
    fontSize: 15,
  },

  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 40,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});