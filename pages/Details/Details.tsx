import React from 'react';
import { StyleSheet, ActivityIndicator, Button, Pressable, Text, View, Image, TouchableOpacity } from 'react-native';
export interface DetailsInterface {}

const Details : React.FC<DetailsInterface> = (props) => {
	const info = props.route.params
	return <>
	<View style={styles.container}>
		<View style={styles.containerInfo}>
			<Text style={styles.title}>{info.title}</Text>
			{/* <Text style={styles.description}> isActive: {info.isActive}</Text> */}
			{/* <Text style={styles.subtitle}>Usuario: </Text>
			<Text style={styles.description}>{info.username}</Text> */}
			<Text style={styles.subtitle}>Descripcion:</Text>
			<Text style={styles.description}>{info.description}</Text>
			{/* <Text style={styles.subtitle}>Fecha: </Text>
			<Text style={styles.description}>{info.fecha}</Text> */}
		</View>
	</View>
	</>;
};

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor:'#F3AE5F',
		alignItems : 'center',
		justifyContent : 'center',
		padding: 40,
	},
	containerInfo:{
		flex: 1,
		backgroundColor:'#FFF3EB',
		borderRadius: 10,
		width: '100%',
	},
	title:{
		textAlign: 'center',
		fontSize: 20,
		color: "#333333",
		margin: 10,
	},
	subtitle:{
		textAlign: 'justify',
		// marginTop: 5,
		// marginBottom: 1,
		// lineHeight: 20,
	  	fontSize: 18,
		color: "#4d4d4d",
		padding: 14,
		fontWeight: 'bold',
	},
	description:{
		textAlign: 'justify',
		// marginTop: 2,
		// marginBottom: 2,
		lineHeight: 20,
	  	fontSize: 16,
		color: "#4d4d4d",
		padding: 14,
	},
});

export default Details;
