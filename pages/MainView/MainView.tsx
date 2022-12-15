import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

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
