import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';

export interface ProfileInterface {}


const Profile : React.FC<ProfileInterface> = () => {
	
  const navigation = useNavigation()

	const goPublish = () =>{
		navigation.navigate('CreatePublish')
	}
	
	return <>
	<SafeAreaView style={styles.container}>
	<View style={styles.container}>
		<Text style={styles.title}>Mis Publicaciones</Text>
		<TouchableOpacity
			onPress={goPublish}
			// style={styles.button}
			activeOpacity={1}>
			<Image source={require('../../assets/plus.png')} style={styles.imageIcon} />
		</TouchableOpacity>
	</View>
	</SafeAreaView>
	</>
};

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor:'#FFF3EB',
		alignItems : 'center',
		justifyContent : 'flex-start',
	},
	title:{
		color: '#333333',
		backgroundColor: 'transparent',
		fontSize: 20,
		textAlign: 'center',
		margin: 20,
	},
	text:{
		color: '#333333',
		backgroundColor: 'transparent',
		fontSize: 20,
		textAlign: 'left',
		margin: 20
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0B87BA',
		height: 50,
		width: 200,
		borderRadius: 15,
		margin: 10,
	},
	textButton:{
		color: '#FFF3EB',
		backgroundColor: 'transparent',
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	imageIcon: {
		width: 40,
		height: 40,
	},
});

export default Profile;
