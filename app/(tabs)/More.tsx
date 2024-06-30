import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRouter } from 'expo-router';
type RootStackParamList = {
  Login: undefined;
 
};
const More = () => {
  const router = useRouter();
  
  const handleLogout = () => {
    // going to the login page
    router.push('../../');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>patient full name</Text>
        <TouchableOpacity style={styles.settingsIcon}>
          {/* Add your settings icon here */}
          <Text>⚙️</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My Visits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My Purchases</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My Payments</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linksContainer}>
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
    justifyContent: 'space-between', // Added to space out content
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
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    flexWrap: 'nowrap', 
    
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