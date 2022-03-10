

import { View, Text, TextInput, StyleSheet, Button, Switch } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import PresentationScreen from './screens/PresentationScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Home' }} ></Stack.Screen>
        <Stack.Screen name="Final" component={PresentationScreen} options={{ title: "All Details" }}></Stack.Screen>
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Detail" }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
