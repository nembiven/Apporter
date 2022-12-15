import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

import { Ads, Map } from '../../components';
import { PublicationList } from '../../components/PublicationList';


export interface MainViewInterface {}


const MainView : React.FC<MainViewInterface> = () => {

	return <>
		<Map/>
		{/* <Ads/> */}
		<PublicationList/>

	</>
	;
};

export default MainView;
