import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, useRouter } from "expo-router";
import Animated, { FadeIn } from 'react-native-reanimated';

const Card = ({ title, to }: any) => (
  <Link href={to} style={styles.card}>
    <ThemedText style={styles.cardText}>{title}</ThemedText>
  </Link>
);

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <View style={styles.cardsContainer}>
        <View style={styles.row}>
          <Animated.View entering={FadeIn} style={styles.cardWrapper}>
            <Card title="Clinics" to="../(clincs)" />
          </Animated.View>
          <Animated.View entering={FadeIn} style={styles.cardWrapper}>
            <Card title="Pharmacies" to="/pharmacies" />
          </Animated.View>
        </View>
        <View style={styles.row}>
          <Animated.View entering={FadeIn} style={styles.cardWrapper}>
            <Card title="Labs" to="/labs" />
          </Animated.View>
          <Animated.View entering={FadeIn} style={styles.cardWrapper}>
            <Card title="Scan Centers" to="/scanCenters" />
          </Animated.View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  cardsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardWrapper: {
    width: "45%",
    margin: 10,
  },
  card: {
    aspectRatio: 1,
    padding: 20,
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
});