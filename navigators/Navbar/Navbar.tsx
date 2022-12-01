import React from 'react';
import {Text,View,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MainView, Menu } from '../../pages';
export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	const Tab = createBottomTabNavigator();
	return <>

		<Tab.Navigator 
			initialRouteName="MainView" 
			>
				<Tab.Screen
					name="MainView"
					component={MainView}/>
				<Tab.Screen
					name="Menu"
					component={Menu}/>
				
			</Tab.Navigator>
		
	</>
};

export default Navbar;
