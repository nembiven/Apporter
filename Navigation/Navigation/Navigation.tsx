import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { PubliContextProvider } from '../../context/PublContext';
//Pages
import { MainView, Menu} from '../../pages';
import { ImageBackground, ImageComponent } from 'react-native';

export interface NavigationInterface {}

const Tab = createBottomTabNavigator();

function Navbar(){
	return (
		<PubliContextProvider>
			<Tab.Navigator 
				initialRouteName="MainView"
				screenOptions={{
					headerStyle: {backgroundColor: '#F3AE5F'},
					tabBarStyle: {backgroundColor: '#F3AE5F'},
					
				}}
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