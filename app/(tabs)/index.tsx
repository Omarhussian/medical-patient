import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, useRouter } from "expo-router";
const Card = ({ title, to }:any) => (
  <Link href={to} style={styles.card}>
    <ThemedText style={styles.cardText}>{title}</ThemedText>
  </Link>
);

export default function HomeScreen() {
  const router = useRouter
  return (
    <ThemedView style={styles.container}>
    <View style={styles.cardsContainer}>
          <Card title="Clinics" to="/clinics" />
          <Card title="Pharmacies" to="/pharmacies" />
          <Card title="Labs" to="/labs" />
          <Card title="Scan Centers" to="/scanCenters" />
        </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    height: 100,
    width: 100,
    marginRight: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerImage: {
    width: "100%",
    height: 300,
  },
});

