import React from 'react';
import { Ads, Map } from '../../components';

export interface MainViewInterface {}

const MainView : React.FC<MainViewInterface> = () => {
	return <>
		<Map/>
		{/* <Ads/> */}

	</>
	;
};

export default MainView;
