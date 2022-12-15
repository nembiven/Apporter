import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ForgotPassword, MainView, Register } from './pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';

import Login from './pages/Login/Login';
import { Navigation } from './Navigation';
import { LoginStackNavigator } from './Navigation/LoginStackNavigator';


// Trabajar con rutas

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <LoginStackNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
});
