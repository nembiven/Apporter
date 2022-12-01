import React from 'react';
import { Ads } from '../../components';
import {Text} from 'react-native'
export interface MenuInterface {}

const Menu : React.FC<MenuInterface> = () => {
	return <>
		<Text>Menu</Text>
	<Ads/>

	</>;
};

export default Menu;
