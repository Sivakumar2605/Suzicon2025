import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const suggestions = [
    'Scientific',
    'Workshop',
    'Trade',
    'Point of Contact',
    'City',
    'Know the Venue'
  ];

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSuggestionPress = (suggestion) => {
    setSearchText(suggestion); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Type to search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      
      {searchText !== '' && (
        <FlatList
          data={filteredSuggestions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSuggestionPress(item)}>
              <Text style={styles.suggestion}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.suggestionList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  suggestionList: {
    marginTop: 10,
  },
  suggestion: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
