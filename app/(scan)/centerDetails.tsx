import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const scanCenter = {
  id: '1',
  logo: 'https://via.placeholder.com/50',
  name: 'Scan Center One',
  specialty: 'MRI',
  address: '456 Elm St',
  district: 'Uptown',
  fees: '$200',
  offering: 'MRI, CT Scan'
};

const ScanCenterDetails: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.scanCenterCard}>
        <Image source={{ uri: scanCenter.logo }} style={styles.scanCenterLogo} />
        <View style={styles.scanCenterInfo}>
          <Text style={styles.scanCenterName}>{scanCenter.name}</Text>
          <Text style={styles.scanCenterDetail}>Specialty: {scanCenter.specialty}</Text>
          <Text style={styles.scanCenterDetail}>Address: {scanCenter.address}, {scanCenter.district}</Text>
          <Text style={styles.scanCenterDetail}>Fees: {scanCenter.fees}</Text>
          <Text style={styles.scanCenterDetail}>Offering: {scanCenter.offering}</Text>
        </View>
      </View>
    </View>
  );
};

export default ScanCenterDetails;

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
  scanCenterCard: {
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
  scanCenterLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  scanCenterInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  scanCenterName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scanCenterDetail: {
    fontSize: 16,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});