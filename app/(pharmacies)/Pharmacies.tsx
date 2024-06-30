import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const pharmacies = [
  {
    id: '1',
    logo: 'https://via.placeholder.com/50',
    name: 'Pharmacy One',
    specialty: 'General',
    address: '123 Oak St',
    district: 'Downtown',
    fees: '$10',
    offering: 'Medicines, Health Products'
  },
  // Add more pharmacies as needed
];

const PharmacyCard: React.FC<{ pharmacy: any }> = ({ pharmacy }) => {
  const router = useRouter();

  return (
    <TouchableOpacity 
      style={styles.pharmacyCard} 
      onPress={() => router.push({
        pathname: './PharmacyDetails',
        params: { pharmacy: JSON.stringify(pharmacy) }
      })}
    >
      <Image source={{ uri: pharmacy.logo }} style={styles.pharmacyLogo} />
      <View style={styles.pharmacyInfo}>
        <Text style={styles.pharmacyName}>{pharmacy.name}</Text>
        <Text style={styles.pharmacyDetail}>Specialty: {pharmacy.specialty}</Text>
        <Text style={styles.pharmacyDetail}>Address: {pharmacy.address}, {pharmacy.district}</Text>
        <Text style={styles.pharmacyDetail}>Fees: {pharmacy.fees}</Text>
        <Text style={styles.pharmacyDetail}>Offering: {pharmacy.offering}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Pharmacies: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={pharmacies}
        renderItem={({ item }) => <PharmacyCard pharmacy={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Pharmacies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingBottom: 16,
  },
  pharmacyCard: {
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
  pharmacyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  pharmacyInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  pharmacyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  pharmacyDetail: {
    fontSize: 14,
    marginBottom: 2,
  },
});