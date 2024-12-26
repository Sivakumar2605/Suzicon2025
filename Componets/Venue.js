import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Venue = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Venue Image */}
      <Image
        source={{
          uri: 'https://szusicon2025vijayawada.com/assets/images/usicon/conference-venue.png', 
        }}
        style={styles.image}
      />

      {/* Venue Description */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>CK Conventions & Hotels</Text>
        <Text style={styles.description}>
          The CK Conventions & Hotels is an ideal spot for travelers wanting to discover the city. 
          Visitors to Mangalagiri will find that the CK Conventions & Hotels is a fantastic accommodation choice.
        </Text>
        <Text style={styles.description}>
          The hotel is only 12km from Vijayawada Junction Railway Station and 28km from Vijayawada Airport, 
          giving guests a number of convenient transportation options. This hotel is located near many of 
          Mangalagiri's attractions including Shiridi Sai Baba Temple, Mangalagiri Reserve Forest, and CK Conventions.
        </Text>
        <Text style={styles.description}>
          In their spare time, guests can explore the hotel's surroundings.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  textContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4f4f4f',
    marginBottom: 10,
    textAlign: 'justify',
  },
});

export default Venue;
