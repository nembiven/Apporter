import React from 'react';
import { Ads, Map } from '../../components';
import { Navbar } from '../../navigators';

export interface MainViewInterface {}

const MainView : React.FC<MainViewInterface> = () => {
	return <>
		<Map/>
		{/* <Ads/> */}

	</>
	;
};

export default MainView;
