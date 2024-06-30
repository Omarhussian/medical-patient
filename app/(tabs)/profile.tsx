import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const Profile: React.FC = () => {
  const [fullName, setFullName] = useState<string>('John Doe');
  const [nationalID, setNationalID] = useState<string>('123456789');
  const [birthdate, setBirthdate] = useState<Date>(new Date());
  const [gender, setGender] = useState<string>('Male');
  const [cardNo, setCardNo] = useState<string>('987654321');
  const [pincode, setPincode] = useState<string>('12345');
  const [insurance, setInsurance] = useState<string>('ABC Insurance');
  const [medicalNet, setMedicalNet] = useState<string>('XYZ Network');
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(true);

  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(false);
    setBirthdate(currentDate);
  };

  const handleSave = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter full name"
            editable={isEditable}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>National ID</Text>
          <TextInput
            style={styles.input}
            value={nationalID}
            onChangeText={setNationalID}
            placeholder="Enter national ID"
            editable={isEditable}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Birthdate</Text>
          <TouchableOpacity onPress={() => isEditable && setShowDatePicker(true)}>
            <TextInput
              style={styles.input}
              value={birthdate.toDateString()}
              editable={false}
              placeholder="Enter birthdate"
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={birthdate}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gender</Text>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            enabled={isEditable}
            style={styles.input}
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Patient ID</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Card No.</Text>
          <TextInput
            style={styles.input}
            value={cardNo}
            onChangeText={setCardNo}
            placeholder="Enter card number"
            editable={isEditable}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Pincode</Text>
          <TextInput
            style={styles.input}
            value={pincode}
            onChangeText={setPincode}
            placeholder="Enter pincode"
            editable={isEditable}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Insurance</Text>
          <TextInput
            style={styles.input}
            value={insurance}
            onChangeText={setInsurance}
            placeholder="Enter insurance details"
            editable={isEditable}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Medical Net.</Text>
          <TextInput
            style={styles.input}
            value={medicalNet}
            onChangeText={setMedicalNet}
            placeholder="Enter medical network"
            editable={isEditable}
          />
        </View>
      </View>
      {isEditable ? (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.saveButton} onPress={handleEdit}>
          <Text style={styles.saveButtonText}>Edit</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};



export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  saveButton: {
    padding: 15,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    borderRadius: 5,
  },
  saveButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});