
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {BlurView} from 'expo-blur'
export interface LoginInterface {}


const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'
const logoPicture = 'https://assets.stickpng.com/images/58ff7d3316ae4b3fc58f481f.png'
const Login : React.FC<LoginInterface> = () => {
	return (
	<>
	<View style={styles.container}>
		<Image source={{uri}} style={[styles.image,StyleSheet.absoluteFill]}/>
		<BlurView intensity={100}>
			<View style={styles.login}>
				<Image source={{uri : logoPicture}} style={styles.profilePicture}/>
				<View>
					<Text style={{fontSize:17,fontWeight:'400',color:'white'}}>E-mail </Text>
					<TextInput style={styles.input} placeholder="example@domain.com"/>
				</View>
			</View>
		</BlurView>
	</View>
	</>)
};

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor:'#fff',
		alignItems : 'center',
		justifyContent : 'center',
	},
	image:{
		width:'100%',
		height:'100%',
		resizeMode :'cover',
	},
	login:{
		width:350,
		height:500,
		borderColor:'#fff',
		borderWidth:2,
		borderRadius:10,
		padding:10,
		alignItems: 'center',
	},
	profilePicture:{
		width:100,
		height:100,
		borderRadius:50,
		borderColor : '#fff',
		borderWidth: 1,
	},
	input :{
		width: 250,
		height: 40,
		borderColors :'#fff',
		borderWidth :2,
		borderRadies: 10,
		padding: 10,
		marginvertical: 18,
		backgroundColors :'#ffffff90',
		marginBottom: 20

	}
});

export default Login;
