import React, { useEffect , useState} from 'react';
import { StyleSheet} from 'react-native';
import { PublicationList } from '../../components/PublicationList';

export interface PublishInterface {}



const Publications: React.FC<PublishInterface> = () => {
	
	return <>
		<PublicationList/>
	

	</>
};
const styles = StyleSheet.create({
	
  });

export default Publications;
