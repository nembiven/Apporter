import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './navigators/Navigation';
import { MainView } from './pages';


import Login from './pages/Login/Login';




export default function App() {
  return (
    
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
});
