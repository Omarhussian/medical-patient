import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const Card = ({ title, onPress }:any) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <ThemedText style={styles.cardText}>{title}</ThemedText>
  </TouchableOpacity>
);

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.cardsContainer}>
        <Card title="Clinics" 
        // onPress={() => navigation.navigate("Clinics")} 
        />
        <Card
          title="Pharmacies"
          // onPress={}
        />
        <Card title="Labs" 
        // onPress={() => navigation.navigate("Labs")}
         />
        <Card
          title="Scan Centers"
          // onPress={() => navigation.navigate("ScanCenters")}
        />
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
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
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
