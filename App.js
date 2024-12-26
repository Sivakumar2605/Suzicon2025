import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Componets/Home';
import SearchScreen from './Componets/Search';
import SettingsScreen from './Componets/settings';
import AboutUsScreen from './Componets/Aboutus';
import Committee from './Componets/Committee';
import Venue from './Componets/Venue';
import AboutCity from './Componets/Aboutcity';
import ConferenceInfoScreen from './Componets/More';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Search') {
          iconName = 'search-outline';
        } else if (route.name === 'Committee') {
          iconName = 'people-outline';
        } else if (route.name === 'Scientific') {
          iconName = 'calendar-outline';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007BFF',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        height: 60,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: 'orange',
      },
      tabBarLabelStyle: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: '600',
      },
      headerShown: false, 
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Committee" component={Committee} />
    <Tab.Screen name="Scientific" component={SettingsScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome to Szusicon 2025" 
          component={TabNavigator} 
          options={{ headerShown: true }} 
        />
        <Stack.Screen name="About Us" component={AboutUsScreen} />
        <Stack.Screen name="Committee" component={Committee} />
        <Stack.Screen name="venue" component={Venue} />
        <Stack.Screen name="Aboutcity" component={AboutCity} />
        <Stack.Screen name="More" component={ConferenceInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
