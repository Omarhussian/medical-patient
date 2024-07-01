import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'expo-router';

const More = () => {
  const router = useRouter();
  
  const [visits, setVisits] = useState(0);
  const [purchases, setPurchases] = useState(0);
  const [payments, setPayments] = useState(0);

  useEffect(() => {
    const targetVisits = 10;
    const targetPurchases = 5;
    const targetPayments = 3;

    const interval = setInterval(() => {
      setVisits(prev => (prev < targetVisits ? prev + 1 : prev));
      setPurchases(prev => (prev < targetPurchases ? prev + 1 : prev));
      setPayments(prev => (prev < targetPayments ? prev + 1 : prev));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    router.push('../../');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>patient full name</Text>
        <TouchableOpacity style={styles.settingsIcon}>
          <Text>⚙️</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My Visits: {visits}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My Purchases: {purchases}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My Payments: {payments}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linksContainer}>
        <TouchableOpacity style={styles.link} onPress={() => router.push('../../')}>
          <Text style={styles.linkText}>Patient ID</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Manage cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Privacy statement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>About Lnkr</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
export default More



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingsIcon: {
    // Add your icon styling here
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
 button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    backgroundColor: '#007BFF', // Changed background color to match the styles
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center', // Center content vertically
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff', // Changed text color to white
  },
  linksContainer: {
    marginBottom: 20,
  },
  link: {
    paddingVertical: 10,
  },
  linkText: {
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 'auto', // Added to push the button to the bottom
    padding: 15,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderRadius: 5,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})