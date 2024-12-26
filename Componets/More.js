import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ConferenceInfoScreen() {
  const staticData = [
    { iconName: 'calendar-outline', label: 'Scientific', onPress: () => console.log('Scientific Pressed') },
    { iconName: 'megaphone-outline', label: 'Announcements', onPress: () => console.log('Bepucher Pressed') },
    { iconName: 'call-outline', label: 'Contact', onPress: () => console.log('Contact Pressed') },
    { iconName: 'today-outline', label: "What's Today", onPress: () => console.log("What's Today Pressed") },
    { iconName: 'star-outline', label: 'Conference Highlights', onPress: () => console.log('Conference Highlights Pressed') },
    { iconName: 'download-outline', label: 'Download', onPress: () => console.log('Download Pressed') },
    { iconName: 'construct-outline', label: 'Workshops', onPress: () => console.log('Workshops Pressed') },
    { iconName: 'hotel-outline', label: 'Hotel and Travel', onPress: () => console.log('Hotel and Travel Pressed') },
  ];

  return (
    <ScrollView style={styles.container}>
      {staticData.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.itemContainer}
          onPress={item.onPress}
        >
          <View style={styles.iconWrapper}>
            <Icon name={item.iconName} size={24} color="#007BFF" />
            <Text style={styles.label}>{item.label}</Text>
          </View>
          <Icon name="chevron-forward" size={24} color="#007BFF" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
});
