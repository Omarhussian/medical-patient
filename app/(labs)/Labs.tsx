import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const labs = [
  {
    id: '1',
    logo: 'https://via.placeholder.com/50',
    name: 'Lab One',
    specialty: 'Blood Tests',
    address: '789 Pine St',
    district: 'Midtown',
    fees: '$50',
    offering: 'Blood Tests, Urine Tests'
  },
  // Add more labs as needed
];

const LabCard: React.FC<{ lab: any }> = ({ lab }) => {
  const router = useRouter();

  return (
    <TouchableOpacity 
      style={styles.labCard} 
      onPress={() => router.push({
        pathname: './LabDetails',
        params: { lab: JSON.stringify(lab) }
      })}
    >
      <Image source={{ uri: lab.logo }} style={styles.labLogo} />
      <View style={styles.labInfo}>
        <Text style={styles.labName}>{lab.name}</Text>
        <Text style={styles.labDetail}>Specialty: {lab.specialty}</Text>
        <Text style={styles.labDetail}>Address: {lab.address}, {lab.district}</Text>
        <Text style={styles.labDetail}>Fees: {lab.fees}</Text>
        <Text style={styles.labDetail}>Offering: {lab.offering}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Labs: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={labs}
        renderItem={({ item }) => <LabCard lab={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Labs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingBottom: 16,
  },
  labCard: {
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
  labLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  labInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  labName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  labDetail: {
    fontSize: 14,
    marginBottom: 2,
  },
});