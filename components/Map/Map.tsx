import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export interface MapInterface {}

const Map : React.FC<MapInterface> = () => {
	return <>
	<Text>Mapa</Text><View style={styles.container}>
      <MapView style={styles.map} 
	  initialRegion={{
      latitude: -33.4555447,
      longitude: -70.642035,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    }} />
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
