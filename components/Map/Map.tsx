import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PublishContextType } from '../../models';
import PublicationContext from "../../context/PublContext"
import * as Location from 'expo-location'
import { useNavigation } from '@react-navigation/core';

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
	const [latin,setlatin]=useState(-33.4666)
	const [longin,setlongin]=useState(-70.5970)

	async  function  GetLocation () {
		const { status } = await Location.requestForegroundPermissionsAsync();

		if (status !== "granted") {
		  Alert.alert(
			"Permission not granted",
			"Allow the app to use location service.",
			[{ text: "OK" }],
			{ cancelable: false }
		  );
		}
	
		const { coords } = await Location.getCurrentPositionAsync();
	
		if (coords) {
		  const { latitude, longitude } = coords;
		  setlatin(latitude)
		  setlongin(longitude)
		  let response = await Location.reverseGeocodeAsync({
			latitude,
			longitude,
		  });
	
		  /*for (let item of response) {
			let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
	
			Alert.alert(address);
		  }*/
		}
	  };
	function Markers (){
		const navigation = useNavigation()
		GetLocation()
		const markersx = [] as Array<any>
		PublicationsContext.forEach(element  => {

			const mark = {
				title : element.title,
				coordinates:{
					latitude : element.lat,
					longitude: element.long,
				},
				adress : element.adress,
				entire : element,
				label : element.label
			}
			if(element.label == "Ropa")
				mark.label = require('../../assets/Ropa.png')
			if(element.label == "Dinero")
				mark.label = require('../../assets/Dinero.png')
			if(element.label == "Comida")
				mark.label = require('../../assets/Comida.png')
			if(element.label == "Olla_comun")
				mark.label = require('../../assets/Olla_comun.png')
			if(element.label == "Juguetes")
				mark.label = require('../../assets/Juguetes.png')
			markersx.push(mark)
		})
		return (
			<>
			{
		markersx.map(marker => (
    	<Marker 
			//image = {require('../../assets/'+'map'+'.png')}
			icon = {marker.label}
			key={marker.key}
      		coordinate={marker.coordinates}
      		title={marker.title}
	  		description={marker.adress}
			onCalloutPress={()=> navigation.navigate("Detalle",marker.entire)}
			
    	/>))}
			</>
		)
	}
	return <>{
		
	}
	  <View style={styles.container}>
		
      	<MapView style={styles.map} 
	  	initialRegion={{
      	latitude: latin,
      	longitude: longin,
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

