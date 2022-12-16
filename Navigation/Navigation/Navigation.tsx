import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { PubliContextProvider } from '../../context/PublContext';
//Pages
import { MainView} from '../../pages';
import { Menu } from '../Menu';

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