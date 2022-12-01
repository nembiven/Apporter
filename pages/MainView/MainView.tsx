import React from 'react';
import { Ads, Map } from '../../components';
import { Navbar } from '../../navigators';
import { Navigation } from '../../navigators/Navigation';
export interface MainViewInterface {}

const MainView : React.FC<MainViewInterface> = () => {
	return <>
		<Map/>
		{/* <Ads/> */}
		<Navigation/>
	</>
	;
};

export default MainView;
