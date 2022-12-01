import React from 'react';
import { Tabs } from 'react-native-router-flux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Pages
import { MainView, Menu} from '../../pages';


export interface NavigationInterface {}

const Tab = createBottomTabNavigator();

function MyTabs(){
	return (
		<Tab.Navigator
			initialRouteName="MainView"
		>
			<Tab.Screen 
				name="MainView" 
				component={MainView}
				options={{
					tabBarLabel: 'Mapa',
					// tabBarIcon: ({ color, size}) =>(
						
					// ),
					headerShown : false,
				}}
				/>
			<Tab.Screen 
				name="Menu" 
				component={Menu}
				options={{
					tabBarLabel:'Mas',
					// tabBarIcon
					headerShown:false,
				}}
				/>
		</Tab.Navigator>
	)
}
const Navigation : React.FC<NavigationInterface> = () => {
	return <>
		<NavigationContainer> 
			<MyTabs/>
		</NavigationContainer>
	</>
};

export default Navigation;
