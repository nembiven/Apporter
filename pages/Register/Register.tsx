import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,Animated,TouchableOpacity , Alert} from 'react-native';
import {BlurView} from 'expo-blur'
export interface RegisterInterface {}
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import {app} from '../../services/Firebase/Firebase'
import { useNavigation } from '@react-navigation/core';

const Register : React.FC<RegisterInterface> = () => {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [password2, setPassword2] = React.useState('')
	const auth = getAuth(app)
	const navigation = useNavigation()

	const movetoLogin = () =>{
		navigation.navigate('Login')
	}
	const handleCreateAccount = ()=>{
		createUserWithEmailAndPassword(auth,email,password)
		.then((userCredential )=>{
			console.log("Account created!")
			const user = userCredential.user;
			Alert.alert('Cuenta Creada!')
			movetoLogin()
		})
		.catch(error =>{
			console.log(error.code)
			Alert.alert('Error en el registro, intente nuevamente.')
		})
	}
	const validate = ()=>{
		if(password == password2){
			handleCreateAccount()
		}
		else{
			Alert.alert('Las contraseñas ingresadas no coinciden, intente nuevamente.')
		}
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
						<Text style={styles.textlogo}>Registrate en APPORTER</Text>
					</View>
					{/* Ingreso usuario*/}
					<View>
						<TextInput onChangeText={(text)=> setEmail(text)} style={styles.label} placeholder="Correo"/>
					</View>
					{/* Ingreso contraseña*/}
					<View>
						<TextInput secureTextEntry={true} onChangeText={(text)=> setPassword(text)} style={styles.label} placeholder="Contraseña"/>
					</View>
					{/* Ingreso contraseña x2*/}
					<View>
						<TextInput secureTextEntry={true} onChangeText={(text)=> setPassword2(text)} style={styles.label} placeholder="Repite contraseña"/>
					</View>
					{/* Submit Button */}
					<View>		
						<TouchableOpacity
							onPress={validate}
							style={styles.button}
							activeOpacity={1}>
							<Text style={styles.textButton}>Registrarse</Text>
						</TouchableOpacity>
					</View>
				</View>
			</BlurView>
			{/* SignUp buttons */}
			<View>
				<TouchableOpacity onPress={movetoLogin} style={{top:-10}}>
					<Text style={styles.textdetails}>¿Tienes cuenta? Inicia Sesion</Text>
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
		fontSize: 15,
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
});

export default Register;
