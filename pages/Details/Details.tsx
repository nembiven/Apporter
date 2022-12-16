import React from 'react';
import { StyleSheet, ActivityIndicator, Button, Pressable, Text, View, Image, TouchableOpacity } from 'react-native';
export interface DetailsInterface {}

const Details : React.FC<DetailsInterface> = (props) => {
	const info = props.route.params
	return <>
	<View style={styles.container}>
		<View style={styles.containerInfo}>
			<Text style={styles.title}>{info.title}</Text>
			<Text style={styles.description}> Id : {info.id}</Text>
			<Text style={styles.description}> isActive: {info.isActive}</Text>
			<Text style={styles.description}> Descripcion: {info.description}</Text>
			<Text style={styles.description}> Usuario: {info.username}</Text>
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
	description:{
		textAlign: 'justify',
		marginLeft: 10,
		marginRight: 10,
		lineHeight: 20,
	  	fontSize: 15,
		color: "#4d4d4d",
	},
});

export default Details;
