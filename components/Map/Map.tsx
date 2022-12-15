import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export interface MapInterface {}


const iniLatLng = {
	latitude: -33.5875851,
	longitude: -70.6054836,
  }

const Map : React.FC<MapInterface> = () => {
	
	const state = {
		markers: [{
		  title: 'hello',
		  coordinates: {
			latitude: -33.5875851,
			longitude: -70.6054836
		  },
		  description:'hola',
		},
		{
		  title: 'hello2',
		  coordinates: {
			latitude: -33.5858984,
			longitude: -70.601538
		  },
		  description:'hola2',
		}]
	  }
	
	return <>
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
	{state.markers.map(marker => (
    <Marker 
      coordinate={marker.coordinates}
      title={marker.title}
	  description={marker.description}
    />))}
	</MapView>
    </View>
	</>
};
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	map: {
	  width: '100%',
	  height: '100%',
	},
  });
export default Map;
