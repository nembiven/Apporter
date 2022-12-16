import React from 'react';
import { Tabs } from 'react-native-router-flux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PubliContextProvider } from '../../context/PublContext';
//Pages
import { MainView, Menu} from '../../pages';

export interface NavigationInterface {}

const Tab = createBottomTabNavigator();

function Navbar(){
	return (
		<PubliContextProvider>
			<Tab.Navigator
			initialRouteName="MainView"
		>
			<Tab.Screen 
				name="MainView" 
				component={MainView}
				options={{
					tabBarLabel: 'Mapa',
					// tabBarIcon: ({ color, size}) =>(),
					headerShown : false,
				}}
				/>
			<Tab.Screen 
				name="Menu" 
				component={Menu}
				options={{
					tabBarLabel:'Mas',
					// tabBarIcon
					headerShown:true,
				}}
				/>
			</Tab.Navigator>
		</PubliContextProvider>
		
	)
}
const Navigation : React.FC<NavigationInterface> = () => {
	
	return <>
			<Navbar/>
	</>
};

export default Navigation;