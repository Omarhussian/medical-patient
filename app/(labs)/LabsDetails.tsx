import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const lab = {
  id: '1',
  logo: 'https://via.placeholder.com/50',
  name: 'Lab One',
  specialty: 'Blood Tests',
  address: '789 Pine St',
  district: 'Midtown',
  fees: '$50',
  offering: 'Blood Tests, Urine Tests'
};

const LabDetails: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.labCard}>
        <Image source={{ uri: lab.logo }} style={styles.labLogo} />
        <View style={styles.labInfo}>
          <Text style={styles.labName}>{lab.name}</Text>
          <Text style={styles.labDetail}>Specialty: {lab.specialty}</Text>
          <Text style={styles.labDetail}>Address: {lab.address}, {lab.district}</Text>
          <Text style={styles.labDetail}>Fees: {lab.fees}</Text>
          <Text style={styles.labDetail}>Offering: {lab.offering}</Text>
        </View>
      </View>
    </View>
  );
};

export default LabDetails;

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
  labCard: {
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
  labLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  labInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  labName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  labDetail: {
    fontSize: 16,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});