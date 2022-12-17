import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Image, FlatList, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { db,collection, getDocs, onSnapshot, app} from '../../services/Firebase/Firebase';
import { deleteDoc, doc, query, where} from 'firebase/firestore';
import { useNavigation } from '@react-navigation/core';
import { Publish } from '../../models';
import { getAuth } from 'firebase/auth';

export interface ProfileInterface {}


const Profile : React.FC<ProfileInterface> = () => {

	const [myPublish,setMyPublish] = useState(Array<Publish>)
	const PublicationsCard = (props:any) => { //Aqui se arregla el contenido de la lista de publicaciones
		console.log(props)
		return (
			<TouchableOpacity
				onPress={() =>
				navigation.navigate("Detalle",props)}>
				<View >
					<View style={styles.card}>
						<Image
							style={styles.cardImage}
							// source={props.image}
							source={require('../../assets/map.png')}
							resizeMode="contain"
							/>
							
						<View>
							<Text style={styles.title}>{props.title} - {props.label}</Text>
							
							<Text style={styles.description}>{props.adress}</Text>
							
						</View>
						<Button

							title="Borrar"
							color="red"

							/>
					</View>
					
				  </View>
				  
			  </TouchableOpacity>
		);
	  };
	const getPublishList = async () =>{
		const auth = getAuth(app)
		const q = query(collection(db, "publish"), where("idUser", "==", auth.currentUser?.uid));
		
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
  			const publ = [] as Array<Publish>;
  			querySnapshot.forEach((doc) => {
			const Publi : Publish ={
				id: doc.id,
				title: doc.data().title,
				description :  doc.data().description,
				lat:doc.data().lat,
				long:doc.data().long,
				userid: doc.data().userid,
				username : doc.data().username,
				label : doc.data().label,
				phone : doc.data().phone,
				mail : doc.data().mail,
				adress: doc.data().adress,
				date : doc.data().date,
				
			}

      		publ.push(Publi);
			
  			});
			setMyPublish(publ)
		});
	}
	useEffect(()=>{
		getPublishList()
		
	},[])

	const navigation = useNavigation()

	const goPublish = () =>{
		navigation.navigate('Publicacion')
	}
	async function deletear(id:any){
		await deleteDoc(doc(db, "publish", id));
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
	<View>
	{
		myPublish.length>0? 
		(
		<FlatList
			data={myPublish} 
			renderItem={({item}) =><PublicationsCard title={item.title}  id={item.id} description={item.description} lat={item.lat} date={item.date} long={item.long} label={item.label} adress={item.adress} phone={item.phone}/>} //Aqui se pasa la info hacia details
			

		/>)
		:
		(<Text>Nada que mostrar</Text>)
		}
	</View>
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
	},description:{
		//   margin: 5,
		//   lineHeight: 20,
		  fontSize: 14,
		  color: "#4d4d4d",
		  textAlign: 'justify',
		},
		mainContainer: {
			paddingHorizontal: 15,
			paddingVertical: 200,
			backgroundColor: '#FFF3EB', //Blanco
		},cardImage: {
			width: 40,
			height:40,
		  },
		  card: {
			backgroundColor: "#F3AE5F", //Amarillo
			flexDirection: 'row',
			borderRadius: 5,
			alignItems: 'center',
			padding: 8,
			textAlign: 'justify',
			elevation: 5,
			marginVertical: 10,
			overflow: 'hidden',
			paddingEnd: 60,
			
		  },
});

export default Profile;
