import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const clinic = {
  id: '1',
  logo: 'https://via.placeholder.com/50',
  name: 'Clinic One',
  specialty: 'Cardiology',
  address: '123 Main St',
  district: 'Downtown',
  fees: '$100',
  offering: 'Consultation, Surgery'
};

const ClincDetails: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.clinicCard}>
        <Image source={{ uri: clinic.logo }} style={styles.clinicLogo} />
        <View style={styles.clinicInfo}>
          <Text style={styles.clinicName}>{clinic.name}</Text>
          <Text style={styles.clinicDetail}>Specialty: {clinic.specialty}</Text>
          <Text style={styles.clinicDetail}>Address: {clinic.address}, {clinic.district}</Text>
          <Text style={styles.clinicDetail}>Fees: {clinic.fees}</Text>
          <Text style={styles.clinicDetail}>Offering: {clinic.offering}</Text>
        </View>
      </View>
    </View>
  );
};

export default ClincDetails;

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
  clinicCard: {
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
  clinicLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  clinicInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  clinicName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  clinicDetail: {
    fontSize: 16,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});