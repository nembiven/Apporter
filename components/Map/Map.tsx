import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PublishContextType } from '../../context/types';
import PublicationContext from "../../context/PublContext"

export interface MapInterface {}

export interface marker{
	title: string;
	coordinates:{
		latitude:number,
		longitude:number,
	}
	description:string;
}
const iniLatLng = { //Setear 
	latitude: -33.5875851,
	longitude: -70.6054836,
  }

const Map : React.FC<MapInterface> = () => {
	
	const {PublicationsContext,setPublicationsContext} = useContext(PublicationContext) as PublishContextType;
	const [markers,setMarkers] = useState([] as Array<any>)

	function Markers (){
		const markersx = [] as Array<any>
		PublicationsContext.forEach(element => {
			
			const mark = {
				title : element.title,
				coordinates:{
					latitude : element.lat,
					longitude: element.long,
				},
				description : element.description,
			}
			markersx.push(mark)
		})
		return (
			<>
			{
		markersx.map(marker => (
    	<Marker 
      		coordinate={marker.coordinates}
      		title={marker.title}
	  		description={marker.description}
    	/>))}
			</>
		)
	}
	return <>{
		
	}
	  <View style={styles.container}>
      	<MapView style={styles.map} 
	  	initialRegion={{
      	latitude: iniLatLng.latitude,
      	longitude: iniLatLng.longitude,
      	latitudeDelta: 0.01,
      	longitudeDelta: 0.01,
    	}}
		showsUserLocation={true}
		zoomEnabled={true}
		>
			{
				markers && <Markers/>
			}
	</MapView>
    </View>
	</>
};
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  maxHeight: '75%',
	},
	map: {
	  width: '100%',
	  height: '100%',
	},
  });
export default Map;
