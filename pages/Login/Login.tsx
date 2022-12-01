
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,Animated,TouchableOpacity , Alert} from 'react-native';
import {BlurView} from 'expo-blur'
export interface LoginInterface {}
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../../services/Firebase/Firebase'
import { useNavigation } from '@react-navigation/core';





function Login (){
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const app = initializeApp(firebaseConfig)
	const auth = getAuth(app)
	const navigation = useNavigation()

	const movetoApp = () =>{
		navigation.navigate('Navigation')
	}
	const handleCreateAccount = ()=>{
		createUserWithEmailAndPassword(auth,email,password)
		.then((userCredential )=>{
			console.log("Account created!")
			const user = userCredential.user;
			
			
			
		})
		.catch(error =>{
			Alert.alert(error.message)
		})
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
		{/* Wallpaper */}
		<Image source={require('../../assets/wallpaper.png')} style={[styles.Wallpaper,StyleSheet.absoluteFill]}/>
		{/* Containter Login */}
		<BlurView intensity={100}>
			<View style={styles.Login}>
				{/* Logo app */}
				<View style={styles.containerlogo}>
        			<Image source={require('../../assets/logo.png')} style={styles.imagelogo} />
        			<Text style={styles.textlogo}>APPORTER</Text>
      			</View>
				{/* Input User */}
				<View>
					<Image source={require('../../assets/username.png')} style={styles.inlineImg} />
					<TextInput onChangeText={(text)=> setEmail(text)} style={styles.input} placeholder="Usuario"/>
				</View>
				{/* Input Password */}
				<View>
					<Image source={require('../../assets/password.png')} style={styles.inlineImg} />
					<TextInput secureTextEntry={true} onChangeText={(text)=> setPassword(text)} style={styles.input} placeholder="Contraseña"/>
				</View>
				{/* Forgot Password */}
				<TouchableOpacity style={{top:-10}} activeOpacity={1}>
				<Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
			</TouchableOpacity>
				{/* Submit Button */}
				<View style={styles.containerS}>		
					<TouchableOpacity
						onPress={handleSignIn}
						style={styles.button}
						activeOpacity={1}>
						<Text style={styles.text}>Iniciar Sesión Usuario</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={movetoApp}
						style={styles.button}
						activeOpacity={1}>
						<Text style={styles.text}>Entrar app</Text>
					</TouchableOpacity>
        		</View>
				
			</View>
		</BlurView>
		{/* SignUp buttons */}
		<View style={styles.containerS}>
			<TouchableOpacity onPress={handleCreateAccount} style={styles.buttonSign} activeOpacity={1}>
				<Text style={styles.text}>Crear cuenta</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonSign} activeOpacity={1}>
				<Text style={styles.text}>Continuar con Google</Text>
			</TouchableOpacity>
      	</View>
	</View>
	
	</>)
};

const styles = StyleSheet.create({
	containerMain:{
		flex: 1,
		backgroundColor:'#fff',
		alignItems : 'center',
		justifyContent : 'center',
	},
	Wallpaper:{
		width:'100%',
		height:'100%',
		resizeMode :'cover',
	},
	Login:{
		width:350,
		height:500,
		borderColor:'#fff',
		borderWidth:2,
		borderRadius:10,
		padding:10,
		alignItems: 'center',
	},
	input :{
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: 300,
		height: 40,
		borderColor :'black',
		borderWidth :3,
		marginHorizontal: 20,
		paddingLeft: 45,
		borderRadius: 20,
		marginBottom: 20,
	},

	inputWrapper: {
		flex: 1,
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
	  },
	  button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		height: 50,
		width:150,
		borderRadius: 20,
	  },
	  buttonSign: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		height: 50,
		width:150,
		borderRadius: 5,
	  },
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	  },
	containerlogo: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	  },
	imagelogo: {
		width: 140,
		height: 140,
	  },
	textlogo: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
		fontSize: 40,
	  },
	  containerS: {
		top:50,
    	width: '100%',
    	flexDirection: 'row',
    	justifyContent: 'space-around',
	  },
	  texts: {
		color: 'white',
		backgroundColor: 'transparent',
	  },
});

export default Login;
