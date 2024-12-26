import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

export default function AboutUsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to SZUSICON 2025!</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Dear Esteemed Friends & Colleagues,
        </Text>
        <Text style={styles.paragraph}>
          It brings us immense joy to extend a heartfelt invitation to the 36th Annual Conference of the Association of Southern Urologists (SZUSICON 2025) in Vijayawada, Andhra Pradesh.
        </Text>
        <Text style={styles.paragraph}>
          This year’s event promises to be an exceptional gathering of urology professionals, featuring cutting-edge talks, insightful lectures and the latest trends in urological surgeries. Our host city Vijayawada is ready to welcome you with warm hospitality, offering a delightful experience with its rich culture, delicious cuisine and comfortable accommodations.
        </Text>
        <Text style={styles.paragraph}>
          Andhra Pradesh is India's Sunrise State and the gateway to promising markets and focused opportunities. Our ideas are big and our vision is global. Explore the historical Kanaka Durga Temple, the serene Prakasam Barrage, and the beautiful Undavalli Caves during your stay. These iconic sites offer a blend of spirituality, engineering marvels, and ancient art that reflect the innovative spirit of urology.
        </Text>
        <Text style={styles.paragraph}>
          The Association of Southern Urologists is committed to delivering a memorable conference filled with valuable knowledge and networking opportunities.
        </Text>
        <Text style={styles.paragraph}>
          Join us in Vijayawada for an unforgettable event, where professional growth meets cultural enrichment. We look forward to seeing you all at SZUSICON 2025!
        </Text>
        <Text style={styles.paragraph}>
          With warm regards,
        </Text>
        <Text style={styles.paragraph}>
          SZUSICON 2025 Organizing Committee
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  content: {
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
    color: '#333',
  },
});
