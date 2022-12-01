import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ForgotPassword, MainView, Register } from './pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';

import Login from './pages/Login/Login';
import { Navigation } from './Navigation';




const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      screenOptions={({ navigation, route }) => ({
        headerLeft: (props) => {
          return (
            <>
            </>
          );
        },
      })}>
           <Stack.Screen name="Login" component={Login} options={{
					// tabBarIcon: ({ color, size}) =>(),
					headerShown : false,
				}}/>
           <Stack.Screen name="Register" component={Register} />
           <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
           <Stack.Screen name="Navigation" component={Navigation} options={{
					// tabBarIcon: ({ color, size}) =>(),
					headerShown : false,
				}}/>
       </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
});
