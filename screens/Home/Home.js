import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my App!</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Hot Deals</Text>
        <Text style={styles.cardContent}>50% off on all clothing items</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>New Arrivals</Text>
        <Text style={styles.cardContent}>Check out our latest collections</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>New Arrivals</Text>
        <Text style={styles.cardContent}>Check out our latest collections</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>New Arrivals</Text>
        <Text style={styles.cardContent}>Check out our latest collections</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>New Arrivals</Text>
        <Text style={styles.cardContent}>Check out our latest collections</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>New Arrivals</Text>
        <Text style={styles.cardContent}>Check out our latest collections</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#FF69B4",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FF69B4",
  },
  cardContent: {
    fontSize: 16,
    color: "#000000",
  },
});

export default Home;
