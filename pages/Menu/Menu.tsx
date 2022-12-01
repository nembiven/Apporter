import React from 'react';
import { Ads } from '../../components';
import { Navbar, TopBarNavigator } from '../../navigators';
export interface MenuInterface {}

const Menu : React.FC<MenuInterface> = () => {
	return <>
	<TopBarNavigator/>
	<Ads/>
	<Navbar/>
	</>;
};

export default Menu;
