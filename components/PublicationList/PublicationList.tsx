

import React, { useEffect , useState} from 'react';
import { ActivityIndicator, Button, Pressable, Text, View, Image, TouchableOpacity , StyleSheet} from 'react-native';
import { db,collection, getDocs, onSnapshot, getFirestore, ref, doc} from '../../services/Firebase/Firebase';
import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native-gesture-handler';
import { query, where } from 'firebase/firestore';


export interface PublicationListInterface {}

const PublicationList : React.FC<PublicationListInterface> = () => {
	const navigation = useNavigation()
	const PublicationsCard = (props:any) => { //Aqui se arregla el contenido de la lista de publicaciones
		console.log(props)
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
			  <View >
				
				
			  </View>
			</View>
		  </View>
		  </TouchableOpacity>
		);
	  };

	  function Filtrar(data:any, filtros:[]){
		return data.isActive;
	  }
	const [loading, setLoading] = useState(false);
	const [publishList, setPublishList] = useState([] as any[]);
	const [filterList,setFilterList] = useState(1);
	
	const getPublishList = async (filters:any) =>{
		console.log('Filtros: ',filters)
		const q = query(collection(db, "publish"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
  			const cities = [] as Array<any>;
  			querySnapshot.forEach((doc) => {
			if(Filtrar(doc.data(),filters)){
				const data = doc.data()
				data.id= doc.id;
      			cities.push(data);
			}
			else{
				console.log(doc.data().isActive)
			}
			
  			});
			setPublishList(cities)
		});
	}
	useEffect(()=>{
		getPublishList(filterList);
		
	},[])


	
	if(loading){
		return (
			<ActivityIndicator/>
		)
	}
	return <>

		<Text>Soy publish jeje</Text>
		{
			publishList.length>0? 
			(
			<FlatList
				data={publishList} 
				renderItem={({item}) =><PublicationsCard title={item.title} isActive={item.isActive} id={item.id}/>} //Aqui se pasa la info hacia details
				style={styles.mainContainer2}

			/>)
			:
			(<Text>Nada que mostrar!</Text>)
		}
		

	</>
};
const styles = StyleSheet.create({
	cardImage: {
	  width: "10%",
	  
	  aspectRatio: 1,
	},
	mainContainer: {
	  paddingHorizontal: 20,

	},
	mainContainer2: {

		maxHeight:'25%'
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
	  marginVertical: 30,
	},
	mainHeader: {
	  fontSize: 22,
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
