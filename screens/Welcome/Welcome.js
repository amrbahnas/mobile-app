import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
export default Welcome = ({ navigation }) => {
  const handleGetStarted = () => {
    // Handle button press to navigate to next screen
    navigation.navigate("login");
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
