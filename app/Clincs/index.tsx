import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const clinics = [
  {
    id: '1',
    logo: 'https://via.placeholder.com/50',
    name: 'Clinic One',
    specialty: 'Cardiology',
    address: '123 Main St',
    district: 'Downtown',
    fees: '$100',
    offering: 'Consultation, Surgery'
  },
  {
    id: '2',
    logo: 'https://via.placeholder.com/50',
    name: 'Clinic Two',
    specialty: 'Dermatology',
    address: '456 Elm St',
    district: 'Uptown',
    fees: '$150',
    offering: 'Skin Care, Laser'
  },
  
];

const ClinicCard = ({ clinic }:any) => (
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
);

const ClinicsScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search" />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}><Text>Sort</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Filter</Text></TouchableOpacity>
      </View>
      <FlatList
        data={clinics}
        renderItem={({ item }) => <ClinicCard clinic={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        scrollEnabled={false}
      />
    </View>
  );
};

export default ClinicsScreen;

const { height } = Dimensions.get('window');
const clinicCardHeight = height / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  listContainer: {
    paddingBottom: 16,
  },
  clinicCard: {
    height: clinicCardHeight,
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
  clinicLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  clinicInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  clinicName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  clinicDetail: {
    fontSize: 14,
    marginBottom: 2,
  },
});
