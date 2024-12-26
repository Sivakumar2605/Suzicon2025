import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Welcome to the Scintific Programm </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
