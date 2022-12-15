
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,Animated,TouchableOpacity , Alert} from 'react-native';
import {BlurView} from 'expo-blur'
export interface LoginInterface {}
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import {app} from '../../services/Firebase/Firebase'
import { useNavigation } from '@react-navigation/core';

function Login (){
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const auth = getAuth(app)
	const navigation = useNavigation()

	const movetoApp = () =>{
		navigation.navigate('Navigation')
	}
	const movetoRegister = () =>{
		navigation.navigate('Register')
	}
	const handleSignIn = () =>{
		signInWithEmailAndPassword(auth,email,password)
		.then((userCredential)=>{
			console.log('Signed in!')
			const user = userCredential.user;
		})
		.catch(error =>{
			
			Alert.alert(error.message)
		})
	}
	return (
	<>
	<View style={styles.containerMain}>
		{/* Containter Login */}
		<BlurView intensity={100}>
			<View style={styles.Login}>
				{/* Logo app */}
				<View style={styles.containerlogo}>
        			<Image source={require('../../assets/1logo.png')} style={styles.imagelogo} />
        			<Text style={styles.textlogo}>Bienvenido a APPORTER</Text>
      			</View>
				{/* Ingreso usuario*/}
				<View>
					<TextInput onChangeText={(text)=> setEmail(text)} style={styles.label} placeholder="Correo"/>
				</View>
				{/* Ingreso contraseña*/}
				<View>
					<TextInput secureTextEntry={true} onChangeText={(text)=> setPassword(text)} style={styles.label} placeholder="Contraseña"/>
				</View>
				{/* Recuperar contraseña */}
				<TouchableOpacity style={{top:-10}}>
					<Text style={styles.textdetails}>¿Olvidaste tu contraseña?</Text>
				</TouchableOpacity>
				{/* Submit Button */}
				<View>		
					<TouchableOpacity
						onPress={handleSignIn}
						style={styles.button}
						activeOpacity={1}>
						<Text style={styles.textButton}>Iniciar Sesión Usuario</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={movetoApp}
						style={styles.button}
						activeOpacity={1}>
						<Text style={styles.textButton}>Entrar app</Text>
					</TouchableOpacity>
        		</View>
			</View>
		</BlurView>
		{/* SignUp buttons */}
		<View>
			<TouchableOpacity onPress={movetoRegister} style={{top:-10}}>
				<Text style={styles.textdetails}>¿No tienes cuenta? Registrate</Text>
			</TouchableOpacity>
			{/* <TouchableOpacity style={styles.buttonSign} activeOpacity={1}>
				<Text style={styles.text}>Continuar con Google</Text>
			</TouchableOpacity> */}
      	</View>
	</View>
	
	</>)
};

const styles = StyleSheet.create({
	containerMain:{
		flex: 1,
		backgroundColor:'#FFF3EB',
		alignItems : 'center',
		justifyContent : 'center',
	},
	Login:{ //container login
		width:350,
		height:500,
		padding:10,
		alignItems: 'center',
		backgroundColor:'#FFF3EB',
	},
	label:{ //Label de input
    	alignContent: 'center',
    	justifyContent: 'center',
		backgroundColor: '#FFF3EB',
		position: 'relative',
		width: 350,
		height: 50,
		borderColor: '#0B87BA',
		borderStyle: 'solid',
		borderWidth: 2,
		borderRadius: 10,
		color: '#333333',
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	textdetails:{ //Texto pequeño
		color: '#4D4D4D',
		backgroundColor: 'transparent',
		fontSize: 12,
		textAlign: 'center',
		margin: 10
	},
	textButton:{
		color: '#FFF3EB',
		backgroundColor: 'transparent',
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
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
	containerlogo: {
		// flex: 3,
		alignItems: 'center',
		justifyContent: 'center', 
	},
	imagelogo: {
		width: 100,
		height: 102,
	},
	textlogo: {
		color: '#333333',
		backgroundColor: 'transparent',
		margin: 20,
		fontSize: 20,
	},

	// inlineImg: {
	// 	position: 'absolute',
	// 	zIndex: 99,
	// 	width: 22,
	// 	height: 22,
	// 	left: 35,
	// 	top: 9,
	// },
});

export default Login;
