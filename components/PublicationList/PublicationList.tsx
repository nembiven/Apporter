import React, { useContext, useEffect , useState} from 'react';
import { ActivityIndicator,Text, View, Image, TouchableOpacity , StyleSheet} from 'react-native';
import { db,collection, getDocs, onSnapshot} from '../../services/Firebase/Firebase';
import { query} from 'firebase/firestore';
import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native-gesture-handler';
import PublicationContext from "../../context/PublContext"
import { Publish,PublishContextType } from '../../models';


export interface PublicationListInterface {}

const PublicationList : React.FC<PublicationListInterface> = () => {
	const navigation = useNavigation()
	const PublicationsCard = (props:any) => { //Aqui se arregla el contenido de la lista de publicaciones
		return (
			<TouchableOpacity
				onPress={() =>
				navigation.navigate("Details",props)}>
				<View style={styles.mainContainer}>
					<View style={styles.card}>
						<Image
							style={styles.cardImage}
							// source={props.image}
							source={require('../../assets/map.png')}
							resizeMode="contain"
							/>
						<View>
							<Text style={styles.title}>{props.title}</Text>
							<Text style={styles.description}>*{props.description}</Text>
						</View>
						
					</View>
		  		</View>
		  	</TouchableOpacity>
		);
	  };

	const [loading, setLoading] = useState(true);
	const {PublicationsContext,setPublicationsContext} = useContext(PublicationContext) as PublishContextType;

	const getPublishList = async () =>{
		const q = query(collection(db, "publish"));
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
				
			}

      		publ.push(Publi);
			
  			});
			setPublicationsContext(publ)
			setLoading(false)
		});
	}
	useEffect(()=>{
		getPublishList()
		
	},[])
	
	if(loading){
		return (
			<ActivityIndicator/>
		)
	}
	
	return <>{
		PublicationsContext.length>0? 
		(
		<FlatList
			data={PublicationsContext} 
			renderItem={({item}) =><PublicationsCard title={item.title}  id={item.id} description={item.description} lat={item.lat} long={item.long}/>} //Aqui se pasa la info hacia details
			style={styles.mainContainer}

		/>)
		:
		(<Text>Nada que mostrar</Text>)
		}
	</>
};
const styles = StyleSheet.create({
	mainContainer: {
		paddingHorizontal: 15,
		backgroundColor: '#FFF3EB', //Blanco
	},
	cardImage: {
	  width: 40,
	  height:40,
	},
	card: {
	  backgroundColor: "#F3AE5F", //Amarillo
	  flexDirection: 'row',
	  borderRadius: 5,
	  alignItems: 'center',
	  padding: 8,
	  textAlign: "left",
	  elevation: 5,
	  marginVertical: 10,
	  
	},
	title: {
	  fontSize: 20,
	  color: "#333333",
	  textTransform: "uppercase",
	//   paddingBottom: 5,
	  textAlign: "left",
	},
	description: {
	  textAlign: "left",
	//   margin: 5,
	//   lineHeight: 20,
	  fontSize: 14,
	  color: "#4d4d4d",
	},
	// buttonContainer: {
	//   display: "flex",
	//   flexDirection: "row",
	//   justifyContent: "center",
	// },
	// buttonStyle: {
	//   backgroundColor: "#809fff",
	//   borderRadius: 5,
	//   paddingVertical: 10,
	//   paddingHorizontal: 20,
	//   display: "flex",
	//   justifyContent: "center",
	//   alignItems: "center",
	// },
	// buttonText: {
	//   fontSize: 20,
	//   color: "#eee",
	//   fontFamily: "JosefinSans_500Medium",
	//   textTransform: "capitalize",
	// },
  });

export default PublicationList;
