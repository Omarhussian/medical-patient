import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const scanCenters = [
  {
    id: '1',
    logo: 'https://via.placeholder.com/50',
    name: 'Scan Center One',
    specialty: 'MRI',
    address: '456 Elm St',
    district: 'Uptown',
    fees: '$200',
    offering: 'MRI, CT Scan'
  },
  {
    id: '2',
    logo: 'https://via.placeholder.com/50',
    name: 'Scan Center Two',
    specialty: 'MRI',
    address: '456 Elm St',
    district: 'Uptown',
    fees: '$200',
    offering: 'MRI, CT Scan'
  }
  // Add more scan centers as needed
];

const ScanCenterCard: React.FC<{ scanCenter: any }> = ({ scanCenter }) => {
  const router = useRouter();

  return (
    <TouchableOpacity 
      style={styles.scanCenterCard} 
      onPress={() => router.push({
        pathname: './centerDetails',
        params: { scanCenter: JSON.stringify(scanCenter) }
      })}
    >
      <Image source={{ uri: scanCenter.logo }} style={styles.scanCenterLogo} />
      <View style={styles.scanCenterInfo}>
        <Text style={styles.scanCenterName}>{scanCenter.name}</Text>
        <Text style={styles.scanCenterDetail}>Specialty: {scanCenter.specialty}</Text>
        <Text style={styles.scanCenterDetail}>Address: {scanCenter.address}, {scanCenter.district}</Text>
        <Text style={styles.scanCenterDetail}>Fees: {scanCenter.fees}</Text>
        <Text style={styles.scanCenterDetail}>Offering: {scanCenter.offering}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ScanCenters: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={scanCenters}
        renderItem={({ item }) => <ScanCenterCard scanCenter={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default ScanCenters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingBottom: 16,
  },
  scanCenterCard: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
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
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  scanCenterInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  scanCenterName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  scanCenterDetail: {
    fontSize: 14,
    marginBottom: 2,
  },
});