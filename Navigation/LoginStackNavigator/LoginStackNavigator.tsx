import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createSwitchNavigator, createAppContainer } from 'react-navigation'
import React from 'react';
import { Details, ForgotPassword, Login, Register } from '../../pages';
import { Navigation } from '../Navigation';
import { CreatePublish } from '../../components/CreatePublish';
export interface LoginStackNavigatorInterface {}

const LoginStackNavigator : React.FC<LoginStackNavigatorInterface> = () => {
	const Stack = createNativeStackNavigator();
	return (
		
		<>
		<NavigationContainer>
      		<Stack.Navigator>
           		<Stack.Screen name="Login" component={Login} options={{
					// tabBarIcon: ({ color, size}) =>(),
					headerShown : false,
				}}/>
           <Stack.Screen name="Register" component={Register} />
           <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
           <Stack.Screen name="Navigation" component={Navigation} options={{
					// tabBarIcon: ({ color, size}) =>(),
					gestureEnabled: false,
					headerShown : false,
				}}/>
			<Stack.Screen name="Details" component={Details} />
			<Stack.Screen name="CreatePublish" component={CreatePublish} />
       </Stack.Navigator>
</NavigationContainer>
		</>
	)
};

export default LoginStackNavigator;
