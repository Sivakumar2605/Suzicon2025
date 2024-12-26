import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import { WebView } from 'react-native-webview'; // Import WebView
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

export default function HomeScreen() {
  const [isError, setIsError] = useState(false);
  const navigation = useNavigation(); 

  // Function to handle the error state
  const handleError = (error) => {
    console.log('WebView Error:', error);
    setIsError(true);
  };
  const handleIconPress = () => {
    const url = 'https://szusicon2025vijayawada.com/register_now.php';
    Linking.openURL(url).catch(err =>
      console.error('Failed to open URL:', err)
    );
  };
  return (
    <View style={styles.container}>
      {/* Banner with Image */}
      <View style={styles.banner}>
      <Image source={require('../../Suzicon2025/assets/suzicon.png')} style={styles.bannerImage} />

      </View>

      {/* Icons Section */}
      <View style={styles.iconsContainer}>
        {/* First Row of Icons */}
        <View style={styles.iconRow}>
          <View style={styles.iconItem}>
            <Icon
              name="home-outline"
              size={30}
              color="#007BFF"
              onPress={() => navigation.navigate('About Us')}
            />
            <Text style={styles.iconLabel}>About Us</Text>
          </View>
          <View style={styles.iconItem}>
            <Icon name="people-outline" size={30} color="#007BFF"
              onPress={() => navigation.navigate('Committee')}
            />
            <Text style={styles.iconLabel}>Committee</Text>
          </View>
          <View style={styles.iconItem}>
            <Icon name="mic-outline" size={30} color="#007BFF" />
            <Text style={styles.iconLabel}>Speakers</Text>
          </View>
          <View style={styles.iconItem}>
            <Icon name="calendar-outline" size={30} color="#007BFF" />
            <Text style={styles.iconLabel}>Scientific Program</Text>
          </View>
          {/* Other icons go here */}

        </View>
        <View style={styles.iconRow}>
          <View style={styles.iconItem}>
            <TouchableOpacity onPress={handleIconPress}>
              <Icon style={styles.regicon} name="checkmark-circle-outline" size={30} color="#007BFF" />
              <Text style={styles.iconLabel}>Registrations</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconItem}>
            <Icon name="location-outline" size={30} color="#007BFF"  onPress={() => navigation.navigate('venue')} />
            <Text style={styles.iconLabel}>Venue</Text>
          </View>
          <View style={styles.iconItem}>
            <Icon name="location-sharp" size={30} color="#007BFF" onPress={() => navigation.navigate('Aboutcity')} />
            <Text style={styles.iconLabel}>About City</Text>
          </View>
          <View style={styles.iconItem}>
            <Icon name="ellipsis-horizontal-circle-outline" size={30} color="#007BFF" onPress={() => navigation.navigate('More')}/>
            <Text style={styles.iconLabel}>More</Text>
          </View>
        </View>
      </View>

      {/* YouTube Video Section */}
      <View style={styles.content}>
        {isError ? (
          <Text style={styles.errorMessage}>Something went wrong with the video. Please try again later.</Text>
        ) : (
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/ZCtydx3sjDo' }}
            style={styles.webview}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onError={(event) => handleError(event.nativeEvent)} // Trigger error handler
            onHttpError={(event) => handleError(event.nativeEvent)} // Trigger error handler for HTTP errors
            onLoadEnd={() => {
              console.log('WebView finished loading');
              setIsError(false);
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  iconsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignContent:'center'
  },
  iconItem: {
    alignItems: 'center',
    width: '22%',
  },
  regicon:{
marginLeft:15
  },
  iconLabel: {
    fontSize: 12,
    color: 'balck',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    fontWeight:'bold',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  webview: {
    width: '100%',
    height: 300,
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
});
