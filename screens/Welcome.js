import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Welcome = () => {
  const handleGetStarted = () => {
    // Handle button press to navigate to next screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your App</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 40,
    marginBottom: 40,
    color: "#666",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#ff6b6b",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Welcome;
