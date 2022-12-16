import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Publications,Profile } from '../../pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export interface MenuInterface {}

const Tab = createMaterialTopTabNavigator()
const Menu : React.FC<MenuInterface> = () => {
const Stack = createNativeStackNavigator();



	
	return <>

			<Tab.Navigator 
				initialRouteName="Cerca"
			>		
				<Tab.Screen name="Cerca" component={Publications}/>
				<Tab.Screen name="Publicaciones" component={Profile}/>
				
			</Tab.Navigator>


	</>;
};

export default Menu;
