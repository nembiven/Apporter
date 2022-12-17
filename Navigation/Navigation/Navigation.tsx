import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { PubliContextProvider } from '../../context/PublContext';
//Pages
import { MainView} from '../../pages';
import { Menu } from '../Menu';
import { ImageBackground, ImageComponent } from 'react-native';

export interface NavigationInterface {}

const Tab = createBottomTabNavigator();

function Navbar(){
	return (
		<PubliContextProvider>
			<Tab.Navigator 
				initialRouteName="MainView"
				screenOptions={({ route }) => ({ 
					headerStyle: {backgroundColor: '#F3AE5F'},
					tabBarStyle: {backgroundColor: '#F3AE5F'},
					tabBarIcon: ({ focused, color, size }) => {
						if (route.name === 'MainView') {
						  return (
							<Ionicons
							  name={
								focused
								  ? 'map'
								  : 'map-outline'
							  }
							  size={size}
							  color={color}
							/>
						  );
						} 
						else if (route.name === 'Menu') {
						  return (
							<Ionicons
							  name={
								focused 
								? 'ios-list' 
								: 'ios-list-outline'}
							  size={size}
							  color={color}
							/>
						  );
						}
					  },
					  tabBarInactiveTintColor: '#FFF3EB',
					  tabBarActiveTintColor: '#0B87BA'
				})}
			>
			<Tab.Screen 
				name="MainView" 
				component={MainView}
				options={{
					tabBarLabel: 'Mapa',
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