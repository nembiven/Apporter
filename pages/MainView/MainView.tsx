import React, { useEffect } from 'react';
import { BackHandler,View,StyleSheet} from 'react-native';

import { Ads, Map } from '../../components';
import { PublicationList } from '../../components/PublicationList';


export interface MainViewInterface {}


const MainView : React.FC<MainViewInterface> = () => {

	return <>
		<Map/>
		{/* <Ads/> */}
		<View style={styles.containerMap}>
			<PublicationList/>
		</View>
		

	</>
	;
};
const styles = StyleSheet.create({
	containerMap:{
		maxHeight:"25%",
	}
  });
export default MainView;
