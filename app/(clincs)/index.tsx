import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, Dimensions, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';

interface Clinic {
  id: string;
  logo: string;
  name: string;
  specialty: string;
  address: string;
  district: string;
  fees: string;
  offering: string;
}

const clinics: Clinic[] = [
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

interface ClinicCardProps {
  clinic: Clinic;
}

const ClinicCard: React.FC<ClinicCardProps> = ({ clinic }) => (
  <TouchableOpacity 
    style={styles.clinicCard} 
    onPress={() => router.push({
      pathname: '/ClincDetails',
      params: { clinic: JSON.stringify(clinic) }
    })}
  >
    <Image source={{ uri: clinic.logo }} style={styles.clinicLogo} />
    <View style={styles.clinicInfo}>
      <Text style={styles.clinicName}>{clinic.name}</Text>
      <Text style={styles.clinicDetail}>Specialty: {clinic.specialty}</Text>
      <Text style={styles.clinicDetail}>Address: {clinic.address}, {clinic.district}</Text>
      <Text style={styles.clinicDetail}>Fees: {clinic.fees}</Text>
      <Text style={styles.clinicDetail}>Offering: {clinic.offering}</Text>
    </View>
  </TouchableOpacity>
);

const ClinicsScreen: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [showSortPicker, setShowSortPicker] = useState<boolean>(false);
  const [showFilterPicker, setShowFilterPicker] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search" />
      <View style={styles.buttonsContainer}>
        <View style={styles.pickerContainer}>
          {/* <Text>Sort:</Text> */}
          <Button title="Select Sort" onPress={() => setShowSortPicker(!showSortPicker)} />
        </View>
        <View style={styles.pickerContainer}>
          {/* <Text>Filter:</Text> */}
          <Button title="Select Filter" onPress={() => setShowFilterPicker(!showFilterPicker)} />
        </View>
      </View>
      <FlatList
        data={clinics}
        renderItem={({ item }) => <ClinicCard clinic={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        scrollEnabled={false}
      />
      {showSortPicker && (
        <View style={styles.overlay}>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedSort}
              style={styles.picker}
              onValueChange={(itemValue: string) => {
                setSelectedSort(itemValue);
                setShowSortPicker(false);
              }}
            >
              <Picker.Item label="Most Recommended" value="recommended" />
              <Picker.Item label="Price Low to High" value="lowToHigh" />
              <Picker.Item label="Price High to Low" value="highToLow" />
            </Picker>
          </View>
        </View>
      )}
      {showFilterPicker && (
        <View style={styles.overlay}>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedFilter}
              style={styles.picker}
              onValueChange={(itemValue: string) => {
                setSelectedFilter(itemValue);
                setShowFilterPicker(false);
              }}
            >
              <Picker.Item label="City" value="city" />
              <Picker.Item label="Specialty" value="specialty" />
              <Picker.Item label="Insurance" value="insurance" />
              <Picker.Item label="Examination Fee" value="fee" />
            </Picker>
          </View>
        </View>
      )}
    </View>
  );
};

export default ClinicsScreen;

const { height } = Dimensions.get('window');
const clinicCardHeight = height / 3;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darker overlay for better visibility
  },
  pickerWrapper: {
    backgroundColor: '#fff', // Added background color for picker wrapper
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  pickerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
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