import React from 'react';
import { Ads } from '../../components';
import {Text} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Filters,Publications,Profile } from '../../pages';

export interface MenuInterface {}

const Tab = createMaterialTopTabNavigator()
const Menu : React.FC<MenuInterface> = () => {
	return <>

			<Tab.Navigator 
				initialRouteName="Filtros"
			>
				<Tab.Screen name="Filtros" component={Filters} />
				<Tab.Screen name="Cerca" component={Publications}/>
				<Tab.Screen name="Perfil" component={Profile}/>
			</Tab.Navigator>


	</>;
};

export default Menu;
