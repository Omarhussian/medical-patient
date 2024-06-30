import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const pharmacy = {
  id: '1',
  logo: 'https://via.placeholder.com/50',
  name: 'Pharmacy One',
  specialty: 'General',
  address: '123 Oak St',
  district: 'Downtown',
  fees: '$10',
  offering: 'Medicines, Health Products'
};

const PharmacyDetails: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.pharmacyCard}>
        <Image source={{ uri: pharmacy.logo }} style={styles.pharmacyLogo} />
        <View style={styles.pharmacyInfo}>
          <Text style={styles.pharmacyName}>{pharmacy.name}</Text>
          <Text style={styles.pharmacyDetail}>Specialty: {pharmacy.specialty}</Text>
          <Text style={styles.pharmacyDetail}>Address: {pharmacy.address}, {pharmacy.district}</Text>
          <Text style={styles.pharmacyDetail}>Fees: {pharmacy.fees}</Text>
          <Text style={styles.pharmacyDetail}>Offering: {pharmacy.offering}</Text>
        </View>
      </View>
    </View>
  );
};

export default PharmacyDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
  pharmacyCard: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  pharmacyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  pharmacyInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  pharmacyName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pharmacyDetail: {
    fontSize: 16,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});