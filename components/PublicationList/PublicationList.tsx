

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
			<View style={styles.courseContainer}>
			  <View>
				<Image
				//style={styles.cardImage}
				  source={props.image}
				  resizeMode="contain"
				/>
			  </View>
	
			  <Text style={styles.mainHeader}>{props.title}</Text>
			  <Text style={styles.description}>*{props.description}</Text>
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
	
	return <>
	
		{
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
	cardImage: {
	  width: "10%",
	  
	  aspectRatio: 1,
	},
	mainContainer: {
	  paddingHorizontal: 5,

	},
	courseContainer: {
	  padding: 20,
	  backgroundColor: "rgba(255, 255, 255, 0.90)",
	  textAlign: "center",
	  borderRadius: 5,
	  shadowColor: "grey",
	  shadowOffset: { width: 0, height: 0 },
	  shadowOpacity: 0.5,
	  shadowRadius: 8,
	  elevation: 8,
	  marginVertical: 10,
	},
	mainHeader: {
	  fontSize: 18,
	  color: "#344055",
	  textTransform: "uppercase",
	  // fontWeight: 500,
	  paddingBottom: 15,
	  textAlign: "center",
	},
	description: {
	  textAlign: "left",
	  paddingBottom: 15,
	  lineHeight: 20,
	  fontSize: 16,
	  color: "#7d7d7d",
	},
	buttonContainer: {
	  display: "flex",
	  flexDirection: "row",
	  justifyContent: "center",
	},
	buttonStyle: {
	  backgroundColor: "#809fff",
	  borderRadius: 5,
	  paddingVertical: 10,
	  paddingHorizontal: 20,
	  display: "flex",
	  justifyContent: "center",
	  alignItems: "center",
	},
	buttonText: {
	  fontSize: 20,
	  color: "#eee",
	  fontFamily: "JosefinSans_500Medium",
	  textTransform: "capitalize",
	},
  });

export default PublicationList;
